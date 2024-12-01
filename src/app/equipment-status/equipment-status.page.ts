import { Component, OnInit } from '@angular/core';

interface Equipment {
  name: string;
  isAvailable: boolean;
}

@Component({
  selector: 'app-equipment-status',
  templateUrl: './equipment-status.page.html',
  styleUrls: ['./equipment-status.page.scss'],
})
export class EquipmentStatusPage implements OnInit {
  equipmentList: Equipment[] = [
    { name: 'Treadmill', isAvailable: true },
    { name: 'Stationary Bike', isAvailable: false },
    { name: 'Elliptical Trainer', isAvailable: true },
    { name: 'Bench Press', isAvailable: false },
    { name: 'Rowing Machine', isAvailable: true },
    { name: 'Leg Press', isAvailable: false },
  ];

  constructor() { }

  ngOnInit() { }
}

