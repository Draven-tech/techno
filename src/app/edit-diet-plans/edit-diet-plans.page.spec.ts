import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditDietPlansPage } from './edit-diet-plans.page';

describe('EditDietPlansPage', () => {
  let component: EditDietPlansPage;
  let fixture: ComponentFixture<EditDietPlansPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDietPlansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
