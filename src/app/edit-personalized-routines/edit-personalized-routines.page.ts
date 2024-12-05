import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Import NavController

interface Routine {
  name: string;
  description: string;
  day: string; // Routine is categorized by day
}

interface Customer {
  name: string;
  routines: Routine[];
}

@Component({
  selector: 'app-edit-personalized-routines',
  templateUrl: './edit-personalized-routines.page.html',
  styleUrls: ['./edit-personalized-routines.page.scss'],
})
export class EditPersonalizedRoutinesPage implements OnInit {

  // Predefined customers with routines to be edited
  customers: Customer[] = [
    {
      name: 'John Doe',
      routines: [
        { name: 'Upper Body Push', description: '5-10 mins on treadmill, barbell bench press...', day: 'Monday' },
        { name: 'Lower Body Push', description: '5-10 mins rowing machine, leg press...', day: 'Tuesday' },
        { name: 'Cardio & Core', description: 'HIIT circuit, cable woodchoppers...', day: 'Wednesday' },
        { name: 'Full Body Circuit', description: 'Barbell deadlifts, leg press machine...', day: 'Friday' }
      ]
    },
    {
      name: 'Jane Smith',
      routines: [
        { name: 'Cardio HIIT', description: 'Treadmill, rowing machine, sprints...', day: 'Monday' },
        { name: 'Yoga & Stretching', description: 'Yoga poses and flexibility exercises...', day: 'Tuesday' },
        { name: 'Strength Training', description: 'Dumbbell squats, bicep curls...', day: 'Wednesday' },
        { name: 'Active Recovery', description: 'Light cardio, walking, cycling...', day: 'Sunday' }
      ]
    }
  ];

  selectedCustomer: Customer | null = null;
  showEditModal: boolean = false;

  constructor(private navCtrl: NavController) { }

  ngOnInit() { }

  // Function to select a customer and edit their routines
  selectCustomerForEdit(customer: Customer) {
    this.selectedCustomer = customer;
    this.showEditModal = true;
  }

  // Function to save the updated routine for the selected customer
  saveCustomerRoutine() {
    // Logic to save the edited routine (e.g., API call or local storage update)
    console.log('Updated routine for', this.selectedCustomer?.name);
    this.dismissEditModal();
  }

  // Function to close the edit modal
  dismissEditModal() {
    this.showEditModal = false;
    this.selectedCustomer = null;
  }

  // Go back to the member menu page
  goToMemberMenu() {
    this.navCtrl.navigateBack('/membermenu'); // Navigate to the Member Menu page
  }
}
