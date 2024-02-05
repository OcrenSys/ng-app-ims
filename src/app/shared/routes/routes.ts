const Routes = {
	admin: 'admin',
	guest: 'guest',
	inventory: 'inventory',
	customers: 'contacts/customers',
	prospects: 'contacts/prospects',
	suppliers: 'contacts/suppliers'
};
export const Route = {
	admin: {
		root: (): string => ``,
		contacts: {
			customers: {
				list: (): string => `${Routes.customers}`,
				details: (id: string): string => `${Routes.customers}/${id}`,
				create: (): string => `${Routes.customers}/create`,
				update: (id: string): string => `${Routes.customers}/update/${id}`
			},
			prospects: {
				list: (): string => `${Routes.prospects}`,
				details: (id: string): string => `${Routes.prospects}/${id}`,
				create: (): string => `${Routes.prospects}/create`,
				update: (id: string): string => `${Routes.prospects}/update/${id}`
			},
			suppliers: {
				list: (): string => `${Routes.suppliers}`,
				details: (id: string): string => `${Routes.suppliers}/${id}`,
				create: (): string => `${Routes.suppliers}/create`,
				update: (id: string): string => `${Routes.suppliers}/update/${id}`
			}
		}
	},
	gues: {
		welcome: (): string => `/welcome`
	}
};
