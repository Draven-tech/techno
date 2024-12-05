import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

interface Message {
  sender: string;
  content: string;
  time: Date;
}

interface MessageThread {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: Date;
  messages: Message[];
}

@Component({
  selector: 'app-adminmessage',
  templateUrl: './adminmessage.page.html',
  styleUrls: ['./adminmessage.page.scss'],
})
export class AdminmessagePage implements OnInit {
  messageThreads: MessageThread[] = [];
  filteredThreads: MessageThread[] = [];
  searchInput: string = '';

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.messageThreads = [
      {
        id: 1,
        name: 'Customer',
        avatar: 'https://draven-tech.github.io/techno/assets/avatar-cust1.jpg',
        lastMessage: 'A mix of both would be ideal. Let’s push for balance.',
        lastMessageTime: new Date(),
        messages: [
          { sender: 'You', content: 'Great job today!', time: new Date() },
          { sender: 'Coach Kenn', content: 'Thanks! It was tough but worth it.', time: new Date() },
          { sender: 'You', content: 'Keep up the good work and stay consistent.', time: new Date() },
          { sender: 'Coach Kenn', content: 'I’ll do my best. Should I focus on cardio or weights tomorrow?', time: new Date() },
          { sender: 'You', content: 'A mix of both would be ideal. Let’s push for balance.', time: new Date() },
        ],
      },
    ];

    this.filteredThreads = this.messageThreads;
  }

  onSearch() {
    const input = this.searchInput.trim().toLowerCase();
    this.filteredThreads = input.length < 3
      ? this.messageThreads
      : this.messageThreads.filter(thread => thread.name.toLowerCase().includes(input));
  }

  openThread(thread: MessageThread) {
    this.navCtrl.navigateForward('/chatbox', { state: { thread } });
  }
}
