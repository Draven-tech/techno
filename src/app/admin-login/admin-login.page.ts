import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage {
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  login() {
    if (this.email === 'admin' && this.password === 'admin123') {
      this.navCtrl.navigateForward('/adminmenu'); // Replace with actual route
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}