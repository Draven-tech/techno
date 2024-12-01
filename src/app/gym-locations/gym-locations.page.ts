import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-gym-locations',
  templateUrl: './gym-locations.page.html',
  styleUrls: ['./gym-locations.page.scss'],
})
export class GymLocationsPage implements OnInit {
  map!: L.Map;

  mockGymLocation1 = {
    lat: 10.273828844086307,
    lng: 123.85891171349382,
    name: 'Gym Location 1'
  };

  mockGymLocation2 = {
    lat: 10.295828844086307,
    lng: 123.87691171349382,
    name: 'Gym Location 2'
  };

  constructor() {}

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    setTimeout(() => {
      this.map = L.map('map').setView([this.mockGymLocation1.lat, this.mockGymLocation1.lng], 15);

      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; <a href="https://www.esri.com/">Esri</a>',
      }).addTo(this.map);

      L.marker([this.mockGymLocation1.lat, this.mockGymLocation1.lng])
        .addTo(this.map)
        .bindPopup(this.mockGymLocation1.name)
        .openPopup();

      L.marker([this.mockGymLocation2.lat, this.mockGymLocation2.lng])
        .addTo(this.map)
        .bindPopup(this.mockGymLocation2.name)
        .openPopup();
    }, 100);
  }
}
