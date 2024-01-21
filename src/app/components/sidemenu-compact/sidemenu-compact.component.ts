import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'ims-side-menu-compact',
	standalone: true,
	imports: [MatListModule, RouterModule],
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
}
