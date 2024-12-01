import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalizedRoutinesPage } from './personalized-routines.page';

describe('PersonalizedRoutinesPage', () => {
  let component: PersonalizedRoutinesPage;
  let fixture: ComponentFixture<PersonalizedRoutinesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizedRoutinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
