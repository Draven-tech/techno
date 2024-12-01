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
  ];

  constructor() {}

  ngOnInit() {}
}