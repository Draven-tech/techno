import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-diet-plans',
  templateUrl: './edit-diet-plans.page.html',
  styleUrls: ['./edit-diet-plans.page.scss'],
})
export class EditDietPlansPage implements OnInit {
  public days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  public mealPlans: { [key: string]: { [key: string]: string } } = {
    'Pre-Workout Meal': {
      'Monday': 'Oatmeal with banana and peanut butter, Boiled eggs, A cup of black coffee (optional)',
      'Tuesday': 'Whole grain toast with avocado and egg, Protein smoothie',
      'Wednesday': 'Greek yogurt with mixed berries and honey, Handful of almonds',
      'Thursday': 'Brown rice and chicken stir-fry, Steamed vegetables',
      'Friday': 'Omelet with spinach and cheese, Whole wheat toast',
      'Saturday': 'Fruit smoothie with protein powder, Granola bar',
      'Sunday': 'Peanut butter and jelly sandwich on whole grain bread, Boiled eggs',
    },
    'Post-Workout Meal': {
      'Monday': 'Grilled chicken breast, Steamed broccoli and sweet potatoes',
      'Tuesday': 'Salmon with quinoa, Roasted vegetables',
      'Wednesday': 'Turkey sandwich on whole grain bread, Side salad',
      'Thursday': 'Lean beef stir-fry, Brown rice',
      'Friday': 'Grilled tofu with vegetables, Quinoa',
      'Saturday': 'Egg salad wrap, Fresh fruit',
      'Sunday': 'Grilled shrimp, Steamed asparagus and wild rice',
    },
    'Hydration Plan': {
      'Monday': 'Drink 500ml before workout, 500ml during workout, 500ml after workout',
      'Tuesday': 'Drink 500ml before workout, 500ml during workout, 500ml after workout',
      'Wednesday': 'Drink 500ml before workout, 500ml during workout, 500ml after workout',
      'Thursday': 'Drink 500ml before workout, 500ml during workout, 500ml after workout',
      'Friday': 'Drink 500ml before workout, 500ml during workout, 500ml after workout',
      'Saturday': 'Drink 500ml before workout, 500ml during workout, 500ml after workout',
      'Sunday': 'Drink 500ml before workout, 500ml during workout, 500ml after workout',
    }
  };

  public isEditing: boolean = false; // Track if the form is in editing mode

  constructor(private router: Router, private navController: NavController) {}

  ngOnInit() {}

  toggleEditMode() {
    this.isEditing = !this.isEditing; // Toggle the editing mode
    if (!this.isEditing) {
      this.saveChanges(); // Save changes when switching back to view mode
    }
  }

  saveChanges() {
    // Handle the save logic here
    console.log('Updated Meal Plans:', this.mealPlans);
    // Example: send to backend or store locally
    // this.backendService.saveDietPlans(this.mealPlans);
    this.navController.navigateBack('/adminmenu'); // Navigate back to the admin menu after saving
  }
}
