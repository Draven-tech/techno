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
    { 
      name: 'Upper Body Push (Chest, Shoulders, Triceps)', 
      description: `
        <strong>Warm-up:</strong> 5-10 mins on the treadmill or cycling<br>
        <strong>Workout:</strong><br>
        - Barbell Bench Press: 4 sets of 8-10 reps<br>
        - Incline Dumbbell Press: 3 sets of 10 reps<br>
        - Shoulder Press Machine: 3 sets of 10 reps<br>
        - Cable Chest Flys: 3 sets of 12 reps<br>
        - Tricep Pushdowns (Cable): 3 sets of 12 reps<br>
        - Dips: 3 sets to failure (use assisted dip machine if needed)<br>
        <strong>Cool-down:</strong> Stretch chest, shoulders, and triceps
      `, 
      day: 'Monday' 
    },
    { 
      name: 'Lower Body (Legs, Glutes)', 
      description: `
        <strong>Warm-up:</strong> 5-10 mins on the rowing machine<br>
        <strong>Workout:</strong><br>
        - Barbell Squats: 4 sets of 8-10 reps<br>
        - Leg Press Machine: 4 sets of 10 reps<br>
        - Romanian Deadlifts (Dumbbell or Barbell): 3 sets of 10 reps<br>
        - Leg Curl Machine: 3 sets of 12 reps<br>
        - Leg Extension Machine: 3 sets of 12 reps<br>
        - Seated Calf Raises: 4 sets of 15 reps<br>
        <strong>Cool-down:</strong> Stretch quads, hamstrings, calves
      `, 
      day: 'Tuesday' 
    },
    { 
      name: 'Cardio & Core', 
      description: `
        <strong>Warm-up:</strong> 5-10 mins on the elliptical<br>
        <strong>Workout:</strong><br>
        - HIIT Circuit (Treadmill/Rowing Machine/Stationary Bike):<br>
          30 seconds sprint, 30 seconds rest (repeat for 20 mins)<br>
        - Cable Woodchoppers: 3 sets of 15 reps (each side)<br>
        - Plank: 3 sets of 30 seconds<br>
        - Ab Rollouts (using an ab roller): 3 sets of 10 reps<br>
        - Hanging Leg Raises (using a pull-up bar): 3 sets of 12 reps<br>
        <strong>Cool-down:</strong> Stretch abs and lower back
      `, 
      day: 'Wednesday' 
    },
    { 
      name: 'Upper Body Pull (Back, Biceps)', 
      description: `
        <strong>Warm-up:</strong> 5-10 mins on the rowing machine or light lat pulldown<br>
        <strong>Workout:</strong><br>
        - Deadlifts (Barbell): 4 sets of 6-8 reps<br>
        - Pull-ups or Lat Pulldown Machine: 4 sets of 8-10 reps<br>
        - Seated Row Machine: 3 sets of 10 reps<br>
        - Dumbbell or Cable Bicep Curls: 3 sets of 12 reps<br>
        - Face Pulls (Cable): 3 sets of 12 reps<br>
        - Back Extensions (on Roman chair): 3 sets of 15 reps<br>
        <strong>Cool-down:</strong> Stretch back and biceps
      `, 
      day: 'Thursday' 
    },
    { 
      name: 'Full Body Circuit', 
      description: `
        <strong>Warm-up:</strong> 5-10 mins on the treadmill or bike<br>
        <strong>Workout:</strong><br>
        - Barbell Deadlifts: 3 sets of 8 reps<br>
        - Leg Press Machine: 3 sets of 10 reps<br>
        - Dumbbell Bench Press: 3 sets of 10 reps<br>
        - Pull-ups or Lat Pulldown: 3 sets of 8-10 reps<br>
        - Cable Tricep Pushdowns: 3 sets of 12 reps<br>
        - Dumbbell Bicep Curls: 3 sets of 12 reps<br>
        - Seated Calf Raises: 3 sets of 15 reps<br>
        <strong>Cool-down:</strong> Stretch full body
      `, 
      day: 'Friday' 
    },
    { 
      name: 'Cardio & Core', 
      description: `
        <strong>Warm-up:</strong> 5-10 mins of low-intensity treadmill walking<br>
        <strong>Workout:</strong><br>
        - Steady-State Cardio (Elliptical, Rowing Machine, or Cycling): 30-45 minutes at moderate intensity<br>
        - Cable Woodchoppers: 3 sets of 15 reps (each side)<br>
        - Russian Twists (with a medicine ball): 3 sets of 20 reps<br>
        - Cable Crunches: 3 sets of 15 reps<br>
        - Plank: 3 sets of 1 minute<br>
        <strong>Cool-down:</strong> Stretch core and hips
      `, 
      day: 'Saturday' 
    },
    { 
      name: 'Active Recovery', 
      description: `
        <strong>Activity:</strong><br>
        - 30-45 mins light cardio (walking, cycling, swimming)<br>
        - Focus on flexibility: full-body stretching or a yoga session
      `, 
      day: 'Sunday' 
    }
  ];  

  constructor(private navCtrl: NavController) { }

  ngOnInit() { }

  // Go back to the member menu page
  goToMemberMenu() {
    this.navCtrl.navigateBack('/membermenu'); // Navigate to the Member Menu page
  }
}