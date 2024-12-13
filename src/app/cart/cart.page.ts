import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'; // Import the CartService

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss']
})
export class CartPage implements OnInit {
  cartItems: { mealName: string, day: string, mealDetails: string }[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems(); // Get all items from the cart
  }

  // Remove meal from cart
  removeMeal(index: number) {
    this.cartService.removeMealFromCart(index);
    this.cartItems = this.cartService.getCartItems(); // Refresh cart items
  }

  // Clear all meals from cart
  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }
}
