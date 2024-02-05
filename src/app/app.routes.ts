import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './pages/layouts/admin-layout/admin-layout.component';
import { GuesLayoutComponent } from './pages/layouts/gues-layout/gues-layout.component';
import { Route } from './shared/routes/routes';

export const routes: Routes = [
	{
		path: '',
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
		component: AdminLayoutComponent,
		children: [
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
			}
		]
	}
];
