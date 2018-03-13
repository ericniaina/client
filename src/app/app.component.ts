import { Component, ViewChild, ElementRef } from '@angular/core';
import { GameMessageService } from './services/game-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('messageInput') messageInputRef: ElementRef;
  title = 'app';
  messages = [];

  constructor(private messageService:GameMessageService) {
    this.messageService.messageUpdated.subscribe(
      (message:string) => this.messages.push(message)
    );
  }
}
