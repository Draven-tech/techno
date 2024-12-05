import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MealDetailModalComponent } from '../meal-detail-modal/meal-detail-modal.component';

@Component({
  selector: 'app-diet-plans',
  templateUrl: './diet-plans.page.html',
  styleUrls: ['./diet-plans.page.scss']
})
export class DietPlansPage implements OnInit {
  public days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  public mealPlans: { [key: string]: { [key: string]: string } } = {
    'Pre-Workout Meal': {
      'Monday': `
        <ion-list>
          <ion-item><strong>Oatmeal with banana and peanut butter</strong></ion-item>
          <ion-item>Boiled eggs</ion-item>
          <ion-item>A cup of black coffee (optional)</ion-item>
          <ion-item><strong>Purpose:</strong> Provides sustained energy for your workout</ion-item>
        </ion-list>
      `,
      'Tuesday': `
        <ion-list>
          <ion-item><strong>Whole grain toast with avocado and egg</strong></ion-item>
          <ion-item>Protein smoothie</ion-item>
          <ion-item><strong>Purpose:</strong> Provides energy and protein for workout</ion-item>
        </ion-list>
      `,
      // Add more for other days...
    },
    'Post-Workout Meal': {
      'Monday': `
        <ion-list>
          <ion-item><strong>Grilled chicken breast</strong></ion-item>
          <ion-item>Steamed broccoli and sweet potatoes</ion-item>
          <ion-item><strong>Purpose:</strong> Muscle recovery and glycogen replenishment</ion-item>
        </ion-list>
      `,
      'Tuesday': `
        <ion-list>
          <ion-item><strong>Salmon with quinoa</strong></ion-item>
          <ion-item>Roasted vegetables</ion-item>
          <ion-item><strong>Purpose:</strong> Protein and complex carbs for recovery</ion-item>
        </ion-list>
      `,
      // Add more for other days...
    }
  };

  constructor(private router: Router, private modalController: ModalController) {}

  ngOnInit() {}

  async showMealInfo(mealType: string, day: string) {
    const modal = await this.modalController.create({
      component: MealDetailModalComponent,
      componentProps: {
        header: `${mealType} for ${day}`,
        content: this.mealPlans[mealType][day]
      },
      cssClass: 'large-modal'
    });
    await modal.present();
  }

  navigateToMenu() {
    this.router.navigate(['/membermenu']);
  }
}
