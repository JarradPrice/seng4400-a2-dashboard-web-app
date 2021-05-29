import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Message } from '../../core'
import { MessageService } from '../message.service'

@Component({
    selector: "router-outlet",
    templateUrl: './messages.component.html',
    styleUrls: ['../../app.component.css']
})

export class MessagesComponent implements OnInit {
    messages$: Observable<Message[]>;
    message = '?';

    // for refresh every x seconds
    intervalId: number;
  
    constructor(private messageService: MessageService) {
      this.messages$ = messageService.entities$;
    }
  
    ngOnInit() {
      this.getMessages();
      // refresh message list every x seconds
      this.intervalId = setInterval(() => this.getMessages(), 1000);
    }
  
    getMessages() {
      this.messageService.getAll();
    }

    ngOnDestroy() {
      clearInterval(this.intervalId);
    }
}

