import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocationProviderService {
	private currentPath = new Subject<string>();
	current$ = this.currentPath.asObservable();

	setWindowLocationPath(s: string) {
		// console.log("zmienil sie path na " + s);
		this.currentPath.next(s);
	}
}