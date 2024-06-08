import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RefreshTokenService {
	private auth = inject(Auth);

	verifyIdToken(): Observable<string> {
		return from(
			this.auth?.currentUser?.getIdToken(/* forceRefresh */ true) ?? ''
		);
	}
}
