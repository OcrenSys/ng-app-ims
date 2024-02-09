/* eslint-disable @typescript-eslint/no-unused-vars */
import { inject } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivateFn,
	Router,
	RouterStateSnapshot,
	UrlTree
} from '@angular/router';

import { Route } from '../../shared/routes/routes';
import { AuthenticationService } from '../services/authentication/authentication.service';

export const authGuard: CanActivateFn = async (
	route: ActivatedRouteSnapshot,
	state: RouterStateSnapshot
): Promise<boolean | UrlTree> => {
	const router = inject(Router);
	const authService = inject(AuthenticationService);
	const isLoggedIn = await authService.isLoggedIn();

	// console.log('is logged', isLoggedIn);
	if (!isLoggedIn) {
		router.navigate([Route.login.root()]);
	}

	return true;
};
