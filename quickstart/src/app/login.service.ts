import { Injectable } from '@angular/core';
import { MyHttp } from './http.service';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Injectable()
export class LoginService {

	constructor (private http: Http) {}

	checkIfAuth() {
		console.log("chwila prawdy")
		// this.http.get('/api/auth_check')
		this.http.get('/auth_check')
			// .map(this.respond)
			// .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

	private respond(res: Response) {
		console.log("FANFARY")
		if (res.status == 403) {
			window.location.href = "/auth";
		}
		else if (res.status == 200) {
			return true;
		}
		else {
			console.log("błąd " + res.status);
			throw "INNY BŁĄD";
			
		}
		
	}
}