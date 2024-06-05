import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { Menu } from '../../../common/types/menu/menu.type';
import { MenuSidebar } from '../../routes/menu.sidebar';

@Component({
	selector: 'ims-side-menu',
	standalone: true,
	templateUrl: './sidemenu.component.html',
	styleUrl: './sidemenu.component.css',
	imports: [
		MatListModule,
		MatExpansionModule,
		MatButtonModule,
		MatSidenavModule,
		MatToolbarModule,
		MatIconModule,
		RouterModule,
		FontAwesomeModule
	]
})
export class SideMenuComponent {
	protected menu: Menu[] = MenuSidebar;

	protected user = {
		avatar:
			'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg',
		name: 'Jhon Doe',
		username: 'Jhon',
		email: 'jhondoe@gmail.com',
		role: 'Admin'
	};
}
