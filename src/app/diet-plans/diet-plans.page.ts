import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-diet-plans',
  templateUrl: './diet-plans.page.html',
  styleUrls: ['./diet-plans.page.scss']
})
export class DietPlansPage implements OnInit {
  public days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Updated mealPlans structure without <br> tags, using lists or paragraphs for clean format
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
          <ion-item>Smoothie with protein powder</ion-item>
          <ion-item><strong>Purpose:</strong> Provides energy and protein for workout fuel</ion-item>
        </ion-list>
      `,
      'Wednesday': `
        <ion-list>
          <ion-item><strong>Greek yogurt with berries and granola</strong></ion-item>
          <ion-item>Almonds</ion-item>
          <ion-item><strong>Purpose:</strong> Light meal for energy and focus</ion-item>
        </ion-list>
      `,
      'Thursday': `
        <ion-list>
          <ion-item><strong>Oatmeal with banana and almond butter</strong></ion-item>
          <ion-item>Hard-boiled eggs</ion-item>
          <ion-item><strong>Purpose:</strong> Quick digesting carbs and protein for energy</ion-item>
        </ion-list>
      `,
      'Friday': `
        <ion-list>
          <ion-item><strong>Scrambled eggs with spinach and mushrooms</strong></ion-item>
          <ion-item>A small portion of quinoa</ion-item>
          <ion-item><strong>Purpose:</strong> Protein and healthy fats for sustained energy</ion-item>
        </ion-list>
      `,
      'Saturday': `
        <ion-list>
          <ion-item><strong>Protein pancakes with syrup</strong></ion-item>
          <ion-item>A side of fruit</ion-item>
          <ion-item><strong>Purpose:</strong> A fun and nutritious pre-workout meal</ion-item>
        </ion-list>
      `,
      'Sunday': `
        <ion-list>
          <ion-item><strong>Smoothie with spinach, banana, protein powder, and almond milk</strong></ion-item>
          <ion-item><strong>Purpose:</strong> Light and nutritious pre-workout boost</ion-item>
        </ion-list>
      `
    },
    'Post-Workout Meal': {
      'Monday': `
        <ion-list>
          <ion-item><strong>Grilled chicken breast</strong></ion-item>
          <ion-item>Steamed broccoli and sweet potatoes</ion-item>
          <ion-item>A protein shake</ion-item>
          <ion-item><strong>Purpose:</strong> Supports muscle recovery and replenishes glycogen stores</ion-item>
        </ion-list>
      `,
      'Tuesday': `
        <ion-list>
          <ion-item><strong>Salmon with quinoa</strong></ion-item>
          <ion-item>Roasted vegetables</ion-item>
          <ion-item>A protein shake</ion-item>
          <ion-item><strong>Purpose:</strong> High-quality protein and complex carbs for recovery</ion-item>
        </ion-list>
      `,
      'Wednesday': `
        <ion-list>
          <ion-item><strong>Tofu stir-fry with brown rice</strong></ion-item>
          <ion-item>Steamed greens</ion-item>
          <ion-item>A protein shake</ion-item>
          <ion-item><strong>Purpose:</strong> Vegan-friendly protein and recovery meal</ion-item>
        </ion-list>
      `,
      'Thursday': `
        <ion-list>
          <ion-item><strong>Chicken breast with sweet potato and asparagus</strong></ion-item>
          <ion-item>Greek yogurt</ion-item>
          <ion-item><strong>Purpose:</strong> Lean protein and vitamins for muscle repair</ion-item>
        </ion-list>
      `,
      'Friday': `
        <ion-list>
          <ion-item><strong>Lean beef with roasted potatoes</strong></ion-item>
          <ion-item>Steamed broccoli</ion-item>
          <ion-item>A protein shake</ion-item>
          <ion-item><strong>Purpose:</strong> Nutrient-dense meal for muscle recovery</ion-item>
        </ion-list>
      `,
      'Saturday': `
        <ion-list>
          <ion-item><strong>Turkey with quinoa and roasted carrots</strong></ion-item>
          <ion-item>Protein shake</ion-item>
          <ion-item><strong>Purpose:</strong> Lean protein with complex carbs for muscle repair</ion-item>
        </ion-list>
      `,
      'Sunday': `
        <ion-list>
          <ion-item><strong>Grilled fish with a side of brown rice</strong></ion-item>
          <ion-item>Avocado</ion-item>
          <ion-item><strong>Purpose:</strong> Omega-3s for recovery and muscle repair</ion-item>
        </ion-list>
      `
    },
    'Hydration Plan': {
      'Monday': `
        <ion-list>
          <ion-item><strong>Drink 500ml of water 1 hour before your workout</strong></ion-item>
          <ion-item>Sip water during exercise to stay hydrated</ion-item>
          <ion-item>Replenish with an electrolyte drink post-workout</ion-item>
          <ion-item><strong>Purpose:</strong> Keeps you hydrated for optimal performance and recovery</ion-item>
        </ion-list>
      `,
      'Tuesday': `
        <ion-list>
          <ion-item><strong>Drink 750ml of water in the morning</strong></ion-item>
          <ion-item>Have water every 30 minutes during the workout</ion-item>
          <ion-item>Coconut water post-workout for electrolytes</ion-item>
          <ion-item><strong>Purpose:</strong> Hydration for endurance</ion-item>
        </ion-list>
      `,
      'Wednesday': `
        <ion-list>
          <ion-item><strong>Drink 500ml of water before and during workout</strong></ion-item>
          <ion-item>Avoid sugary drinks</ion-item>
          <ion-item>Drink an electrolyte solution post-workout</ion-item>
          <ion-item><strong>Purpose:</strong> Keep hydrated and balanced</ion-item>
        </ion-list>
      `,
      'Thursday': `
        <ion-list>
          <ion-item><strong>Drink 500ml water before exercise</strong></ion-item>
          <ion-item>Drink water every 15 minutes during workout</ion-item>
          <ion-item>Electrolyte drink post-workout</ion-item>
          <ion-item><strong>Purpose:</strong> Stay hydrated for energy</ion-item>
        </ion-list>
      `,
      'Friday': `
        <ion-list>
          <ion-item><strong>Water with added minerals</strong></ion-item>
          <ion-item>Hydrate every 20 minutes</ion-item>
          <ion-item>Watermelon juice post-workout</ion-item>
          <ion-item><strong>Purpose:</strong> Hydration for recovery</ion-item>
        </ion-list>
      `,
      'Saturday': `
        <ion-list>
          <ion-item><strong>Drink water throughout the day</strong></ion-item>
          <ion-item>Hydrate every 20 minutes during your workout</ion-item>
          <ion-item>Post-workout hydration with a sports drink</ion-item>
          <ion-item><strong>Purpose:</strong> Replenish lost fluids</ion-item>
        </ion-list>
      `,
      'Sunday': `
        <ion-list>
          <ion-item><strong>Drink at least 2 liters of water</strong></ion-item>
          <ion-item>Avoid dehydration by sipping water throughout the day</ion-item>
          <ion-item>Electrolyte drink post-workout</ion-item>
          <ion-item><strong>Purpose:</strong> Optimal hydration and recovery</ion-item>
        </ion-list>
      `
    }
  };

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {}

  // Modify the showMealInfo method to include the day
  async showMealInfo(mealType: string, day: string) {
    const alert = await this.alertController.create({
      header: `${mealType} for ${day}`,
      message: this.mealPlans[mealType][day],
      buttons: ['OK']
    });
    await alert.present();
  }

  navigateToMenu() {
    this.router.navigate(['/membermenu']);
  }
}
