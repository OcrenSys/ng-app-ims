import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Route } from '../../../shared/routes/routes';

@Component({
	selector: 'ims-breadcrumbs',
	standalone: true,
	imports: [FontAwesomeModule],
	templateUrl: './breadcrumbs.component.html',
	styleUrl: './breadcrumbs.component.sass'
})
export class BreadcrumbsComponent {
	private _router = inject(Router);

	title: string = 'Dashboard';
	subTitle: string = 'Crea, edita y administra cada detalle de tus ítems';
	action = 'Nuevo item';
	faPlus = faPlus;

	redirectTo($event: Event): void {
		if ($event) $event.stopPropagation();
		this._router.navigate([`${Route.admin.root()}`], {});
	}
}
