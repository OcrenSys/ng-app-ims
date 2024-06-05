import Base from './base.model';
import Image from './image.model';

export default class Banner extends Base {
	name: string;
	description: string;
	image: Image | null;
	constructor() {
		super();
		this.name = '';
		this.description = '';
		this.image = null;
	}
}
