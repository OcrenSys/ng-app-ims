import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { ControlTypeEnum } from '../../enums/forms/control.type.enum';
import { InputTypeEnum } from '../../enums/forms/input.type.enum';

export type FieldTypes = string | number | boolean;

export class FieldBase<T> {
	value: T | undefined;
	key: string;
	icon: IconDefinition | undefined;
	id: string;
	label: string;
	required: boolean;
	order: number;
	controlType: ControlTypeEnum;
	type: InputTypeEnum;
	placeholder: string;
	options: { key: string; value: string }[];

	constructor(
		options: {
			value?: T;
			key?: string;
			icon?: IconDefinition | undefined;
			id?: string;
			label?: string;
			required?: boolean;
			order?: number;
			controlType?: ControlTypeEnum;
			type?: InputTypeEnum;
			placeholder?: string;
			options?: { key: string; value: string }[];
		} = {}
	) {
		this.value = options.value;
		this.key = options.key || '';
		this.icon = options.icon || undefined;
		this.id = options.label || '';
		this.label = options.label || '';
		this.required = !!options.required;
		this.order = options.order === undefined ? 0 : options.order;
		this.controlType = options.controlType || ControlTypeEnum.input;
		this.type = options.type || InputTypeEnum.text;
		this.placeholder = options.placeholder || '';
		this.options = options.options || [];
	}
}
