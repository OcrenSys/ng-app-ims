import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
	FieldBase,
	FieldTypes
} from '../../../common/classes/forms/field.base';

@Component({
	selector: 'ims-field',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
	templateUrl: './field.component.html',
	styleUrl: './field.component.sass'
})
export class FieldComponent {
	@Input() field!: FieldBase<FieldTypes>;
	@Input() form!: FormGroup;

	get isValid(): boolean {
		return this.form.controls[this.field.key].valid;
	}
}
