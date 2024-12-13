import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-options',
  templateUrl: './meal-options.page.html',
  styleUrls: ['./meal-options.page.scss'],
})
export class MealOptionsPage implements OnInit {
  dietMeals = [
    { id: 1, name: 'Chicken Salad', description: 'High protein salad', dietPlan: 'Weight Loss' },
    { id: 2, name: 'Vegan Stir-fry', description: 'Plant-based meal', dietPlan: 'Vegan' },
    { id: 3, name: 'Beef Stew', description: 'Rich in protein and iron', dietPlan: 'Muscle Gain' },
    { id: 4, name: 'Grilled Salmon', description: 'Rich in omega-3.', dietPlan: 'Keto' },
    { id: 5, name: 'Quinoa Bowl', description: 'A nutrient-packed bowl.', dietPlan: 'Vegetarian' },
    { id: 6, name: 'Pasta Primavera', description: 'Classic Italian vegetarian pasta.', dietPlan: 'Mediterranean' },
    { id: 7, name: 'Turkey Wrap', description: 'A light and satisfying meal.', dietPlan: 'Low Carb' },
    { id: 8, name: 'Vegetable Soup', description: 'Warm and comforting.', dietPlan: 'Weight Loss' },
    { id: 9, name: 'Protein Smoothie', description: 'A quick and nutritious drink.', dietPlan: 'Muscle Gain' },
    { id: 10, name: 'Shrimp Stir-fry', description: 'A flavorful Asian dish.', dietPlan: 'Low Carb' },
    { id: 11, name: 'Greek Salad', description: 'A Mediterranean favorite.', dietPlan: 'Mediterranean' },
    { id: 12, name: 'Stuffed Bell Peppers', description: 'Colorful and filling.', dietPlan: 'Keto' },
    { id: 13, name: 'Avocado Toast', description: 'A modern classic.', dietPlan: 'Vegetarian' },
    { id: 14, name: 'BBQ Chicken Bowl', description: 'Packed with flavor.', dietPlan: 'High Protein' },
    { id: 15, name: 'Lentil Curry', description: 'Hearty and flavorful.', dietPlan: 'Vegan' },
    { id: 16, name: 'Eggplant Parmesan', description: 'A classic Italian dish.', dietPlan: 'Vegetarian' },
    { id: 17, name: 'Chicken Tikka Masala', description: 'A flavorful Indian dish.', dietPlan: 'High Protein' },
    { id: 18, name: 'Berry Parfait', description: 'A refreshing and healthy dessert.', dietPlan: 'Weight Loss' },
    { id: 19, name: 'Spaghetti Bolognese', description: 'A hearty Italian pasta.', dietPlan: 'Mediterranean' }
  ];

  constructor() {}

  ngOnInit() {}
}
