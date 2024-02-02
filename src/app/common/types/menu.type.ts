export type Menu = {
	label?: string;
	isActive?: boolean;
	href?: string;
	menu?: Menu[];
	icon?: HTMLElement | unknown;
};
