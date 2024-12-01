import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MealOptionsPage } from './meal-options.page';

describe('MealOptionsPage', () => {
  let component: MealOptionsPage;
  let fixture: ComponentFixture<MealOptionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MealOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
