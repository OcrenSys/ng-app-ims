import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './features/layouts/admin-layout/admin-layout.component';
import { GuesLayoutComponent } from './features/layouts/gues-layout/gues-layout.component';
import { Route } from './shared/routes/routes';

export const routes: Routes = [
	{
		path: '',
		title: 'IMS | Login',
		pathMatch: 'full',
		loadComponent: () =>
			import(
				/* webpackChunkName: '__Chunk__LoginComponent__' */
				'./features/login/login.component'
			).then((module) => module.LoginComponent)
	},
	{
		path: 'welcome',
		title: 'IMS | Welcome',

		component: GuesLayoutComponent,
		children: [
			{
				path: 'welcome',
				loadComponent: () =>
					import(
						/* webpackChunkName: '__Chunk__WelcomeComponent__' */
						'./features/welcome/welcome.component'
					).then((module) => module.WelcomeComponent)
			}
		]
	},
	{
		path: 'admin',
		title: 'IMS | Admin Panel',

		component: AdminLayoutComponent,
		children: [
			{
				path: Route.admin.dashboard.sales(),
				loadComponent: () =>
					import(
						/* webpackChunkName: '__Chunk__SalesComponent__' */
						'./features/admin/dashboards/sales/sales.component'
					).then((module) => module.SalesComponent)
			},
			{
				path: Route.admin.dashboard.orders(),
				loadComponent: () =>
					import(
						/* webpackChunkName: '__Chunk__OrdersComponent__' */
						'./features/admin/dashboards/orders/orders.component'
					).then((module) => module.OrdersComponent)
			},
			{
				path: Route.admin.inventory.products(),
				loadComponent: () =>
					import(
						/* webpackChunkName: '__Chunk__ProductListComponent__' */
						'./features/admin/inventory/products/list/list.component'
					).then((module) => module.ListComponent)
			},
			{
				path: Route.admin.inventory.services(),
				loadComponent: () =>
					import(
						/* webpackChunkName: '__Chunk__ServicesListComponent__' */
						'./features/admin/inventory/services/list/list.component'
					).then((module) => module.ListComponent)
			},
			{
				path: Route.admin.inventory.categories(),
				loadComponent: () =>
					import(
						/* webpackChunkName: '__Chunk__CategoriesListComponent__' */
						'./features/admin/inventory/categories/list/list.component'
					).then((module) => module.ListComponent)
			},
			{
				path: Route.admin.contacts.customers.list(),
				loadComponent: () =>
					import(
						/* webpackChunkName: '__Chunk__CustomersComponent__' */
						'./features/admin/contacts/customers/customers.component'
					).then((module) => module.CustomersComponent)
			},
			{
				path: Route.admin.contacts.prospects.list(),
				loadComponent: () =>
					import(
						/* webpackChunkName: '__Chunk__ProspectsComponent__' */
						'./features/admin/contacts/prospects/prospects.component'
					).then((module) => module.ProspectsComponent)
			},
			{
				path: Route.admin.contacts.suppliers.list(),
				loadComponent: () =>
					import(
						/* webpackChunkName: '__Chunk__SuppliersComponent__' */
						'./features/admin/contacts/suppliers/suppliers.component'
					).then((module) => module.SuppliersComponent)
			},
			{
				path: Route.admin.preferences.users(),
				loadComponent: () =>
					import(
						/* webpackChunkName: '__Chunk__UsersComponent__' */
						'./features/admin/preferences/users/users.component'
					).then((module) => module.UsersComponent)
			},
			{
				path: Route.admin.preferences.settings(),
				loadComponent: () =>
					import(
						/* webpackChunkName: '__Chunk__SettingsComponent__' */
						'./features/admin/preferences/settings/settings.component'
					).then((module) => module.SettingsComponent)
			}
		]
	}
];
