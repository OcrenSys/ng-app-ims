import { Injectable } from '@angular/core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { Observable, of } from 'rxjs';

import {
	FieldBase,
	FieldTypes
} from '../../../common/classes/forms/field.base';
import { InputField } from '../../../common/classes/forms/input.field';
import { ControlTypeEnum } from '../../../common/enums/forms/control.type.enum';
import { InputTypeEnum } from '../../../common/enums/forms/input.type.enum';

@Injectable({
	providedIn: 'root'
})
export class SigninFieldsService {
	getFields(): Observable<FieldBase<FieldTypes>[]> {
		const fields: FieldBase<FieldTypes>[] = [
			new InputField({
				value: '',
				key: 'email',
				label: 'Email',
				type: InputTypeEnum.email,
				icon: faEnvelope,
				controlType: ControlTypeEnum.input,
				placeholder: 'jhon@email.com',
				required: true,
				order: 0
			}),
			new InputField({
				value: '',
				key: 'password',
				label: 'Password',
				type: InputTypeEnum.password,
				icon: faKey,
				controlType: ControlTypeEnum.input,
				placeholder: '********',
				required: true,
				order: 1
			})
		];

		return of(fields.sort((prev, next) => prev.order - next.order));
	}
}
