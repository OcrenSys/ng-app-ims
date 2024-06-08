import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { CONTROLLER } from '../../tokens/controller.token';

@Injectable({
	providedIn: 'root'
})
export class BaseService<T> {
	private http: HttpClient = inject(HttpClient);

	constructor(@Inject(CONTROLLER) private _controller: string) {}

	get server(): string {
		const { server_url, api } = environment;
		return `${server_url}/${api}`;
	}

	getAll(): Observable<T[]> {
		console.log(`${this.server}/${this._controller}`);
		return this.http.get<T[]>(`${this.server}/${this._controller}`);
	}

	getById(id: number): Observable<T> {
		return this.http.get<T>(`${this.server}/${this._controller}/${id}`);
	}

	create(item: T): Observable<T> {
		return this.http.post<T>(`${this.server}/${this._controller}`, item);
	}

	update(id: number, item: T): Observable<T> {
		return this.http.put<T>(`${this.server}/${this._controller}/${id}`, item);
	}

	delete(id: number): Observable<void> {
		return this.http.delete<void>(`${this.server}/${this._controller}/${id}`);
	}
}
