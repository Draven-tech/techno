import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  logoClickCount: number = 0; // Counter for logo clicks

  constructor(private router: Router) {}

  ngOnInit() {}

  // Method triggered when the logo is clicked
  onLogoClick() {
    this.logoClickCount++;
    if (this.logoClickCount === 5) {
      // After 5 clicks, navigate to the admin login page
      this.router.navigate(['/admin-login']);
      this.logoClickCount = 0; // Reset the counter
    }
  }
}