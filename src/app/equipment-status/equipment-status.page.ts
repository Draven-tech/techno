import { Component, OnInit } from '@angular/core';

interface EquipmentUnit {
  name: string;
  isAvailable: boolean;
}

interface Equipment {
  name: string;
  units: EquipmentUnit[];
}

@Component({
  selector: 'app-equipment-status',
  templateUrl: './equipment-status.page.html',
  styleUrls: ['./equipment-status.page.scss'],
})
export class EquipmentStatusPage implements OnInit {
  equipmentList: Equipment[] = [
    {
      name: 'Treadmill',
      units: [
        { name: 'Treadmill 1', isAvailable: true },
        { name: 'Treadmill 2', isAvailable: true },
        { name: 'Treadmill 3', isAvailable: true },
        { name: 'Treadmill 4', isAvailable: false },
      ],
    },
    {
      name: 'Stationary Bike',
      units: [
        { name: 'Bike 1', isAvailable: false },
        { name: 'Bike 2', isAvailable: true },
        { name: 'Bike 3', isAvailable: true },
      ],
    },
    {
      name: 'Elliptical Trainer',
      units: [
        { name: 'Elliptical 1', isAvailable: true },
        { name: 'Elliptical 2', isAvailable: false },
        { name: 'Elliptical 3', isAvailable: true },
      ],
    },
    {
      name: 'Bench Press',
      units: [
        { name: 'Bench Press 1', isAvailable: false },
        { name: 'Bench Press 2', isAvailable: true },
      ],
    },
    {
      name: 'Rowing Machine',
      units: [
        { name: 'Rowing Machine 1', isAvailable: true },
        { name: 'Rowing Machine 2', isAvailable: true },
        { name: 'Rowing Machine 3', isAvailable: false },
      ],
    },
    {
      name: 'Leg Press',
      units: [
        { name: 'Leg Press 1', isAvailable: false },
        { name: 'Leg Press 2', isAvailable: true },
      ],
    },
    {
      name: 'Dumbbells',
      units: [
        { name: 'Dumbbell Set 1', isAvailable: true },
        { name: 'Dumbbell Set 2', isAvailable: false },
      ],
    },
    {
      name: 'Squat Rack',
      units: [
        { name: 'Squat Rack 1', isAvailable: false },
        { name: 'Squat Rack 2', isAvailable: true },
      ],
    },
    {
      name: 'Pull-up Bar',
      units: [
        { name: 'Pull-up Bar 1', isAvailable: true },
        { name: 'Pull-up Bar 2', isAvailable: true },
      ],
    },
    {
      name: 'Kettlebells',
      units: [
        { name: 'Kettlebell Set 1', isAvailable: true },
        { name: 'Kettlebell Set 2', isAvailable: false },
        { name: 'Kettlebell Set 3', isAvailable: true },
      ],
    },
    {
      name: 'Cable Machine',
      units: [
        { name: 'Cable Machine 1', isAvailable: true },
        { name: 'Cable Machine 2', isAvailable: false },
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
}