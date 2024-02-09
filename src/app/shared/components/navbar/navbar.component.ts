import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { ToggleThemeComponent } from '../../ui/toggle-theme/toggle-theme.component';

@Component({
	selector: 'ims-navbar',
	standalone: true,
	imports: [MatIconModule, ToggleThemeComponent],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.sass'
})
export class NavbarComponent {
	authService = inject(AuthenticationService);
	@Output() toggle: EventEmitter<undefined> = new EventEmitter();

	onToggle(): void {
		this.toggle.emit();
	}

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
				this.authService.signOut();
			}
		}
	];
	protected user = {
		avatar:
			'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg',
		name: 'Jhon Doe',
		username: 'Jhon',
		email: 'jhondoe@gmail.com',
		role: 'Admin'
	};
}
