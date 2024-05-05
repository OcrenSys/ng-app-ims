import { UserCredential } from '@angular/fire/auth';

export abstract class AuthStrategy {
	abstract authenticate(credentials?: unknown): Promise<UserCredential>;
}
