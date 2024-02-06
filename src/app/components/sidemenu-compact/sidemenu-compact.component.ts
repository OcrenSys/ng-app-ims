import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Menu } from '../../common/types/menu.type';
import { MenuSidebar } from '../../shared/routes/menu.sidebar';

@Component({
	selector: 'ims-side-menu-compact',
	standalone: true,
	imports: [MatListModule, RouterModule, FontAwesomeModule],
	templateUrl: './sidemenu-compact.component.html',
	styleUrl: './sidemenu-compact.component.sass'
})
export class SideMenuCompactComponent {
	protected links = [
		{
			label: 'C',
			isActive: false,
			href: 'comics'
		},
		{
			label: 'Ch',
			isActive: false,
			href: 'characters'
		},
		{
			label: 'St',
			isActive: false,
			href: 'stories'
		},
		{
			label: 'Ev',
			isActive: false,
			href: 'events'
		},
		{
			label: 'Cr',
			isActive: false,
			href: 'creators'
		}
	];
	protected menu: Menu[] = MenuSidebar;
	protected user = {
		avatar:
			'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg',
		name: 'Jhon Doe',
		username: 'Jhon',
		email: 'jhondoe@gmail.com',
		role: 'Admin'
	};
}
