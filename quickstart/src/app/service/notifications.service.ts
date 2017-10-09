import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { MyHttp } from '../http.service';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NotificationsService {
	constructor(private http: Http) {}

	getNotificationPending(): Promise<number> {
		// pobierz z urla, np. /api/msg/sendbox?user=...
		return this.http.get('/api/read/notify-pending/')
			.toPromise()
			.then(res => res.json() as number)
			.catch(this.handleError);
	}

	getNotificationNegative(): Promise<number> {
		return this.http.get('/api/read/notify-negative/')
			.toPromise()
			.then(res => res.json() as number)
			.catch(this.handleError);
	}

	getNotificationPositive(): Promise<number> {
		return this.http.get('/api/read/notify-positive/')
			.toPromise()
			.then(res => res.json() as number)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}

}