import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { environment } from '../../../../environments/environment';
import { FirebaseStorage } from '../../../common/constants/firebase.constants';
import { StorageService } from '../storage/storage.service';

@Injectable({
	providedIn: 'root'
})
export class RefreshTokenService {
	private readonly _storageService = inject(StorageService);
	private readonly _http = inject(HttpClient);

	getRefreshToken(): Observable<UserCredential | undefined> {
		const {
			user: { refreshToken }
		} = this._storageService.getItem(
			FirebaseStorage.FIREBASE_USER_CREDENTIAL
		) as UserCredential;

		const body = new HttpParams()
			.append('refresh_token', refreshToken ?? '')
			.append('grant_type', 'refresh_token');

		if (refreshToken)
			return this._http.post<UserCredential>(
				`https://securetoken.googleapis.com/v1/token?key=${environment?.firebase?.apiKey}`,
				body,
				{
					headers: new HttpHeaders().set(
						'Content-Type',
						'application/x-www-form-urlencoded'
					)
				}
			);

		return of(undefined);
	}
}
