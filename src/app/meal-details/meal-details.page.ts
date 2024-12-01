import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.page.html',
  styleUrls: ['./meal-details.page.scss'],
})
export class MealDetailsPage implements OnInit {
  mealId: number = 0;
  meal: any;
  
  mealDetails = [
    {
      id: 0,
      name: 'Chicken Salad',
      description: 'A healthy chicken salad.',
      dietPlan: 'Weight Loss',
    },
    {
      id: 1,
      name: 'Steak with Veggies',
      description: 'A protein-rich steak meal.',
      dietPlan: 'Muscle Gain',
    },
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const mealIdString = this.activatedRoute.snapshot.paramMap.get('id');
    
    if (mealIdString) {
      this.mealId = +mealIdString;
    }

    this.meal = this.mealDetails.find(meal => meal.id === this.mealId);

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
