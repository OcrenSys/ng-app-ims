import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';

import Banner from '../../../../common/classes/models/banner.model';
import { BannerService } from '../../../../core/services/inventory/banner/banner.service';

@Component({
	selector: 'ims-banners',
	standalone: true,
	imports: [CommonModule, MatTableModule, MatCheckboxModule],
	templateUrl: './banners.component.html',
	styleUrl: './banners.component.sass'
})
export class BannersComponent implements OnInit {
	private readonly _bannerService = inject(BannerService);
	displayedColumns: string[] = [
		'image',
		'name',
		'description',
		'createAt',
		'updateAt',
		'isActive'
	];
	dataSource: Banner[] = [];

	ngOnInit(): void {
		this._bannerService.getAll().subscribe({
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			next: (response: any) => {
				console.log(response);
				this.dataSource = response.data as Banner[];
				console.log(response.data);
			},
			error: (e) => {
				console.log('get all banners...', e);
			}
		});
	}
}
