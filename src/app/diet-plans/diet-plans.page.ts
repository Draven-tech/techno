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
          <ion-item><strong>Oatmeal with banana and peanut butter</strong></ion-item><br>
          <ion-item>Boiled eggs</ion-item><br>
          <ion-item>A cup of black coffee (optional)</ion-item><br><br>
          <ion-item><strong>Purpose:</strong><br> Provides sustained energy for your workout</ion-item>
        </ion-list>
      `,
      'Tuesday': `
        <ion-list>
          <ion-item><strong>Whole grain toast with avocado and egg</strong></ion-item><br>
          <ion-item>Protein smoothie</ion-item><br><br>
          <ion-item><strong>Purpose:</strong> <br>Provides energy and protein for workout</ion-item>
        </ion-list>
      `,
      'Wednesday': `
        <ion-list>
          <ion-item><strong>Greek yogurt with mixed berries and honey</strong></ion-item><br>
          <ion-item>Handful of almonds</ion-item><br><br>
          <ion-item><strong>Purpose:</strong><br> Provides protein and quick energy</ion-item>
        </ion-list>
      `,
      'Thursday': `
        <ion-list>
          <ion-item><strong>Brown rice and chicken stir-fry</strong></ion-item><br>
          <ion-item>Steamed vegetables</ion-item><br><br>
          <ion-item><strong>Purpose:</strong><br> Carbs and protein for energy</ion-item>
        </ion-list>
      `,
      'Friday': `
        <ion-list>
          <ion-item><strong>Omelet with spinach and cheese</strong></ion-item><br>
          <ion-item>Whole wheat toast</ion-item><br><br>
          <ion-item><strong>Purpose:</strong><br> High protein and slow-digesting carbs</ion-item>
        </ion-list>
      `,
      'Saturday': `
        <ion-list>
          <ion-item><strong>Fruit smoothie with protein powder</strong></ion-item><br>
          <ion-item>Granola bar</ion-item><br><br>
          <ion-item><strong>Purpose:</strong><br> Quick energy boost before workouts</ion-item>
        </ion-list>
      `,
      'Sunday': `
        <ion-list>
          <ion-item><strong>Peanut butter and jelly sandwich on whole grain bread</strong></ion-item><br>
          <ion-item>Boiled eggs</ion-item><br><br>
          <ion-item><strong>Purpose:</strong> <br>Carbs and protein for energy</ion-item>
        </ion-list>
      `,
    },
    'Post-Workout Meal': {
      'Monday': `
        <ion-list>
          <ion-item><strong>Grilled chicken breast</strong></ion-item><br>
          <ion-item>Steamed broccoli and sweet potatoes</ion-item><br><br>
          <ion-item><strong>Purpose:</strong><br> Muscle recovery and glycogen replenishment</ion-item>
        </ion-list>
      `,
      'Tuesday': `
        <ion-list>
          <ion-item><strong>Salmon with quinoa</strong></ion-item><br>
          <ion-item>Roasted vegetables</ion-item><br><br>
          <ion-item><strong>Purpose:</strong> <br>Protein and complex carbs for recovery</ion-item>
        </ion-list>
      `,
      'Wednesday': `
        <ion-list>
          <ion-item><strong>Turkey sandwich on whole grain bread</strong></ion-item><br>
          <ion-item>Side salad</ion-item><br><br>
          <ion-item><strong>Purpose:</strong><br> Protein and fiber</ion-item>
        </ion-list>
      `,
      'Thursday': `
        <ion-list>
          <ion-item><strong>Lean beef stir-fry</strong></ion-item><br>
          <ion-item>Brown rice</ion-item><br><br>
          <ion-item><strong>Purpose:</strong><br> Iron-rich protein and carbs for recovery</ion-item>
        </ion-list>
      `,
      'Friday': `
        <ion-list>
          <ion-item><strong>Grilled tofu with vegetables</strong></ion-item><br>
          <ion-item>Quinoa</ion-item><br><br>
          <ion-item><strong>Purpose:</strong><br> Plant-based protein and energy</ion-item>
        </ion-list>
      `,
      'Saturday': `
        <ion-list>
          <ion-item><strong>Egg salad wrap</strong></ion-item><br>
          <ion-item>Fresh fruit</ion-item><br><br>
          <ion-item><strong>Purpose:</strong><br> Protein and natural sugars for recovery</ion-item>
        </ion-list>
      `,
      'Sunday': `
        <ion-list>
          <ion-item><strong>Grilled shrimp</strong></ion-item><br>
          <ion-item>Steamed asparagus and wild rice</ion-item><br>
          <ion-item><strong>Purpose:</strong><br><br> Protein and fiber-rich recovery meal</ion-item>
        </ion-list>
      `,
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
