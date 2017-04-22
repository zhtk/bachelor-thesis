import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from './login.service';

@Component({
	selector: 'login',
	//template: ``,
	templateUrl: 'pages/login.html',
})

export class LoginComponent implements OnInit {

	//constructor (private loginService: LoginService) {}

	ngOnInit() {
	//	this.loginService.checkIfAuth();
	}

}
