import { Injectable } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';

@Injectable({
	providedIn: 'root'
})
export class PermissionService {
	private user: User | null = null;

	constructor(private readonly auth: Auth) {
		this.auth.onAuthStateChanged((_user: User | null) => {
			this.user = _user;
		});
	}

	get isAuthenticated(): boolean {
		return !!this.user;
	}
}
