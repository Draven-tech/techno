import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GymLocationsPage } from './gym-locations.page';

describe('GymLocationsPage', () => {
  let component: GymLocationsPage;
  let fixture: ComponentFixture<GymLocationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GymLocationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
