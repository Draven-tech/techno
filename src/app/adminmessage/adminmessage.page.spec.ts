import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminmessagePage } from './adminmessage.page';

describe('AdminmessagePage', () => {
  let component: AdminmessagePage;
  let fixture: ComponentFixture<AdminmessagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
