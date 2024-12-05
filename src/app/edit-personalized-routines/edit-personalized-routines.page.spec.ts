import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPersonalizedRoutinesPage } from './edit-personalized-routines.page';

describe('EditPersonalizedRoutinesPage', () => {
  let component: EditPersonalizedRoutinesPage;
  let fixture: ComponentFixture<EditPersonalizedRoutinesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonalizedRoutinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
