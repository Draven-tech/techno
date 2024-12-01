import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Import NavController

interface Routine {
  name: string;
  description: string;
  day: string; // Routine is categorized by day
}

@Component({
  selector: 'app-personalized-routines',
  templateUrl: './personalized-routines.page.html',
  styleUrls: ['./personalized-routines.page.scss'],
})
export class PersonalizedRoutinesPage implements OnInit {

  // Predefined coach's routines for the week
  coachRoutines: Routine[] = [
    { name: 'Monday Workout', description: 'Cardio and strength training using treadmill and dumbbells.', day: 'Monday' },
    { name: 'Tuesday Yoga', description: 'Relaxing yoga session using yoga mats and resistance bands.', day: 'Tuesday' },
    { name: 'Wednesday HIIT', description: 'High-intensity interval training using kettlebells and battle ropes.', day: 'Wednesday' },
    { name: 'Thursday Pilates', description: 'Core strengthening exercises using Pilates reformer and resistance bands.', day: 'Thursday' },
    { name: 'Friday Run', description: '5km running session on the treadmill.', day: 'Friday' },
    { name: 'Saturday Rest', description: 'Take a break, no gym equipment.', day: 'Saturday' },
    { name: 'Sunday Stretch', description: 'Full body stretching using yoga mats and foam rollers.', day: 'Sunday' }
  ];  

  constructor(private navCtrl: NavController) { }

  ngOnInit() { }

  // Go back to the member menu page
  goToMemberMenu() {
    this.navCtrl.navigateBack('/membermenu'); // Navigate to the Member Menu page
  }
}
