const Routes = {
	root: '',
	admin: 'admin',
	login: 'login',

	dashboarSales: 'dashboard/sales',
	dashboarOrders: 'dashboard/orders',
	dashboarBanners: 'dashboard/banners',

	inventoryProducts: 'inventory/products',
	inventoryServices: 'inventory/services',
	inventoryCategories: 'inventory/categories',

	contactsCustomers: 'contacts/customers',
	contactsProspects: 'contacts/prospects',
	contactsSuppliers: 'contacts/suppliers',

	preferencesUsers: 'preferences/users',
	preferencesSettings: 'preferences/settings'
};
export const Route = {
	root: (): string => `${Route.root}`,
	login: {
		root: (): string => `${Route.login}`
	},
	admin: {
		root: (): string => Routes.admin,
		default: (): string => `${Routes.admin}/${Routes.dashboarBanners}`,
		dashboard: {
			banners: (): string => `${Routes.dashboarBanners}`,
			sales: (): string => `${Routes.dashboarSales}`,
			orders: (): string => `${Routes.dashboarOrders}`
		},
		inventory: {
			products: (): string => `${Routes.inventoryProducts}`,
			services: (): string => `${Routes.inventoryServices}`,
			categories: (): string => `${Routes.inventoryCategories}`
		},
		contacts: {
			customers: {
				list: (): string => `${Routes.contactsCustomers}`,
				details: (id: string): string => `${Routes.contactsCustomers}/${id}`,
				create: (): string => `${Routes.contactsCustomers}/create`,
				update: (id: string): string =>
					`${Routes.contactsCustomers}/update/${id}`
			},
			prospects: {
				list: (): string => `${Routes.contactsProspects}`
			},
			suppliers: {
				list: (): string => `${Routes.contactsSuppliers}`
			}
		},
		preferences: {
			users: (): string => `${Routes.preferencesUsers}`,
			settings: (): string => `${Routes.preferencesSettings}`
		}
	}
};
