import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
	faPaperPlane,
	IconDefinition
} from '@fortawesome/free-solid-svg-icons';

import {
	FieldBase,
	FieldTypes
} from '../../../common/classes/forms/field.base';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { FormControlService } from '../../../core/services/formControl/form-control.service';
import { FieldComponent } from '../../ui/field/field.component';
import { LoadingComponent } from '../../ui/icons/loading';

@Component({
	selector: 'ims-singin-form',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FieldComponent,
		LoadingComponent,
		FontAwesomeModule
	],
	providers: [FormControlService],
	templateUrl: './signin-form.component.html',
	styleUrl: './signin-form.component.sass'
})
export class SigninFormComponent implements OnInit {
	@Input() fields: FieldBase<FieldTypes>[] | null = [];
	protected form!: FormGroup;
	protected loading: boolean = false;
	protected icon: IconDefinition = faPaperPlane;

	constructor(
		private _formControlService: FormControlService,
		private readonly _authenticationService: AuthenticationService
	) {}

	ngOnInit(): void {
		this.form = this._formControlService.toFormGroup(
			this.fields as FieldBase<FieldTypes>[]
		);
	}

	onSubmit(): void {
		console.log(this.form.value);
		this.loading = true;
		this._authenticationService.signIn(
			this.form.get('email')?.value,
			this.form.get('password')?.value
		);
	}
}
