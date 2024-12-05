import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminmenuPage } from './adminmenu.page';

describe('AdminmenuPage', () => {
  let component: AdminmenuPage;
  let fixture: ComponentFixture<AdminmenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
