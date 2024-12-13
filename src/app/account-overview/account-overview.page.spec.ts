import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountOverviewPage } from './account-overview.page';

describe('AccountOverviewPage', () => {
  let component: AccountOverviewPage;
  let fixture: ComponentFixture<AccountOverviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
