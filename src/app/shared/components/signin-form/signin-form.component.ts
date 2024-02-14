import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
import { Route } from '../../routes/routes';
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
		private readonly _router: Router,
		private readonly _formControlService: FormControlService,
		private readonly _authenticationService: AuthenticationService
	) {}

	ngOnInit(): void {
		this.form = this._formControlService.toFormGroup(
			this.fields as FieldBase<FieldTypes>[]
		);
	}

	onSubmit(): void {
		this.loading = true;
		this._authenticationService
			.signIn(this.form.get('email')?.value, this.form.get('password')?.value)
			.then((_user: UserCredential) => {
				console.log(_user, Route.root());

				if (_user) this._router.navigate([Route.root()]);
			})
			.catch((error) => {
				console.error('Something went wrong with signin method...', error);
			})
			.finally(() => {
				this.loading = false;
			});
	}
}
