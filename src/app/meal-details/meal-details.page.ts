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
    { id: 1, name: 'Chicken Salad', description: 'A healthy chicken salad.', dietPlan: 'Weight Loss', ingredients: 'Chicken, Lettuce, Tomatoes, Dressing', calories: 350 },
    { id: 2, name: 'Steak with Veggies', description: 'A protein-rich steak meal.', dietPlan: 'Muscle Gain', ingredients: 'Steak, Broccoli, Carrots', calories: 600 },
    { id: 3, name: 'Vegan Stir-fry', description: 'Plant-based meal.', dietPlan: 'Vegan', ingredients: 'Tofu, Broccoli, Bell Peppers, Soy Sauce', calories: 400 },
    { id: 4, name: 'Grilled Salmon', description: 'Rich in omega-3.', dietPlan: 'Keto', ingredients: 'Salmon, Asparagus, Lemon', calories: 500 },
    { id: 5, name: 'Quinoa Bowl', description: 'A nutrient-packed bowl.', dietPlan: 'Vegetarian', ingredients: 'Quinoa, Avocado, Spinach, Chickpeas', calories: 450 },
    { id: 6, name: 'Pasta Primavera', description: 'Classic Italian vegetarian pasta.', dietPlan: 'Mediterranean', ingredients: 'Pasta, Zucchini, Tomatoes, Olive Oil', calories: 550 },
    { id: 7, name: 'Turkey Wrap', description: 'A light and satisfying meal.', dietPlan: 'Low Carb', ingredients: 'Turkey, Lettuce, Tomatoes, Wrap', calories: 300 },
    { id: 8, name: 'Vegetable Soup', description: 'Warm and comforting.', dietPlan: 'Weight Loss', ingredients: 'Carrots, Celery, Onion, Vegetable Broth', calories: 200 },
    { id: 9, name: 'Protein Smoothie', description: 'A quick and nutritious drink.', dietPlan: 'Muscle Gain', ingredients: 'Protein Powder, Banana, Almond Milk', calories: 300 },
    { id: 10, name: 'Shrimp Stir-fry', description: 'A flavorful Asian dish.', dietPlan: 'Low Carb', ingredients: 'Shrimp, Bell Peppers, Soy Sauce', calories: 400 },
    { id: 11, name: 'Greek Salad', description: 'A Mediterranean favorite.', dietPlan: 'Mediterranean', ingredients: 'Feta Cheese, Olives, Cucumber, Tomatoes', calories: 350 },
    { id: 12, name: 'Stuffed Bell Peppers', description: 'Colorful and filling.', dietPlan: 'Keto', ingredients: 'Ground Beef, Cheese, Bell Peppers', calories: 450 },
    { id: 13, name: 'Avocado Toast', description: 'A modern classic.', dietPlan: 'Vegetarian', ingredients: 'Avocado, Whole Grain Bread, Lemon', calories: 250 },
    { id: 14, name: 'BBQ Chicken Bowl', description: 'Packed with flavor.', dietPlan: 'High Protein', ingredients: 'Chicken, Rice, Corn, BBQ Sauce', calories: 500 },
    { id: 15, name: 'Lentil Curry', description: 'Hearty and flavorful.', dietPlan: 'Vegan', ingredients: 'Lentils, Tomatoes, Spices, Coconut Milk', calories: 400 },
    { id: 16, name: 'Eggplant Parmesan', description: 'A classic Italian dish.', dietPlan: 'Vegetarian', ingredients: 'Eggplant, Parmesan Cheese, Tomato Sauce', calories: 400 },
    { id: 17, name: 'Chicken Tikka Masala', description: 'A flavorful Indian dish.', dietPlan: 'High Protein', ingredients: 'Chicken, Yogurt, Spices, Tomato Sauce', calories: 550 },
    { id: 18, name: 'Berry Parfait', description: 'A refreshing and healthy dessert.', dietPlan: 'Weight Loss', ingredients: 'Greek Yogurt, Berries, Granola', calories: 300 },
    { id: 19, name: 'Spaghetti Bolognese', description: 'A hearty Italian pasta.', dietPlan: 'Mediterranean', ingredients: 'Spaghetti, Ground Beef, Tomato Sauce', calories: 600 }
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
    console.log(`Ordering the meal: ${this.meal.name}`);
    alert(`You have ordered: ${this.meal.name}`);
  }
}
