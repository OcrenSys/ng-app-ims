import Base from './base.model';

export default class Banner extends Base {
	name: string;
	description: string;

	constructor() {
		super();
		this.name = '';
		this.description = '';
	}
}
