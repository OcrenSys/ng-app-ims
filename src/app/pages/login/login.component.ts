import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

import { SigninFormComponent } from '../../components/forms/signin-form/signin-form.component';
import { LogotipoComponent } from '../../components/ui/icons/logotipo';
import { SigninFieldsService } from '../../services/signinfields/signinfields.service';
import { FieldBase, FieldTypes } from '../../shared/forms/field.base';

@Component({
	selector: 'ims-login',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		FontAwesomeModule,
		LogotipoComponent,
		SigninFormComponent
	],
	providers: [SigninFieldsService],
	templateUrl: './login.component.html',
	styleUrl: './login.component.sass'
})
export class LoginComponent {
	protected emailIcon = faEnvelope;
	protected passwordIcon = faKey;

	protected fields$!: Observable<FieldBase<FieldTypes>[]>;

	constructor(signinFieldsService: SigninFieldsService) {
		this.fields$ = signinFieldsService.getFields();
	}

	protected isValid(control?: string): boolean {
		return !!control;
	}
}
