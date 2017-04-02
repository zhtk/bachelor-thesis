import { Injectable } from '@angular/core';
import { Message } from '../message';
import { INBOX_MESSAGES } from './mock-messages';

@Injectable()
export class MessagesService {
	getMessagesInbox(): Message[] {
		return INBOX_MESSAGES;
	}
}