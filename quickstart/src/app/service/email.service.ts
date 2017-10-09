import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Message } from '../message';
import { MessagesService } from './messages.service'

@Injectable()
export class EmailService {

	constructor(private messagesService: MessagesService) {}

	private currentMessage = new Subject<Message>();
	current$ = this.currentMessage.asObservable();

	setMessageWindowContent(m: Message) {
		this.currentMessage.next(m)
	}

	sendMessage(msg: Message) {
		this.messagesService.sendMessage(msg);
	}
}