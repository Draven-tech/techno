import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditEquipmentStatusPage } from './edit-equipment-status.page';

describe('EditEquipmentStatusPage', () => {
  let component: EditEquipmentStatusPage;
  let fixture: ComponentFixture<EditEquipmentStatusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEquipmentStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
