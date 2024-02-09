/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import {
	// getAuth,
	Auth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword
} from '@angular/fire/auth';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	constructor(private readonly auth: Auth) {}

	public isLoggedIn(): Promise<boolean> {
		return new Promise((resolve: any) => {
			this.auth.onAuthStateChanged((user: any) => {
				user ? resolve(true) : resolve(false);
			});
		});
	}

	public signOut(): void {
		this.auth.signOut();
	}

	public signIn(email: string, password: string): void {
		signInWithEmailAndPassword(this.auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
			})
			.catch((error) => {
				console.log('error code: ', error.code);
				console.log('error code: ', error.message);
			});
	}

	public signUp(email: string, password: string): void {
		createUserWithEmailAndPassword(this.auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
			})
			.catch((error) => {
				console.log('error code: ', error.code);
				console.log('error code: ', error.message);
			});
	}
}
