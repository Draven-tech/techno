import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-diet-plans',
  templateUrl: './diet-plans.page.html',
  styleUrls: ['./diet-plans.page.scss']
})
export class DietPlansPage implements OnInit {
  public dietPlans = [
    
  ];

  constructor(private router: Router) {}  

  ngOnInit() {}

  navigateToMenu() {
    this.router.navigate(['/membermenu']);  
  }
}
