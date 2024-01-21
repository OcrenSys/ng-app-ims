import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenuCompactComponent } from './sidemenu-compact.component';

describe('SidemenuCompactComponent', () => {
	let component: SidemenuCompactComponent;
	let fixture: ComponentFixture<SidemenuCompactComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SidemenuCompactComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(SidemenuCompactComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
