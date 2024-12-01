import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.page.html',
  styleUrls: ['./meal-details.page.scss'],
})
export class MealDetailsPage implements OnInit {
  mealId: number = 0;
  meal: any = {};

  mealDetails = [
    {
      id: 1,
      name: 'Chicken Salad',
      description: 'A healthy chicken salad.',
      dietPlan: 'Weight Loss',
      ingredients: 'Chicken, Lettuce, Tomatoes, Dressing',
      calories: 350,
    },
    {
      id: 2,
      name: 'Steak with Veggies',
      description: 'A protein-rich steak meal.',
      dietPlan: 'Muscle Gain',
      ingredients: 'Steak, Broccoli, Carrots',
      calories: 600,
    },
    {
      id: 3,
      name: 'Vegan Stir-fry',
      description: 'Plant-based meal.',
      dietPlan: 'Vegan',
      ingredients: 'Tofu, Broccoli, Bell Peppers, Soy Sauce',
      calories: 400,
    },
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const mealIdString = this.activatedRoute.snapshot.paramMap.get('id');
    if (mealIdString && !isNaN(+mealIdString)) {
      this.mealId = +mealIdString;
    } else {
      console.error('Invalid or missing meal ID');
      this.mealId = 0;
    }

    this.meal = this.mealDetails.find(meal => meal.id === this.mealId);
    if (!this.meal) {
      console.error('Meal not found for ID:', this.mealId);
      this.meal = {
        name: 'Unknown Meal',
        description: 'The requested meal details could not be found.',
        dietPlan: 'N/A',
        ingredients: 'N/A',
        calories: 0,
      };
    }
  }

  orderMeal() {
    // Logic for ordering the meal
    console.log(`Ordering the meal: ${this.meal.name}`);
    alert(`You have ordered: ${this.meal.name}`);
  }
}
