/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import {
	AbstractControl,
	FormControl,
	FormGroup,
	Validators
} from '@angular/forms';

import { FieldBase, FieldTypes } from '../../shared/forms/field.base';

@Injectable({
	providedIn: 'root'
})
export class FormControlService {
	toFormGroup(fields: FieldBase<FieldTypes>[]): FormGroup {
		const group: { [key: string]: AbstractControl<any, any> } = {};

		fields.forEach((field) => {
			group[field.key] = field.required
				? new FormControl(field.value || '', Validators.required)
				: new FormControl(field.value || '');
		});
		return new FormGroup(group);
	}
}
