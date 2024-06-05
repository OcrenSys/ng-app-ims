import { inject } from '@angular/core';
import {
	Auth,
	signInWithEmailAndPassword,
	UserCredential
} from '@angular/fire/auth';

import { AuthStrategy } from './auth.strategy';

export class EmailAndPasswordStrategy implements AuthStrategy {
	private readonly auth = inject(Auth);

	public authenticate(credentials: {
		email: string;
		password: string;
	}): Promise<UserCredential> {
		return signInWithEmailAndPassword(
			this.auth,
			credentials.email,
			credentials.password
		);
	}
}
