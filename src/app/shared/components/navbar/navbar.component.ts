import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { DropdownUserComponent } from '../../ui/dropdown/dropdown-user/dropdown-user.component';
import { ToggleThemeComponent } from '../../ui/toggle/toggle-theme/toggle-theme.component';

@Component({
	selector: 'ims-navbar',
	standalone: true,
	imports: [MatIconModule, ToggleThemeComponent, DropdownUserComponent],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.sass'
})
export class NavbarComponent {
	@Output() toggle: EventEmitter<undefined> = new EventEmitter();

	protected onToggle(): void {
		this.toggle.emit();
	}
}
