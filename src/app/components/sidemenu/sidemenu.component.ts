import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { Menu } from '../../common/types/menu.type';
import { Route } from '../../shared/routes/routes';

@Component({
	selector: 'ims-side-menu',
	standalone: true,
	templateUrl: './sidemenu.component.html',
	styleUrl: './sidemenu.component.css',
	imports: [MatListModule, RouterModule]
})
export class SideMenuComponent {
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
					href: Route.admin.contacts.customers.list()
				},

				{
					label: 'prospects',
					href: Route.admin.contacts.prospects.list()
				},
				{
					label: 'suppliers',
					href: Route.admin.contacts.suppliers.list()
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
