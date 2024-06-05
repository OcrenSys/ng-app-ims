import {
	faAddressBook,
	faBox,
	faGauge,
	faGear
} from '@fortawesome/free-solid-svg-icons';

import { Menu } from '../../common/types/menu/menu.type';
import { Route } from './routes';

export const MenuSidebar: Menu[] = [
	{
		label: 'Dashboard',
		href: Route.admin.dashboard.sales(),
		icon: faGauge,
		menu: [
			// {
			// 	label: 'Ventas',
			// 	href: Route.admin.dashboard.sales()
			// },
			// {
			// 	label: 'Ordenes',
			// 	href: Route.admin.dashboard.orders()
			// }
		]
	},
	{
		label: 'Inventario',
		href: 'inventory',
		icon: faBox,
		menu: [
			{
				label: 'Productos',
				href: Route.admin.inventory.products()
			},

			{
				label: 'Servicios',
				href: Route.admin.inventory.services()
			},

			{
				label: 'Categorias',
				href: Route.admin.inventory.categories()
			}
		]
	},
	{
		label: 'Contactos',
		href: 'contacts',
		icon: faAddressBook,
		menu: [
			{
				label: 'Clientes',
				href: Route.admin.contacts.customers.list()
			},

			{
				label: 'Prospectos',
				href: Route.admin.contacts.prospects.list()
			},
			{
				label: 'Proveedores',
				href: Route.admin.contacts.suppliers.list()
			}
		]
	},
	{
		label: 'Ajustes',
		href: 'settings',
		icon: faGear,
		menu: [
			{
				label: 'Usuarios',
				href: Route.admin.preferences.users()
			},
			{
				label: 'Configuraciones',
				href: Route.admin.preferences.settings()
			}
		]
	}
];
