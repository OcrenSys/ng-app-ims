import { CommonModule } from '@angular/common';
import {
	Component,
	inject,
	Input,
	OnInit,
	signal,
	WritableSignal
} from '@angular/core';
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
import { FirebaseStorage } from '../../../common/constants/firebase.constants';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { FormControlService } from '../../../core/services/formControl/form-control.service';
import { StorageService } from '../../../core/services/storage/storage.service';
import { Route } from '../../routes/routes';
import { FieldComponent } from '../../ui/field/field.component';
import { LoadingComponent } from '../../ui/icons/loading';

interface Loading {
	email: boolean;
	google: boolean;
	facebook: boolean;
}
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

	private readonly _router = inject(Router);
	private readonly _formControlService = inject(FormControlService);
	private readonly _authenticationService = inject(AuthenticationService);
	private readonly _storageService = inject(StorageService);

	protected form!: FormGroup;
	protected loading: WritableSignal<Loading> = signal<Loading>({
		email: false,
		google: false,
		facebook: false
	});

	get SendEmailIcon(): IconDefinition {
		return faPaperPlane;
	}

	ngOnInit(): void {
		this.form = this._formControlService.toFormGroup(
			this.fields as FieldBase<FieldTypes>[]
		);
	}

	onSubmit(): void {
		this.loading.update((_data) => ({ ..._data, email: true }));
		this._authenticationService
			._signIn(this.form.get('email')?.value, this.form.get('password')?.value)
			.then((_user: UserCredential) => {
				if (_user) {
					this._storageService.setItem<UserCredential>(
						FirebaseStorage.FIREBASE_USER,
						_user
					);
					this._router.navigate([Route.root()]);
				}
			})
			.catch((error) => {
				console.error('Something went wrong with signin method...', error);
				this._storageService.setItem<UserCredential | undefined>(
					FirebaseStorage.FIREBASE_USER,
					undefined
				);
				this._router.navigate([Route.login.root()]);
			})
			.finally(() => {
				this.loading.update((_data) => ({ ..._data, email: false }));
			});
	}

	signInFacebook(): void {
		this.loading.update((_data) => ({ ..._data, facebook: true }));
		setTimeout(() => {
			this.loading.update((_data) => ({ ..._data, facebook: false }));
		}, 5000);
	}

	signInGoogle(): void {
		this.loading.update((_data) => ({ ..._data, google: true }));

		this._authenticationService
			._signInGoogle()
			.then((_user: UserCredential) => {
				if (_user) {
					this._storageService.setItem<UserCredential>(
						FirebaseStorage.FIREBASE_USER,
						_user
					);
					this._router.navigate([Route.root()]);
				}
			})
			.catch((error) => {
				console.error(
					'Something went wrong with GOOGLE signin method...',
					error
				);
				this._storageService.setItem<UserCredential | undefined>(
					FirebaseStorage.FIREBASE_USER,
					undefined
				);
				this._router.navigate([Route.login.root()]);
			})
			.finally(() => {
				this.loading.update((_data) => ({ ..._data, google: false }));
			});
	}
}
