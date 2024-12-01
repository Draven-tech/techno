import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-gym-locations',
  templateUrl: './gym-locations.page.html',
  styleUrls: ['./gym-locations.page.scss'],
})
export class GymLocationsPage implements OnInit {
  map!: L.Map;

  mockGymLocation = {
    lat: 10.273828844086307, // Cebu latitude
    lng: 123.85891171349382 // Cebu longitude
  };

  constructor() {}

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    setTimeout(() => {
      this.map = L.map('map').setView([this.mockGymLocation.lat, this.mockGymLocation.lng], 13);

      // Use Esri's satellite imagery layer
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; <a href="https://www.esri.com/">Esri</a>',
      }).addTo(this.map);

      L.marker([this.mockGymLocation.lat, this.mockGymLocation.lng])
        .addTo(this.map)
        .bindPopup('Gym Location: Mock')
        .openPopup();
    }, 100); // Delay to ensure map div is rendered
  }
}