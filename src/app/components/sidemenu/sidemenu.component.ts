import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'ims-side-menu',
	standalone: true,
	templateUrl: './sidemenu.component.html',
	styleUrl: './sidemenu.component.css',
	imports: [MatListModule, RouterModule]
})
export class SideMenuComponent {
	protected links = [
		{
			label: 'Comics',
			isActive: false,
			href: 'comics'
		},
		{
			label: 'Characters',
			isActive: false,
			href: 'characters'
		},
		{
			label: 'Stories',
			isActive: false,
			href: 'stories'
		},
		{
			label: 'Events',
			isActive: false,
			href: 'events'
		},
		{
			label: 'Creators',
			isActive: false,
			href: 'creators'
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
