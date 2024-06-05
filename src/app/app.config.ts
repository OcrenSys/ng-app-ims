import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { AuthenticationStrategies } from './auth.providers';
import { ApiInterceptor } from './core/services/interceptor/api.interceptor';
import { BannerService } from './core/services/inventory/banner/banner.service';
import { TokenProviders } from './token.providers';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideHttpClient(withInterceptors([ApiInterceptor])),
		provideClientHydration(),
		provideAnimations(),
		importProvidersFrom([
			provideFirebaseApp(() => initializeApp(environment.firebase)),
			provideAuth(() => getAuth())
		]),
		BannerService,
		...[AuthenticationStrategies],
		...[TokenProviders]
	]
};
