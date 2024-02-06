export type Menu = {
	label?: string;
	isActive?: boolean;
	href?: string;
	menu?: Menu[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon?: any;
};
