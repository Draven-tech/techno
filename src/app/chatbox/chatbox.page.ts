import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.page.html',
  styleUrls: ['./chatbox.page.scss'],
})
export class ChatboxPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content!: IonContent;

  thread: any = null; // The thread data (conversation)
  newMessage: string = ''; // For input box data

  constructor(private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state && navigation.extras.state['thread']) {
      this.thread = navigation.extras.state['thread'];
    } else {
      console.warn('No thread data found in navigation state.');
    }
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      // Add the new message to the conversation
      this.thread.messages.push({
        sender: 'You',
        content: this.newMessage.trim(),
        time: new Date(),
      });
      this.newMessage = ''; // Clear the input box
      setTimeout(() => this.scrollToBottom(), 100); // Scroll to bottom
    }
  }

  scrollToBottom() {
    this.content.scrollToBottom(300); // Smooth scroll to bottom
  }
}