import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import { Message } from '../message';
import { INBOX_MESSAGES, SENT_MESSAGES } from './mock-messages';
import { MyHttp } from '../http.service';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class MessagesService {
	constructor(private http: Http) {}

	getMessagesInbox(): Promise<Message[]> {
		var urlSP = new URLSearchParams();
		urlSP.set('token', localStorage.getItem('token'));

		return this.http.get('/api/read/mail-rec/', {search: urlSP})
			.toPromise()
			.then(res => res.json() as Message[])
			.catch(this.handleError);
	}

	getMessagesSendbox(): Promise<Message[]> {
		// pobierz z urla, np. /api/msg/sendbox?user=...
		//return SENT_MESSAGES;
		var urlSP = new URLSearchParams();
		urlSP.set('token', localStorage.getItem('token'))

		return this.http.get('/api/read/mail-sent/', {search: urlSP})
			.toPromise()
			.then(res => res.json() as Message[])
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}

	sendMessage(msg: Message) {
		console.log(msg);

		const formData = new FormData();

		formData.append('id', msg.id);
		formData.append('topic', msg.topic);
		formData.append('content', msg.content);
		formData.append('date', msg.date);
		formData.append('from', localStorage.getItem('token'));
		formData.append('to', msg.toWho);


		let headers = new Headers({});
		let options = new RequestOptions({ headers });

		this.http.post('/api/write/mail-send/', formData, options)
		    .toPromise()
		    .catch(this.handleError)
	}
}