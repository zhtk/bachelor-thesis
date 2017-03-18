import { Injectable }              from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class MenuService {

    test : string;
    constructor (private http: Http) {}
    
   /* getAll(): Observable<string>{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let people$ = this.http
        .get("http://207.154.212.228:9000/menu",{headers: headers, method : 'get'})
        .map(proba);
        return people$;
  }*/
                     
  }

  function proba(response:Response): string{
   return response.json();
}