import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MyHttp } from './http.service';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';

@Injectable()
export class LoginService {

	constructor (private http: Http, private router: Router) {}

	checkIfAuth() {
		console.log("chwila prawdy")
		// this.http.get('/api/auth_check')
		if (!localStorage.getItem('token')) {
			// this.handleRejection({status: 403})
			return false;
		}
		return true;
		
	}

	private handleRejection(error: any) {
		if (error.status == 403) {
			console.log("czterstatrójka")

			if (window.location.href != "/auth")
				window.location.href = "/auth";
			// this.router.navigateByUrl("/auth");
			console.log("ROUTUJMY")
		}
		
		//return this.handleError(error);
		
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

	private respond(res: any) {
		console.log("FANFARY")
		if (res.status == 403) {
			window.location.href = "/auth";
		}
		else if (res.status == 200) {
			console.log("zalogowano mnie, zaraz wezme token")
			return true;
		}
		else {
			console.log("błąd " + res.status);
			throw "INNY BŁĄD";
			
		}
		
	}

	authenticate(form: any) {
		const formData = new FormData();
		console.log("oto co przyszlo")
		console.log(form)
	    formData.append('login', form.username);
	    formData.append('password', form.password);

	    let headers = new Headers({});
	    let options = new RequestOptions({ headers });
	    let resValue: any;

	    var urlSP = new URLSearchParams();
		urlSP.set('login', form.username);
		urlSP.set('password', form.password);

		this.http.get("/login", {search: urlSP})
			.toPromise()
			.then(res => resValue = res)
			.then(() => localStorage.setItem('token', resValue._body))
			.then(() => window.location.href = "/")
			.catch(() => alert("BŁĄD LOGOWANIA"))
			
	}

	logout() {
		var urlSP = new URLSearchParams();
		urlSP.set('token', localStorage.getItem('token'));

		this.http.get("/logout", {search: urlSP})
			.toPromise()
			.then(() => localStorage.removeItem('token'))
			.then(() => window.location.href = "/")
	}
	
}