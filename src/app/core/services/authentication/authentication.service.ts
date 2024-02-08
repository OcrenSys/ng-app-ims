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
	// auth = getAuth();

	constructor(private readonly auth: Auth) {}

	signIn(email: string, password: string): void {
		signInWithEmailAndPassword(this.auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
				// ...
			})
			.catch((error) => {
				console.log('error code: ', error.code);
				console.log('error code: ', error.message);
			});
	}

	signUp(email: string, password: string): void {
		createUserWithEmailAndPassword(this.auth, email, password)
			.then((userCredential) => {
				// Signed up
				const user = userCredential.user;
				console.log(user);
				// ...
			})
			.catch((error) => {
				console.log('error code: ', error.code);
				console.log('error code: ', error.message);
				// ..
			});
	}
}
