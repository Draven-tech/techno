import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DietPlansPage } from './diet-plans.page';

describe('DietPlansPage', () => {
  let component: DietPlansPage;
  let fixture: ComponentFixture<DietPlansPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DietPlansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
