import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuesLayoutComponent } from './gues-layout.component';

describe('GuesLayoutComponent', () => {
	let component: GuesLayoutComponent;
	let fixture: ComponentFixture<GuesLayoutComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [GuesLayoutComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(GuesLayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
