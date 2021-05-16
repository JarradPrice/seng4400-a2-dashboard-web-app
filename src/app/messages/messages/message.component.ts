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
    selected: Message;
    messages$: Observable<Message[]>;
    message = '?';
    messageToDelete: Message;
    showModal = false;
  
    constructor(private messageService: MessageService) {
      this.messages$ = messageService.entities$;
    }
  
    ngOnInit() {
      this.getMessages();
    }
  
    add(message: Message) {
      this.messageService.add(message);
    }
  
    askToDelete(message: Message) {
      this.messageToDelete = message;
      this.showModal = true;
      if (this.messageToDelete.name) {
        this.message = `Would you like to delete ${this.messageToDelete.name}?`;
      }
    }
  
    clear() {
      this.selected = null;
    }
  
    closeModal() {
      this.showModal = false;
    }
  
    deleteMessage() {
      this.closeModal();
      if (this.messageToDelete) {
        this.messageService
          .delete(this.messageToDelete.id)
          .subscribe(() => (this.messageToDelete = null));
      }
      this.clear();
    }
  
    enableAddMode() {
      this.selected = <any>{};
    }
  
    getMessages() {
      this.messageService.getAll();
      this.clear();
    }
  
    save(message: Message) {
      if (this.selected && this.selected.name) {
        this.update(message);
      } else {
        this.add(message);
      }
    }
  
    select(message: Message) {
      this.selected = message;
    }
  
    update(message: Message) {
      this.messageService.update(message);
    }
}

