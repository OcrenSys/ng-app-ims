import { TestBed } from '@angular/core/testing';

import { SigninFieldsService } from './signinfields.service';

describe('SigninfieldsService', () => {
	let service: SigninFieldsService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(SigninFieldsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
