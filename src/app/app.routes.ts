import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './pages/layouts/admin-layout/admin-layout.component';
import { GuesLayoutComponent } from './pages/layouts/gues-layout/gues-layout.component';
import { Route } from './shared/routes/routes';

export const routes: Routes = [
	{
		path: '',
		title: 'IMS | Login',
		pathMatch: 'full',
		loadComponent: () =>
			import(
				/* webpackChunkName: '__Chunk__LoginComponent__' */
				'./pages/login/login.component'
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
						'./pages/welcome/welcome.component'
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
						'./pages/admin/dashboards/sales/sales.component'
					).then((module) => module.SalesComponent)
			},
			{
				path: Route.admin.dashboard.orders(),
				loadComponent: () =>
					import(
						/* webpackChunkName: '__Chunk__OrdersComponent__' */
						'./pages/admin/dashboards/orders/orders.component'
					).then((module) => module.OrdersComponent)
			},
			{
				path: Route.admin.inventory.products(),
				loadComponent: () =>
					import(
						/* webpackChunkName: '__Chunk__ProductListComponent__' */
						'./pages/admin/inventory/products/list/list.component'
					).then((module) => module.ListComponent)
			},
			{
				path: Route.admin.inventory.services(),
				loadComponent: () =>
					import(
						/* webpackChunkName: '__Chunk__ServicesListComponent__' */
						'./pages/admin/inventory/services/list/list.component'
					).then((module) => module.ListComponent)
			},
			{
				path: Route.admin.inventory.categories(),
				loadComponent: () =>
					import(
						/* webpackChunkName: '__Chunk__CategoriesListComponent__' */
						'./pages/admin/inventory/categories/list/list.component'
					).then((module) => module.ListComponent)
			},
			{
				path: Route.admin.contacts.customers.list(),
				loadComponent: () =>
					import(
						/* webpackChunkName: '__Chunk__CustomersComponent__' */
						'./pages/admin/contacts/customers/customers.component'
					).then((module) => module.CustomersComponent)
			},
			{
				path: Route.admin.contacts.prospects.list(),
				loadComponent: () =>
					import(
						/* webpackChunkName: '__Chunk__ProspectsComponent__' */
						'./pages/admin/contacts/prospects/prospects.component'
					).then((module) => module.ProspectsComponent)
			},
			{
				path: Route.admin.contacts.suppliers.list(),
				loadComponent: () =>
					import(
						/* webpackChunkName: '__Chunk__SuppliersComponent__' */
						'./pages/admin/contacts/suppliers/suppliers.component'
					).then((module) => module.SuppliersComponent)
			},
			{
				path: Route.admin.preferences.users(),
				loadComponent: () =>
					import(
						/* webpackChunkName: '__Chunk__UsersComponent__' */
						'./pages/admin/preferences/users/users.component'
					).then((module) => module.UsersComponent)
			},
			{
				path: Route.admin.preferences.settings(),
				loadComponent: () =>
					import(
						/* webpackChunkName: '__Chunk__SettingsComponent__' */
						'./pages/admin/preferences/settings/settings.component'
					).then((module) => module.SettingsComponent)
			}
		]
	}
];
