import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MembershipOptionsPage } from './membership-options.page';

describe('MembershipOptionsPage', () => {
  let component: MembershipOptionsPage;
  let fixture: ComponentFixture<MembershipOptionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
