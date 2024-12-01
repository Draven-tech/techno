import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nonmember-menu',
  templateUrl: './nonmember-menu.page.html',
  styleUrls: ['./nonmember-menu.page.scss'],
})
export class NonMemberMenuPage implements OnInit {
  membershipPlans = [
    { id: 1, name: 'Basic Plan', description: 'Access to gym equipment', price: 50 },
    { id: 2, name: 'Premium Plan', description: 'Access to gym + personal training', price: 100 },
    { id: 3, name: 'Elite Plan', description: 'Premium + nutrition advice', price: 150 },
  ];

  dietMeals = [
    { id: 1, name: 'Chicken Salad', description: 'High protein salad', dietPlan: 'Weight Loss' },
    { id: 2, name: 'Vegan Stir-fry', description: 'Plant-based meal', dietPlan: 'Vegan' },
    { id: 3, name: 'Beef Stew', description: 'Rich in protein and iron', dietPlan: 'Muscle Gain' },
  ];

  constructor() {}

  ngOnInit() {}
}
