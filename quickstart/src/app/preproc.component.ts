import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, 
	RoutesRecognized, Event } from '@angular/router';
import { LoginService } from './login.service';

@Component({
	selector: 'preproc',
	//template: `` //`<router-outlet></router-outlet>`
	templateUrl: 'pages/mockup.html'
})
export class PreprocComponent implements OnInit {
	constructor(private router: Router, private loginService: LoginService) {}

	ngOnInit() {
		// jesli niezalogowany to przekieruj na /login
		// else na /menu
		var shouldLogin = false;
		shouldLogin = !this.loginService.checkIfAuth()

		if (shouldLogin) {
			this.router.navigateByUrl("/auth");
		}
		
	}
}
