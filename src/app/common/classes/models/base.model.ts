export default class Base {
	createAt: string;
	updateAt: string;
	removeAt: string;
	isActive: boolean;

	constructor() {
		this.createAt = '';
		this.updateAt = '';
		this.removeAt = '';
		this.isActive = false;
	}
}
