import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-meal-detail-modal',
  templateUrl: './meal-detail-modal.component.html',
  styleUrls: ['./meal-detail-modal.component.scss']
})
export class MealDetailModalComponent {
  @Input() header: string = ''; // Header for the modal
  @Input() content: string = ''; // HTML content to be displayed

  constructor(private modalController: ModalController) {}

  closeModal() {
    this.modalController.dismiss(); // Close the modal
  }
}
