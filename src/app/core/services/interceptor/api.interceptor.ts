import {
	HttpEvent,
	HttpEventType,
	HttpHandlerFn,
	HttpInterceptorFn,
	HttpRequest
} from '@angular/common/http';
import { inject } from '@angular/core';
import {
	catchError,
	Observable,
	shareReplay,
	switchMap,
	tap,
	throwError
} from 'rxjs';

import { FirebaseStorage } from '../../../common/constants/firebase.constants';
import { RefreshTokenService } from '../authentication/refresh.token.service';
import { StorageService } from '../storage/storage.service';

const MAX_REQUESTs = 3;
let requestCount = 0;
export const ApiInterceptor: HttpInterceptorFn = (
	_httpRequest: HttpRequest<unknown>,
	_httpHandler: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
	const _storageService: StorageService = inject(StorageService);
	const _refreshTokenService: RefreshTokenService = inject(RefreshTokenService);

	let __httpRequestClone: HttpRequest<unknown> = _httpRequest;
	const _accessToken: string =
		_storageService.getItem<string>(FirebaseStorage.ACCESS_TOKEN) ?? '';

	if (_accessToken)
		__httpRequestClone = _httpRequest.clone({
			setHeaders: {
				Authorization: `Bearer ${_accessToken ?? ''}`
			}
		});

	return HttpHandler(
		__httpRequestClone,
		_httpHandler,
		_storageService,
		_refreshTokenService
	);
};

const HttpHandler = (
	_req: HttpRequest<unknown>,
	_next: HttpHandlerFn,
	_storageService: StorageService,
	_refreshTokenService: RefreshTokenService
): Observable<HttpEvent<unknown>> => {
	return _next(_req).pipe(
		tap((event: HttpEvent<unknown>) => {
			if (event.type === HttpEventType.Response) {
				console.log(_req.url, 'returned a response', event);
			}
		}),
		catchError((error) => {
			console.log('HttpHandler, error...', error);

			if (error.status === 403)
				return VerifyToken(_req, _next, _storageService, _refreshTokenService);

			return throwError(error);
		})
	);
};

const VerifyToken = (
	_req: HttpRequest<unknown>,
	_next: HttpHandlerFn,
	_storageService: StorageService,
	_refreshTokenService: RefreshTokenService
): Observable<HttpEvent<unknown>> => {
	let __httpRequestClone = _req;

	return _refreshTokenService.verifyIdToken()?.pipe(
		shareReplay(MAX_REQUESTs),
		switchMap((_newAccessToken: string) => {
			if (_newAccessToken) {
				_storageService.setItem<string>(
					FirebaseStorage.ACCESS_TOKEN,
					_newAccessToken ?? ''
				);

				__httpRequestClone = _req.clone({
					setHeaders: {
						Authorization: `Bearer ${_newAccessToken ?? ''}`
					}
				});
			}

			if (requestCount <= MAX_REQUESTs) {
				requestCount++;
				return HttpHandler(
					__httpRequestClone,
					_next,
					_storageService,
					_refreshTokenService
				);
			} else {
				// Reset count after max retries
				requestCount = 0;
				return _next(__httpRequestClone);
			}
		}),
		catchError((error: unknown) => {
			console.log('VerifyToken, error...', error);
			return throwError(error);
		})
	);
};