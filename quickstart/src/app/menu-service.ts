import { Injectable }              from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class MenuService {

	/*test : string;
	
	constructor (private http: Http) {}

	getAll(): Observable<string>{
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		// Kurwa, to nie działa!
		//let people$ = this.http
		//.get("http://207.154.212.228:9000/menu",{headers: headers, method : 'get'})
		//.map(proba); // -> HttpPromise
		let people$ = JSON.parse('{"start":"/read/abc","menu":[{"nr":"0","name":"Albo tutaj","icon":"","link":"/view/abc","menu":[]},{"nr":"0","name":"Kliknij tutaj","icon":"","link":"/read/abc","menu":[{"nr":"0","name":"To jest w submenu","icon":"","link":"/read/abc","menu":[]},{"nr":"0","name":"To też","icon":"","link":"/read/abc","menu":[]}]}]}');
		return people$;
	}
*/
}

function proba(response:Response): string {
   return response.json();
}
