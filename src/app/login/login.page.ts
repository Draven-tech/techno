import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  login() {
    if (this.email === 'testuser@usjr' && this.password === 'usjr123') {
      this.navCtrl.navigateForward('/membermenu'); // Replace with actual route
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}