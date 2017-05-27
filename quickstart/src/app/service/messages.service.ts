import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
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
		return this.http.get('/api/read/mail-rec/?token=user')
			.toPromise()
			.then(res => res.json() as Message[])
			.catch(this.handleError);
	}

	getMessagesSendbox(): Promise<Message[]> {
		// pobierz z urla, np. /api/msg/sendbox?user=...
		//return SENT_MESSAGES;
		return this.http.get('/api/read/mail-sent/?token=admin')
			.toPromise()
			.then(res => res.json() as Message[])
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

	sendMessage(msg: Message) {
		console.log(msg);

		var headers = new Headers();
		// headers.delete("Content-Type")
		headers.set("Content-Type", 'multipart/form-data')

		var requestOptions = new RequestOptions({
			//method: RequestMethod.Post,
			//url: '/api/write/mail-send/',
			headers: headers,
			//body: msg
		})

		//console.log(new Request(requestOptions))
		console.log("poszło")
		
		//return this.http.request(new Request(requestOptions))
		// this.http.post("/api/write/mail-send/", JSON.stringify(msg), requestOptions)
		this.http.post("/main", JSON.stringify(msg), requestOptions)
				.toPromise()
		 		.then(res => res.json())
		 		.catch(this.handleError);
	}
}