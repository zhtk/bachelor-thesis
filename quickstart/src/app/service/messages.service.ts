import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Message } from '../message';
import { INBOX_MESSAGES, SENT_MESSAGES } from './mock-messages';
import { MyHttp } from '../http.service';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class MessagesService {
	constructor(private http: Http) {}

	getMessagesInbox(): Promise<Message[]> {
		// return this.http.get('/msgget') // url wlasciwy dla inboxa
		// 	.toPromise()
		// 	.then(res => res.json() as Message[])
		// 	.catch(this.handleError);

		return Promise.resolve(INBOX_MESSAGES);
	}

	getMessagesSendbox(): Promise<Message[]> {
		// pobierz z urla, np. /api/msg/sendbox?user=...
		//return SENT_MESSAGES;
		return this.http.get('/msgget')
			.toPromise()
			.then(res => res.json() as Message[])
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

	sendMessage(msg: Message) {
		//this.http.post("/api/msg/send?...");
	}
}