import { MediaMatcher } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
	ChangeDetectorRef,
	Component,
	OnDestroy,
	signal,
	WritableSignal
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

import { BreadcrumbsComponent } from '../../../components/breadcrumbs/breadcrumbs.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { SideMenuComponent } from '../../../components/sidemenu/sidemenu.component';
import { SideMenuCompactComponent } from '../../../components/sidemenu-compact/sidemenu-compact.component';

@Component({
	selector: 'ims-admin-layout',
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		MatSidenavModule,
		MatButtonModule,
		MatDividerModule,
		MatToolbarModule,
		MatListModule,
		MatIconModule,
		SideMenuComponent,
		SideMenuCompactComponent,
		NavbarComponent,
		BreadcrumbsComponent
	],
	templateUrl: './admin-layout.component.html',
	styleUrls: ['./admin-layout.component.sass', './admin-layout.component.css']
})
export class AdminLayoutComponent implements OnDestroy {
	protected device: WritableSignal<'mobile' | 'desktop'> = signal<
		'mobile' | 'desktop'
	>('desktop');
	protected show: WritableSignal<boolean> = signal<boolean>(true);
	protected showMainDrawer: WritableSignal<boolean> = signal<boolean>(true);

	protected mobileQuery!: MediaQueryList;
	private _mobileQueryListener: (event: MediaQueryListEvent) => void;

	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
		this.mobileQuery = media.matchMedia('(max-width: 768px)');
		this._mobileQueryListener = (event: MediaQueryListEvent): void => {
			this.showMainDrawer.update(() => event.matches);
			this.device.update(() => (event.matches ? 'mobile' : 'desktop'));

			return changeDetectorRef.detectChanges();
		};
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	protected toggle(): void {
		this.showMainDrawer.update((value) => !value);
	}

	protected closedStart(): void {
		this.showMainDrawer.set(false);
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}
}
