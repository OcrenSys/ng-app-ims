import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { ToggleThemeComponent } from '../../ui/toggle-theme/toggle-theme.component';

@Component({
	selector: 'ims-navbar',
	standalone: true,
	imports: [MatIconModule, ToggleThemeComponent],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.sass'
})
export class NavbarComponent {
	@Output() toggle: EventEmitter<undefined> = new EventEmitter();

	onToggle(): void {
		this.toggle.emit();
	}

	protected menu = [
		{
			label: 'Dashboard',
			href: '/'
		},
		{
			label: 'Configuraciones',
			href: '/settings'
		},
		{
			label: 'Cerrar Sesion',
			href: '/logout'
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
