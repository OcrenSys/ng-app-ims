import { Injectable, Injector } from '@angular/core';

import Banner from '../../../../common/classes/models/banner.model';
import { CONTROLLER } from '../../../tokens/controller.token';
import { BaseService } from '../../base/base.service';

@Injectable({
	providedIn: 'root'
})
export class BannerService extends BaseService<Banner> {
	constructor(private readonly injector: Injector) {
		super(injector.get(CONTROLLER, 'banners'));
	}
}
