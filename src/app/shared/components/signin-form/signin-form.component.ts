import { Component, inject, Input, OnInit } from '@angular/core';
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
		ReactiveFormsModule,
		FieldComponent,
		LoadingComponent,
		FontAwesomeModule
	],
	templateUrl: './signin-form.component.html',
	styleUrl: './signin-form.component.sass'
})
export class SigninFormComponent implements OnInit {
	@Input() fields: FieldBase<FieldTypes>[] | null = [];

	private readonly _formControlService = inject(FormControlService);
	protected readonly _authService = inject(AuthenticationService);
	protected form!: FormGroup;

	protected get loadingGoogle(): boolean {
		return this._authService.SigninMethod()['google']?.loading || false;
	}

	protected get loadingFacebook(): boolean {
		return this._authService.SigninMethod()['facebook']?.loading || false;
	}

	protected get loadingEmail(): boolean {
		return this._authService.SigninMethod()['email']?.loading || false;
	}

	get SendEmailIcon(): IconDefinition {
		return faPaperPlane;
	}

	ngOnInit(): void {
		this.onLoadFormControls();
	}

	private onLoadFormControls(): void {
		this.form = this._formControlService.toFormGroup(
			this.fields as FieldBase<FieldTypes>[]
		);
	}

	protected onSubmit(): void {
		this.singninWithEmailAndPassword();
	}

	private singninWithEmailAndPassword(): void {
		this._authService.setAuthenticationStrategy(
			this._authService.EmailAndPassStrategy
		);
		this._authService._executeSigninMethod(
			this._authService.authenticate({
				email: this.form.get('email')?.value,
				password: this.form.get('password')?.value
			}),
			this._authService.SigninMethod()['email'].method
		);
	}

	protected signInWithFacebook(): void {
		this._authService.setAuthenticationStrategy(
			this._authService.FacebookStrategy
		);
		this._authService._executeSigninMethod(
			this._authService.authenticate(),
			this._authService.SigninMethod()['facebook'].method
		);
	}

	protected signInWithGoogle(): void {
		this._authService.setAuthenticationStrategy(
			this._authService.GoogleStrategy
		);
		this._authService._executeSigninMethod(
			this._authService.authenticate(),
			this._authService.SigninMethod()['google'].method
		);
	}
}
