import { Injectable } from '@angular/core';
import {
	Auth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	UserCredential
} from '@angular/fire/auth';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	constructor(private readonly auth: Auth) {}

	public signOut(): void {
		this.auth.signOut();
	}

	public signIn(email: string, password: string): Promise<UserCredential> {
		return signInWithEmailAndPassword(this.auth, email, password);
	}

	public signUp(email: string, password: string): Promise<UserCredential> {
		return createUserWithEmailAndPassword(this.auth, email, password);
	}
}
