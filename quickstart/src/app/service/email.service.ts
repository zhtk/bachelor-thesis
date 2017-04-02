import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Message } from '../message';

@Injectable()
export class EmailService {
	private currentMessage = new Subject<Message>();
	current$ = this.currentMessage.asObservable();

	setMessageWindowContent(m: Message) {
		this.currentMessage.next(m)
	}
}