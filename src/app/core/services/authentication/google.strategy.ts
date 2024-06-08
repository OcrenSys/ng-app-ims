import { inject } from '@angular/core';
import {
	Auth,
	GoogleAuthProvider,
	signInWithPopup,
	UserCredential
} from '@angular/fire/auth';

import { AuthStrategy } from './auth.strategy';

export class GoogleStrategy implements AuthStrategy {
	private readonly provider = inject(GoogleAuthProvider);
	private readonly auth = inject(Auth);

	public authenticate(): Promise<UserCredential> {
		return signInWithPopup(this.auth, this.provider);
	}
}
