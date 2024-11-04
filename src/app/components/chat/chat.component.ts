import { Component, OnInit  } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { ChatService } from './../../services/chat.service';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  message = '';
  socket!: WebSocketSubject<any>;
  messages: any[] | undefined;
  username!: string;
  constructor(private service: ChatService, private userService: UserService) { }
  ngOnInit() {
    this.socket = new WebSocketSubject('ws://localhost:8000/ws');
    this.socket.subscribe((message) => {
      console.log(message);
    },
    (error) => {
      console.error('Ошибка WebSocket:', error);
    },
    () => {
      console.log('Соединение WebSocket закрыто');
    });

    this.service.getMessages().subscribe((response: any) => {
      this.messages = response;
    }, (error: any) => {
      console.error(error);
    });
    this.username = this.userService.getUsername();
  }

  send() {
    this.socket.next(this.message);
    this.message = '';

    this.service.getMessages().subscribe((response: any) => {
      this.messages = response;
    }, (error: any) => {
      console.error(error);
    });
  }



}


