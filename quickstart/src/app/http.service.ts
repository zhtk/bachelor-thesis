import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MyHttp {
	constructor (private http: Http, private router: Router) {}

	get(url: string) {
		return this.http.get(url)
			.map(res => {
				// If request fails, throw an Error that will be caught
				if(res.status == 403) {
					this.router.navigateByUrl('/login');
				}
			});

	}
	post(url: string, body: any) {
		return this.http.post(url, body)
			.map(res => {
				// If request fails, throw an Error that will be caught
				if(res.status == 403) {
					this.router.navigateByUrl('/login');
				}
			});
	}

}