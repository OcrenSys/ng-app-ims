import {
	HttpEvent,
	HttpEventType,
	HttpHandlerFn,
	HttpInterceptorFn,
	HttpRequest
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

import { FirebaseStorage } from '../../../common/constants/firebase.constants';
import { RefreshTokenService } from '../authentication/refresh.token.service';
import { StorageService } from '../storage/storage.service';

export const ApiInterceptor: HttpInterceptorFn = (
	req: HttpRequest<unknown>,
	next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
	const _refreshTokenService: RefreshTokenService = inject(RefreshTokenService);
	const _storageService: StorageService = inject(StorageService);

	let _req: HttpRequest<unknown> = req;
	const _accessToken: string =
		_storageService.getItem<string>(FirebaseStorage.ACCESS_TOKEN) ?? '';

	if (_accessToken)
		_req = req.clone({
			setHeaders: {
				Authorization: `Bearer ${_accessToken ?? ''}`
			}
		});

	return next(_req).pipe(
		tap((event: HttpEvent<unknown>) => {
			if (event.type === HttpEventType.Response) {
				console.log(req.url, 'returned a response', event);
			}
		}),
		catchError((error) => {
			let _req = req;

			if (error.status === 403) {
				_refreshTokenService.getRefreshToken().subscribe({
					next: (_accessToken) => {
						console.log('new access_token...');

						if (_accessToken)
							_req = req.clone({
								setHeaders: {
									Authorization: `Bearer ${_accessToken ?? ''}`
								}
							});
					},
					error: () => {},
					complete: () => {
						ApiInterceptor(_req, next);
					}
				});
			}
			return throwError(error);
		})
	);
};
