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
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  messageThreads: MessageThread[] = [];
  filteredThreads: MessageThread[] = [];
  searchInput: string = '';

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.messageThreads = [
      {
        id: 1,
        name: 'Coach Kenn',
        avatar: 'https://draven-tech.github.io/techno/assets/avatar-kenn.png',
        lastMessage: 'A mix of both would be ideal. Let’s push for balance.',
        lastMessageTime: new Date(),
        messages: [
          { sender: 'Coach Kenn', content: 'Great job today!', time: new Date() },
          { sender: 'You', content: 'Thanks! It was tough but worth it.', time: new Date() },
          { sender: 'Coach Kenn', content: 'Keep up the good work and stay consistent.', time: new Date() },
          { sender: 'You', content: 'I’ll do my best. Should I focus on cardio or weights tomorrow?', time: new Date() },
          { sender: 'Coach Kenn', content: 'A mix of both would be ideal. Let’s push for balance.', time: new Date() },
        ],
      },
      {
        id: 2,
        name: 'Coach Jean',
        avatar: 'https://draven-tech.github.io/techno/assets/avatar-jean.png',
        lastMessage: 'You: Will do, thanks!',
        lastMessageTime: new Date(),
        messages: [
          { sender: 'Coach Jean', content: 'Don’t forget to track your progress.', time: new Date() },
          { sender: 'You', content: 'Will do, thanks!', time: new Date() },
        ],
      },
      {
        id: 3,
        name: 'Coach Zandale',
        avatar: 'https://draven-tech.github.io/techno/assets/avatar-zandale.png',
        lastMessage: '',
        lastMessageTime: new Date(),
        messages: [],
      },
      {
        id: 4,
        name: 'Coach Aaron',
        avatar: 'https://draven-tech.github.io/techno/assets/avatar-aaron.png',
        lastMessage: '',
        lastMessageTime: new Date(),
        messages: [],
      },
      {
        id: 5,
        name: 'Coach Jhon Paul',
        avatar: 'https://draven-tech.github.io/techno/assets/avatar-jp.png',
        lastMessage: '',
        lastMessageTime: new Date(),
        messages: [],
      },
      {
        id: 6,
        name: 'Coach Randolf',
        avatar: 'https://draven-tech.github.io/techno/assets/avatar-randolf.png',
        lastMessage: '',
        lastMessageTime: new Date(),
        messages: [],
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
