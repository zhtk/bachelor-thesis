import { Injectable }              from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class MenuService {

	test : string;

	constructor (private http: Http) {}

  getAll(): Observable<string>{
    let people$ = this.http
      .get("/api/view/abc", {headers: this.getHeaders()})
      .map(mapPersons);
    return people$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}
function mapPersons(response:Response): string{
  return response.toString()
}
