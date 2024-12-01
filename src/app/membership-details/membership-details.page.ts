import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-membership-details',
  templateUrl: './membership-details.page.html',
  styleUrls: ['./membership-details.page.scss'],
})
export class MembershipDetailsPage implements OnInit {
  plan: any;

  // Hardcoding membership plans for this example
  membershipPlans = [
    { id: 1, name: 'Basic Plan', description: 'Access to gym equipment only.', price: 50, benefits: 'Access to gym, 5 sessions per month' },
    { id: 2, name: 'Premium Plan', description: 'Access to gym + personal training sessions.', price: 100, benefits: 'Access to gym, 10 sessions per month, 2 personal training sessions' },
    { id: 3, name: 'Elite Plan', description: 'Premium access + nutrition advice.', price: 150, benefits: 'Access to gym, unlimited sessions, personal training, nutrition advice' },
  ];

  constructor(private activatedRoute: ActivatedRoute) {}
  
  ngOnInit() {
    const planIdString = this.activatedRoute.snapshot.paramMap.get('id');
    
    if (planIdString && !isNaN(+planIdString)) {
      const planId = +planIdString;
      this.plan = this.membershipPlans.find((plan) => plan.id === planId);
    } else {
      console.error('Invalid or missing plan ID');
      this.plan = null; // or handle with fallback value
    }
  
    if (!this.plan) {
      console.error('Membership plan not found for ID:', planIdString);
      this.plan = {
        name: 'Unknown Plan',
        description: 'The requested membership details could not be found.',
        price: 0,
        benefits: 'N/A',
      };
    }
  }
  
}
