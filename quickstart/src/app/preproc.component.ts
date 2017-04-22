import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, 
	RoutesRecognized, Event } from '@angular/router';

@Component({
  selector: 'preproc',
  //template: `` //`<router-outlet></router-outlet>`
  templateUrl: 'pages/mockup.html'
})
export class PreprocComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {
		// jesli niezalogowany to przekieruj na /login
		// else na /menu
		var shouldLogin = false;

		if (shouldLogin) {
			this.router.navigateByUrl("/auth");
		}
		
	}
}
