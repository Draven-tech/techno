import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage {
  messageThreads = [
    {
      id: 1,
      name: 'Coach Kenn',
      avatar: 'assets/avatar-kenn.png',
      lastMessage: 'Great work on the training today!',
      lastMessageTime: new Date(),
      messages: [
        { sender: 'Coach Kenn', content: 'Great work on the training today!', time: new Date() },
        { sender: 'You', content: 'Thank you, coach!', time: new Date() },
      ],
    },
    {
      id: 2,
      name: 'Coach Jean',
      avatar: 'assets/avatar-jean.png',
      lastMessage: 'Don’t forget to track your progress.',
      lastMessageTime: new Date(),
      messages: [
        { sender: 'Coach Jean', content: 'Don’t forget to track your progress.', time: new Date() },
        { sender: 'You', content: 'Will do, thanks!', time: new Date() },
      ],
    },
    {
      id: 3,
      name: 'Coach Alex',
      avatar: 'assets/avatar-alex.png',
      lastMessage: 'See you at the gym tomorrow!',
      lastMessageTime: new Date(),
      messages: [
        { sender: 'Coach Alex', content: 'See you at the gym tomorrow!', time: new Date() },
        { sender: 'You', content: 'Looking forward to it!', time: new Date() },
      ],
    },
  ];

  searchInput: string = '';
  filteredThreads = this.messageThreads;

  constructor(private navCtrl: NavController) {}

  openThread(thread: any) {
    this.navCtrl.navigateForward('/message-thread', {
      state: { thread },
    });
  }

  onSearch() {
    if (this.searchInput.trim().length < 3) {
      this.filteredThreads = this.messageThreads;
    } else {
      const lowerCaseInput = this.searchInput.toLowerCase();
      this.filteredThreads = this.messageThreads.filter(thread =>
        thread.name.toLowerCase().includes(lowerCaseInput)
      );
    }
  }
}
