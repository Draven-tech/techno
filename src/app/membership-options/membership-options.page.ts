import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership-options',
  templateUrl: './membership-options.page.html',
  styleUrls: ['./membership-options.page.scss'],
})
export class MembershipOptionsPage implements OnInit {
  membershipPlans = [
    { id: 1, name: 'Basic Plan', description: 'Access to gym equipment', price: 50 },
    { id: 2, name: 'Premium Plan', description: 'Access to gym + personal training', price: 100 },
    { id: 3, name: 'Elite Plan', description: 'Premium + nutrition advice', price: 150 },
  ];

  constructor() {}

  ngOnInit() {}
}
