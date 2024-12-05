import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminmenu',  // Use 'app-membermenu' for the page selector
  templateUrl: './adminmenu.page.html',
  styleUrls: ['./adminmenu.page.scss'],
})
export class AdminmenuPage {
  constructor(private alertController: AlertController, private router: Router) {}

  async confirmLogout() {
    const alert = await this.alertController.create({
      header: 'Logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Yes',
          handler: () => {
            this.router.navigate(['/home']);  // Navigate to the home page on confirmation
          },
        },
      ],
    });

    await alert.present();
  }
}
