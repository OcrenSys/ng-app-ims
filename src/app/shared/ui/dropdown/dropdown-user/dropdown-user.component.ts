import {
	Component,
	inject,
	OnInit,
	signal,
	WritableSignal
} from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { FirebaseStorage } from '../../../../common/constants/firebase.constants';
import { AuthenticationService } from '../../../../core/services/authentication/authentication.service';
import { StorageService } from '../../../../core/services/storage/storage.service';
import { Route } from '../../../routes/routes';

@Component({
	selector: 'ims-dropdown-user',
	standalone: true,
	imports: [],
	templateUrl: './dropdown-user.component.html',
	styleUrl: './dropdown-user.component.sass'
})
export class DropdownUserComponent implements OnInit {
	private readonly _authenticationService = inject(AuthenticationService);
	private readonly _router = inject(Router);
	private _storageService = inject(StorageService);

	protected menu = [
		{
			label: 'Dashboard',
			href: '/dashboard',
			action: (): void => {
				console.log('dashboard');
			}
		},
		{
			label: 'Configuraciones',
			href: '/settings',
			action: (): void => {
				console.log('settings');
			}
		},
		{
			label: 'Cerrar Sesion',
			href: '/logout',
			action: (): void => {
				this._authenticationService
					._signOut()
					.then(() => {
						this._storageService.setItem<UserCredential | undefined>(
							FirebaseStorage.FIREBASE_USER_CREDENTIAL,
							undefined
						);
					})
					.then(() => this._router.navigate([Route.login.root()]));
			}
		}
	];
	protected user: WritableSignal<UserCredential | undefined> =
		signal(undefined);

	ngOnInit(): void {
		this.user.set(
			this._storageService.getItem<UserCredential | undefined>(
				FirebaseStorage.FIREBASE_USER_CREDENTIAL
			)
		);
	}

	get avatar(): string {
		const url = this.user()?.user?.photoURL || '';
		return url ? url : FirebaseStorage.AVATAR_URL;
	}

	get email(): string {
		return this.user()?.user?.email || '';
	}

	get username(): string {
		return this.user()?.user?.displayName || '';
	}
}
