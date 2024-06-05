import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import {
	Auth,
	createUserWithEmailAndPassword,
	signOut,
	UserCredential
} from '@angular/fire/auth';
import { Router } from '@angular/router';

import { FirebaseStorage } from '../../../common/constants/firebase.constants';
import { Route } from '../../../shared/routes/routes';
import { StorageService } from '../storage/storage.service';
import { AuthStrategy } from './auth.strategy';
import { EmailAndPasswordStrategy } from './emailandpassword.strategy';
import { FacebookStrategy } from './facebook.strategy';
import { GoogleStrategy } from './google.strategy';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	public EmailAndPassStrategy = inject(EmailAndPasswordStrategy);
	public GoogleStrategy = inject(GoogleStrategy);
	public FacebookStrategy = inject(FacebookStrategy);

	private _authStrategy: AuthStrategy;
	private readonly _auth = inject(Auth);
	private readonly _router = inject(Router);
	private readonly _storageService = inject(StorageService);

	public SigninMethod: WritableSignal<{
		[key: string]: { method: string; loading: boolean };
	}> = signal({
		email: { method: 'email', loading: false },
		faebook: { method: 'facebook', loading: false },
		google: { method: 'google', loading: false }
	});

	constructor() {
		this._authStrategy = this.EmailAndPassStrategy;
	}

	public setAuthenticationStrategy(strategy: AuthStrategy): void {
		this._authStrategy = strategy;
	}

	public authenticate(credentials?: unknown): Promise<UserCredential> {
		return this._authStrategy!.authenticate(credentials);
	}

	public _signUp(email: string, password: string): Promise<UserCredential> {
		return createUserWithEmailAndPassword(this._auth, email, password);
	}

	public _signOut(): Promise<void> {
		return signOut(this._auth);
	}

	public _executeSigninMethod(
		authentication: Promise<UserCredential>,
		key: string
	): void {
		this.SigninMethod.update((_data) => ({
			..._data,
			[key]: { ..._data[key], loading: true }
		}));

		authentication
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.then((_userCredential: any) => {
				if (_userCredential) {
					this._storageService.setItem<UserCredential>(
						FirebaseStorage.FIREBASE_USER_CREDENTIAL,
						_userCredential as UserCredential
					);

					this._storageService.setItem<UserCredential>(
						FirebaseStorage.ACCESS_TOKEN,
						_userCredential.user.accessToken ?? ''
					);

					this._router.navigate([Route.root()]);
				}
			})
			.catch((error) => {
				console.error(`Something went wrong with ${key} signin...`, error);
				this._storageService.setItem<UserCredential | undefined>(
					FirebaseStorage.FIREBASE_USER_CREDENTIAL,
					undefined
				);
				this.SigninMethod.update((_data) => ({
					..._data,
					[key]: { ..._data[key], loading: false }
				}));
				this._router.navigate([Route.login.root()]);
			})
			.finally(() => {
				this.SigninMethod.update((_data) => ({
					..._data,
					[key]: { ..._data[key], loading: false }
				}));
			});
	}
}
