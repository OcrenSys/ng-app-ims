import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'dark' | 'light';

@Injectable({
	providedIn: 'root'
})
export class ThemeService {
	$theme = new BehaviorSubject<Theme>('light');

	setTheme(theme: Theme): void {
		this.$theme.next(theme);
	}

	toggleTheme(): void {
		const theme = this.$theme.getValue();
		this.setTheme(theme === 'dark' ? 'light' : 'dark');
	}
}
