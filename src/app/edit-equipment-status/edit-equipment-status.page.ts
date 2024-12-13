import { Component, OnInit } from '@angular/core';

interface EquipmentUnit {
  name: string;
  isInUse: boolean;
}

interface Equipment {
  name: string;
  units: EquipmentUnit[];
}

@Component({
  selector: 'app-edit-equipment-status',
  templateUrl: './edit-equipment-status.page.html',
  styleUrls: ['./edit-equipment-status.page.scss'],
})
export class EditEquipmentStatusPage implements OnInit {
  equipmentList: Equipment[] = [
    {
      name: 'Treadmill',
      units: [
        { name: 'Treadmill 1', isInUse: true },
        { name: 'Treadmill 2', isInUse: false },
        { name: 'Treadmill 3', isInUse: true },
        { name: 'Treadmill 4', isInUse: false },
      ],
    },
    {
      name: 'Stationary Bike',
      units: [
        { name: 'Bike 1', isInUse: false },
        { name: 'Bike 2', isInUse: true },
        { name: 'Bike 3', isInUse: true },
      ],
    },
    {
      name: 'Elliptical Trainer',
      units: [
        { name: 'Elliptical 1', isInUse: true },
        { name: 'Elliptical 2', isInUse: false },
        { name: 'Elliptical 3', isInUse: true },
      ],
    },
    {
      name: 'Bench Press',
      units: [
        { name: 'Bench Press 1', isInUse: false },
        { name: 'Bench Press 2', isInUse: true },
      ],
    },
    {
      name: 'Rowing Machine',
      units: [
        { name: 'Rowing Machine 1', isInUse: true },
        { name: 'Rowing Machine 2', isInUse: false },
        { name: 'Rowing Machine 3', isInUse: true },
      ],
    },
    {
      name: 'Leg Press',
      units: [
        { name: 'Leg Press 1', isInUse: false },
        { name: 'Leg Press 2', isInUse: true },
      ],
    },
    {
      name: 'Dumbbells',
      units: [
        { name: 'Dumbbell Set 1', isInUse: true },
        { name: 'Dumbbell Set 2', isInUse: false },
      ],
    },
    {
      name: 'Squat Rack',
      units: [
        { name: 'Squat Rack 1', isInUse: false },
        { name: 'Squat Rack 2', isInUse: true },
      ],
    },
    {
      name: 'Pull-up Bar',
      units: [
        { name: 'Pull-up Bar 1', isInUse: true },
        { name: 'Pull-up Bar 2', isInUse: true },
      ],
    },
    {
      name: 'Kettlebells',
      units: [
        { name: 'Kettlebell Set 1', isInUse: true },
        { name: 'Kettlebell Set 2', isInUse: false },
        { name: 'Kettlebell Set 3', isInUse: true },
      ],
    },
    {
      name: 'Cable Machine',
      units: [
        { name: 'Cable Machine 1', isInUse: true },
        { name: 'Cable Machine 2', isInUse: false },
      ],
    },
  ];

  selectedEquipment: Equipment | null = null;

  constructor() {}

  ngOnInit() {}

  selectEquipment(equipment: Equipment): void {
    this.selectedEquipment = equipment;
  }

  clearSelection(): void {
    this.selectedEquipment = null;
  }

  saveStatus(): void {
    // Logic to save the status changes
    console.log('Status updated:', this.selectedEquipment);
  }
}
