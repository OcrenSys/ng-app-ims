const Routes = {
	dashboarSales: 'dashboard/sales',
	dashboarOrders: 'dashboard/orders',

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
	admin: {
		dashboard: {
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
	},
	gues: {
		welcome: (): string => `/welcome`
	},

	login: (): string => `/login`
};
