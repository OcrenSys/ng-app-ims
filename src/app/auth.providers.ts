import {
	EmailAuthProvider,
	FacebookAuthProvider,
	GoogleAuthProvider
} from '@angular/fire/auth';

import { AuthenticationService } from './core/services/authentication/authentication.service';
import { EmailAndPasswordStrategy } from './core/services/authentication/emailandpassword.strategy';
import { FacebookStrategy } from './core/services/authentication/facebook.strategy';
import { GoogleStrategy } from './core/services/authentication/google.strategy';

export const AuthenticationStrategies = [
	AuthenticationService,
	GoogleAuthProvider,
	FacebookAuthProvider,
	EmailAuthProvider,
	GoogleStrategy,
	FacebookStrategy,
	EmailAndPasswordStrategy
];
