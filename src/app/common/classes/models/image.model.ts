import Base from './base.model';

export default class Image extends Base {
	url: string;
	product?: unknown;
	variant?: unknown;
	banner?: unknown;
	category?: unknown;
	subCategory?: unknown;

	constructor() {
		super();
		this.url = '';
	}
}
