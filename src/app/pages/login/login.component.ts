import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

import { LogotipoComponent } from '../../components/ui/icons/logotipo';

@Component({
	selector: 'ims-login',
	standalone: true,
	imports: [CommonModule, FormsModule, FontAwesomeModule, LogotipoComponent],
	templateUrl: './login.component.html',
	styleUrl: './login.component.sass'
})
export class LoginComponent {
	protected emailIcon = faEnvelope;
	protected passwordIcon = faKey;
	protected isValid(control?: string): boolean {
		return !!control;
	}
}
