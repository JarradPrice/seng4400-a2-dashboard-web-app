import {
    Component,
    EventEmitter,
    Input,
    Output,
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
  @Output() deleted = new EventEmitter<Message>();
  @Output() selected = new EventEmitter<Message>();

  trackByMessage(index: number, message: Message): number {
    return message.id;
  }

  selectMessage(message: Message) {
    this.selected.emit(message);
  }

  deleteMessage(message: Message) {
    this.deleted.emit(message);
  }
}