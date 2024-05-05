import { inject } from '@angular/core';
import {
	Auth,
	FacebookAuthProvider,
	signInWithPopup,
	UserCredential
} from '@angular/fire/auth';

import { AuthStrategy } from './auth.strategy';

export class FacebookStrategy implements AuthStrategy {
	private readonly provider = inject(FacebookAuthProvider);
	private readonly auth = inject(Auth);

	public authenticate(): Promise<UserCredential> {
		return signInWithPopup(this.auth, this.provider);
	}
}
