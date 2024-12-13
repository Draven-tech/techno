import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  plans = [
    { id: 1, name: 'Basic Plan' },
    { id: 2, name: 'Premium Plan' },
    { id: 3, name: 'Elite Plan' },
  ];

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      plan: ['', [Validators.required]],
      paymentMethod: ['', [Validators.required]],
      cardNumber: ['', [Validators.pattern(/^\d{16}$/)]], // Card number validation
      expiryDate: ['', [Validators.pattern(/^\d{2}\/\d{2}$/)]], // Expiry date validation
      cvv: ['', [Validators.pattern(/^\d{3}$/)]], // CVV validation
      paypalEmail: ['', [Validators.email]], // PayPal email validation
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form submitted', this.registerForm.value);
    }
  }
}