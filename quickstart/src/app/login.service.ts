import { Injectable } from '@angular/core';
import { MyHttp } from './http.service';

@Injectable()
export class LoginService {

	constructor (private http: MyHttp) {}

	checkIfAuth() {

	}
}