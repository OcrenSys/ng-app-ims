const Route = {
	products: 'products',
	customers: 'customers',
	invoices: 'invoices',
	credits: 'credits'
};
export const Routes = {
	products: {
		list: (): string => `/${Route.products}`,
		details: (id: string): string => `${Route.products}/${id}`,
		create: (): string => `${Route.products}/create`,
		update: (id: string): string => `${Route.products}/update/${id}`
	},
	customers: {
		list: (): string => `/${Route.customers}`,
		details: (id: string): string => `${Route.customers}/${id}`,
		create: (): string => `${Route.customers}/create`,
		update: (id: string): string => `${Route.customers}/update/${id}`
	},
	invoices: {
		list: (): string => `/${Route.invoices}`,
		details: (id: string): string => `${Route.invoices}/${id}`,
		create: (): string => `${Route.invoices}/create`,
		update: (id: string): string => `${Route.invoices}/update/${id}`
	},
	credits: {
		list: (): string => `/${Route.credits}`,
		details: (id: string): string => `${Route.credits}/${id}`,
		create: (): string => `${Route.credits}/create`,
		update: (id: string): string => `${Route.credits}/update/${id}`
	}
};
