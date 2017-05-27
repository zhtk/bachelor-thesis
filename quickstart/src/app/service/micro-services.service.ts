import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { MsTile } from '../mstile';
import { INBOX_MESSAGES, SENT_MESSAGES } from './mock-messages';
import { MyHttp } from '../http.service';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class MicroServicesService {
	constructor(private http: Http) {}

	getGrid(): Promise<MsTile[]> {
		return this.http.get('/get_grid')
			.toPromise()
			.then(res => res.json() as MsTile[])
			.catch(this.handleError);
	}

	getFormJSON(serviceName: string): Promise<Object> {

		var headers = new Headers();
		headers.append('service_name', serviceName);

		return this.http.get('/getJSON', { headers: headers })
			.toPromise()
			.then(res => res.json())
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}