import { Injectable } from '@angular/core';
import { Message } from '../message';
import { MESSAGES } from './mock-messages';

@Injectable()
export class MessagesService {
	getMessagesInbox(): Message[] {
		return MESSAGES;
	}
}