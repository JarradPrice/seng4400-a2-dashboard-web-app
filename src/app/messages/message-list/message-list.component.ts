import {
    Component,
    Input,
    ChangeDetectionStrategy,
  } from '@angular/core';
  
import { Message } from '../../core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['../../app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MessageListComponent {
  @Input() messages: Message[];

  trackByMessage(index: number, message: Message): number {
    return message.id;
  }
}