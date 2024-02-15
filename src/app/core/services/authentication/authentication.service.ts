import { inject, Injectable } from '@angular/core';
import {
	Auth,
	createUserWithEmailAndPassword,
	FacebookAuthProvider,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	UserCredential
} from '@angular/fire/auth';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	private readonly _auth = inject(Auth);
	private readonly _googleAuthProvider = new GoogleAuthProvider();
	private readonly _facebookAuthProvider = new FacebookAuthProvider();

	public _signOut(): Promise<void> {
		return signOut(this._auth);
	}

	public _signIn(email: string, password: string): Promise<UserCredential> {
		return signInWithEmailAndPassword(this._auth, email, password);
	}

	public _signInGoogle(): Promise<UserCredential> {
		return signInWithPopup(this._auth, this._googleAuthProvider);
	}

	public _signUp(email: string, password: string): Promise<UserCredential> {
		return createUserWithEmailAndPassword(this._auth, email, password);
	}
}
