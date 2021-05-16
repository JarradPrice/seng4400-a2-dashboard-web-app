import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MessageService } from './message.service';
import { MessagesComponent } from '../messages/messages/message.component';
import { MessageListComponent } from '../messages/message-list/message-list.component'

const routes: Routes = [
    {
      path: '',
      component: MessagesComponent,
    },
  ];
  
  @NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(routes), 
        SharedModule
    ],
    exports: [RouterModule, MessagesComponent],
    declarations: [
      MessagesComponent,
      MessageListComponent,
      //MessageDetailComponent,
    ],
    providers: [MessageService]
  })
  export class MessagesModule {}