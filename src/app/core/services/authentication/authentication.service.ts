import { Injectable } from '@angular/core';
import {
	Auth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	UserCredential
} from '@angular/fire/auth';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	constructor(private readonly auth: Auth) {}

	public _signOut(): Promise<void> {
		return signOut(this.auth);
	}

	public _signIn(email: string, password: string): Promise<UserCredential> {
		return signInWithEmailAndPassword(this.auth, email, password);
	}

	public _signUp(email: string, password: string): Promise<UserCredential> {
		return createUserWithEmailAndPassword(this.auth, email, password);
	}
}
