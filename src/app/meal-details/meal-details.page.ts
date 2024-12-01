import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.page.html',
  styleUrls: ['./meal-details.page.scss'],
})
export class MealDetailsPage implements OnInit {
  mealId: number = 0; // Define mealId as a number
  meal: any = {}; // Define meal as an empty object initially

  // Define mealDetails as an array of objects
  mealDetails = [
    {
      id: 1,
      name: 'Chicken Salad',
      description: 'A healthy chicken salad.',
      dietPlan: 'Weight Loss',
    },
    {
      id: 2,
      name: 'Steak with Veggies',
      description: 'A protein-rich steak meal.',
      dietPlan: 'Muscle Gain',
    },
    {
      id: 3,
      name: 'Vegan Stir-fry',
      description: 'Plant-based meal.',
      dietPlan: 'Vegan',
    },
    // Add more meals as necessary
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const mealIdString = this.activatedRoute.snapshot.paramMap.get('id');

    // Check if mealIdString is not null and is a valid number
    if (mealIdString && !isNaN(+mealIdString)) {
      this.mealId = +mealIdString;
    } else {
      console.error('Invalid or missing meal ID');
      this.mealId = 0; // Set a fallback value, such as 0
    }

    // Find the meal with the given ID
    this.meal = this.mealDetails.find(meal => meal.id === this.mealId);

    // If no meal is found, assign default values to 'meal'
    if (!this.meal) {
      console.error('Meal not found for ID:', this.mealId);
      this.meal = {
        name: 'Unknown Meal',
        description: 'The requested meal details could not be found.',
        dietPlan: 'N/A',
      };
    }
  }
}
