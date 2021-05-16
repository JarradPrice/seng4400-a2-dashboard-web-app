import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

import { Message } from '../core';

@Injectable({ providedIn: 'root' })
export class MessageService extends EntityCollectionServiceBase<Message> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Message', serviceElementsFactory);
  }
}