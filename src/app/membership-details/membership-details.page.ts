import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-membership-details',
  templateUrl: './membership-details.page.html',
  styleUrls: ['./membership-details.page.scss'],
})
export class MembershipDetailsPage implements OnInit {
  planId: number = 0;
  plan: any;
  
  planDetails = [
    {
      id: 0,
      name: 'Basic Plan',
      description: 'This plan provides basic gym access.',
      price: 30,
    },
    {
      id: 1,
      name: 'Premium Plan',
      description: 'This plan includes all gym services and classes.',
      price: 60,
    },
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const planIdString = this.activatedRoute.snapshot.paramMap.get('id');
    
    if (planIdString) {
      this.planId = +planIdString;
    }

    this.plan = this.planDetails.find(plan => plan.id === this.planId);

    if (!this.plan) {
      console.error('Plan not found for ID:', this.planId);
      this.plan = {
        name: 'Unknown Plan',
        description: 'The requested membership plan could not be found.',
        price: 0,
      };
    }
  }
}
