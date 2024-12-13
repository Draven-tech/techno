import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Makes the service available app-wide
})
export class CartService {
  getCartItems(): { mealName: string; day: string; mealDetails: string; }[] {
    throw new Error('Method not implemented.');
  }
  removeMealFromCart(index: number) {
    throw new Error('Method not implemented.');
  }
  private cart: any[] = [];

  constructor() {}

  // Method to add a meal to the cart
  addMealToCart(mealName: string, day: string, mealDetails: string): void {
    this.cart.push({ mealName, day, mealDetails });
  }

  // Method to get all meals in the cart
  getCart(): any[] {
    return this.cart;
  }

  // Method to clear the cart
  clearCart(): void {
    this.cart = [];
  }
}
