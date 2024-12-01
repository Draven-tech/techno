import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MembermenuPage } from './membermenu.page';

describe('MembermenuPage', () => {
  let component: MembermenuPage;
  let fixture: ComponentFixture<MembermenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MembermenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
