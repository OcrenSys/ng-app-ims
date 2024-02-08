import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Menu } from '../../../common/types/menu/menu.type';
import { MenuSidebar } from '../../routes/menu.sidebar';

@Component({
	selector: 'ims-side-menu-compact',
	standalone: true,
	imports: [MatListModule, RouterModule, FontAwesomeModule],
	templateUrl: './sidemenu-compact.component.html',
	styleUrl: './sidemenu-compact.component.sass'
})
export class SideMenuCompactComponent {
	protected menu: Menu[] = MenuSidebar;
}
