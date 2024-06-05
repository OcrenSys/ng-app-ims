import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class StorageService {
	setItem<T>(key: string, value: T): void {
		localStorage.setItem(key, JSON.stringify(value));
	}

	getItem<T>(key: string): T | undefined {
		const result = JSON.parse(localStorage.getItem(key) || '');
		if (result) return result as T;
		return undefined;
	}
}
