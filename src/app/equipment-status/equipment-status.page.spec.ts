import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EquipmentStatusPage } from './equipment-status.page';

describe('EquipmentStatusPage', () => {
  let component: EquipmentStatusPage;
  let fixture: ComponentFixture<EquipmentStatusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
