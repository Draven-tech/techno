import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NonMemberMenuPage } from './nonmember-menu.page';

describe('NonMemberMenuPage', () => {
  let component: NonMemberMenuPage;
  let fixture: ComponentFixture<NonMemberMenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NonMemberMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
