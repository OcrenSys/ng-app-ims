import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../../core/services/authentication/authentication.service';
import { Route } from '../../../routes/routes';

@Component({
	selector: 'ims-dropdown-user',
	standalone: true,
	imports: [],
	templateUrl: './dropdown-user.component.html',
	styleUrl: './dropdown-user.component.sass'
})
export class DropdownUserComponent {
	private readonly _authenticationService = inject(AuthenticationService);
	private readonly _router = inject(Router);

	protected user = {
		avatar:
			'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg',
		name: 'Jhon Doe',
		username: 'Jhon',
		email: 'jhondoe@gmail.com',
		role: 'Admin'
	};
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
					.then(() => this._router.navigate([Route.login.root()]));
			}
		}
	];
}
