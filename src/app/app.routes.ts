import {
	EmailAuthProvider,
	FacebookAuthProvider,
	GoogleAuthProvider
} from '@angular/fire/auth';
import {
	AuthGuard,
	AuthPipe,
	redirectLoggedInTo,
	redirectUnauthorizedTo
} from '@angular/fire/auth-guard';
import { Routes } from '@angular/router';

import { AuthenticationService } from './core/services/authentication/authentication.service';
import { EmailAndPasswordStrategy } from './core/services/authentication/emailandpassword.strategy';
import { FacebookStrategy } from './core/services/authentication/facebook.strategy';
import { GoogleStrategy } from './core/services/authentication/google.strategy';
import { AdminLayoutComponent } from './features/layouts/admin-layout/admin-layout.component';
import { Route } from './shared/routes/routes';

const redirectUnauthorizedToLogin = (): AuthPipe =>
	redirectUnauthorizedTo([Route.login.root()]);

const redirectLoggedInToAdmin = (): AuthPipe =>
	redirectLoggedInTo([Route.admin.default()]);

export const routes: Routes = [
	{
		path: Route.root(),
		redirectTo: `${Route.admin.default()}`,
		pathMatch: 'full'
	},
	{
		path: Route.login.root(),
		title: 'IMS | Login',
		pathMatch: 'full',
		canActivate: [AuthGuard],
		data: { authGuardPipe: redirectLoggedInToAdmin },
		providers: [
			AuthenticationService,
			GoogleAuthProvider,
			FacebookAuthProvider,
			EmailAuthProvider,
			GoogleStrategy,
			FacebookStrategy,
			EmailAndPasswordStrategy
		],
		loadComponent: () =>
			import(
				/* webpackChunkName: "__Chunk__LoginComponent__" */
				'./features/login/login.component'
			).then((module) => module.LoginComponent)
	},
	{
		path: Route.admin.root(),
		title: 'IMS | Admin Panel',
		component: AdminLayoutComponent,
		canActivate: [AuthGuard],
		providers: [
			AuthenticationService,
			GoogleAuthProvider,
			FacebookAuthProvider,
			EmailAuthProvider,
			GoogleStrategy,
			FacebookStrategy,
			EmailAndPasswordStrategy
		],
		data: { authGuardPipe: redirectUnauthorizedToLogin },
		children: [
			{
				title: 'IMS | Dashboard - Sales',
				path: Route.admin.dashboard.sales(),
				loadComponent: () =>
					import(
						/* webpackChunkName: "__Chunk__SalesComponent__" */
						'./features/admin/dashboards/sales/sales.component'
					).then((module) => module.SalesComponent)
			},
			{
				title: 'IMS | Dashboard - Orders',
				path: Route.admin.dashboard.orders(),
				loadComponent: () =>
					import(
						/* webpackChunkName: "__Chunk__OrdersComponent__" */
						'./features/admin/dashboards/orders/orders.component'
					).then((module) => module.OrdersComponent)
			},
			{
				title: 'IMS | Inventory - Products',
				path: Route.admin.inventory.products(),
				loadComponent: () =>
					import(
						/* webpackChunkName: "__Chunk__ProductListComponent__" */
						'./features/admin/inventory/products/list/list.component'
					).then((module) => module.ListComponent)
			},
			{
				title: 'IMS | Inventory - Services',
				path: Route.admin.inventory.services(),
				loadComponent: () =>
					import(
						/* webpackChunkName: "__Chunk__ServicesListComponent__" */
						'./features/admin/inventory/services/list/list.component'
					).then((module) => module.ListComponent)
			},
			{
				title: 'IMS | Inventory - Categories',
				path: Route.admin.inventory.categories(),
				loadComponent: () =>
					import(
						/* webpackChunkName: "__Chunk__CategoriesListComponent__" */
						'./features/admin/inventory/categories/list/list.component'
					).then((module) => module.ListComponent)
			},
			{
				title: 'IMS | Contacts - Customers',
				path: Route.admin.contacts.customers.list(),
				loadComponent: () =>
					import(
						/* webpackChunkName: "__Chunk__CustomersComponent__" */
						'./features/admin/contacts/customers/customers.component'
					).then((module) => module.CustomersComponent)
			},
			{
				title: 'IMS | Contacts - Prosects',
				path: Route.admin.contacts.prospects.list(),
				loadComponent: () =>
					import(
						/* webpackChunkName: "__Chunk__ProspectsComponent__" */
						'./features/admin/contacts/prospects/prospects.component'
					).then((module) => module.ProspectsComponent)
			},
			{
				title: 'IMS | Contacts - Suppliers',
				path: Route.admin.contacts.suppliers.list(),
				loadComponent: () =>
					import(
						/* webpackChunkName: "__Chunk__SuppliersComponent__" */
						'./features/admin/contacts/suppliers/suppliers.component'
					).then((module) => module.SuppliersComponent)
			},
			{
				title: 'IMS | Preferences - Users',
				path: Route.admin.preferences.users(),
				loadComponent: () =>
					import(
						/* webpackChunkName: "__Chunk__UsersComponent__" */
						'./features/admin/preferences/users/users.component'
					).then((module) => module.UsersComponent)
			},
			{
				title: 'IMS | Preferences - Settings',
				path: Route.admin.preferences.settings(),
				loadComponent: () =>
					import(
						/* webpackChunkName: "__Chunk__SettingsComponent__" */
						'./features/admin/preferences/settings/settings.component'
					).then((module) => module.SettingsComponent)
			}
		]
	},
	{ path: '**', redirectTo: Route.login.root(), pathMatch: 'full' }
];
