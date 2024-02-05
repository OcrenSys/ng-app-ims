import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideMenuCompactComponent } from './sidemenu-compact.component';

describe('SidemenuCompactComponent', () => {
	let component: SideMenuCompactComponent;
	let fixture: ComponentFixture<SideMenuCompactComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SideMenuCompactComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(SideMenuCompactComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
