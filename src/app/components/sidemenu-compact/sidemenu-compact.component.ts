import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { Menu } from '../../common/types/menu.type';

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
	protected menu: Menu[] = [
		{
			label: 'Dashboard',
			href: 'dashboard',
			menu: [
				{
					label: 'Sales',
					isActive: false,
					href: 'sales'
				},
				{
					label: 'Orders',
					isActive: false,
					href: 'orders'
				}
			]
		},
		{
			label: 'Inventory',
			href: 'inventory',
			menu: [
				{
					label: 'Products and Services',
					href: 'products-services'
				},
				{
					label: 'Categories',
					href: 'categories'
				}
			]
		},
		{
			label: 'Contacts',
			href: 'contacts',
			menu: [
				{
					label: 'Customers',
					href: 'customers'
				},

				{
					label: 'prospects',
					href: 'prospetcs'
				},
				{
					label: 'suppliers',
					href: 'suppliers'
				}
			]
		},
		{
			label: 'Sales',
			isActive: false,
			href: 'sales',
			menu: [
				{
					label: 'Invoices',
					href: 'invoices'
				},
				{
					label: 'Credits',
					href: 'credits'
				}
			]
		},
		{
			label: 'Settings',
			href: 'settings',
			menu: [
				{
					label: 'Users',
					isActive: false,
					href: 'users'
				},
				{
					label: 'Configurations',
					isActive: false,
					href: 'configurations'
				}
			]
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
