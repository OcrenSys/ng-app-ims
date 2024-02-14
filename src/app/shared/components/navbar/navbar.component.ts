import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { DropdownLanguageComponent } from '../../ui/dropdown/dropdown-language/dropdown-language.component';
import { DropdownUserComponent } from '../../ui/dropdown/dropdown-user/dropdown-user.component';
import { ToggleThemeComponent } from '../../ui/toggle/toggle-theme/toggle-theme.component';

@Component({
	selector: 'ims-navbar',
	standalone: true,
	imports: [
		MatIconModule,
		DropdownLanguageComponent,
		ToggleThemeComponent,
		DropdownUserComponent
	],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.sass'
})
export class NavbarComponent {
	@Output() toggle: EventEmitter<undefined> = new EventEmitter();

	onToggle(): void {
		this.toggle.emit();
	}
}
