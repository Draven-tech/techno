import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  // Define the available plans
  plans = [
    { id: 1, name: 'Basic Plan' },
    { id: 2, name: 'Premium Plan' },
    { id: 3, name: 'Elite Plan' }
  ];

  // Register form with plan control
  registerForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    plan: ['', [Validators.required]] // Add plan to the form controls
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    if (this.registerForm.valid) {
      // Handle form submission logic here
      console.log('Form submitted', this.registerForm.value);
    }
  }
}
