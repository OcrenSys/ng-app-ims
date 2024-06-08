/* eslint-disable @typescript-eslint/no-unused-vars */
import { inject } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivateFn,
	Router,
	RouterStateSnapshot,
	UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

import { Route } from '../../shared/routes/routes';
import { PermissionService } from '../services/permission/permission.service';

export const authGuard: CanActivateFn = (
	route: ActivatedRouteSnapshot,
	state: RouterStateSnapshot
): Observable<boolean | UrlTree> | boolean | UrlTree => {
	const router = inject(Router);
	const permissionService = inject(PermissionService);
	const isLoggedIn = permissionService.isAuthenticated;

	if (isLoggedIn) {
		return true;
	}

	router.navigate([Route.login.root()], {});
	return false;
};
