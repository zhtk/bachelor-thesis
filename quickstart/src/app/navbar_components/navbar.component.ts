import { Component } from '@angular/core';
import {PanelComponent} from "../Components/FrontComponents/PanelComponent";
import {RowComponent} from "../Components/FrontComponents/RowComponent";
import {IconComponent} from "../Components/FrontComponents/IconComponent";
import { LoginService } from '../login.service';

@Component({
  selector: 'navbar',
  templateUrl: 'pages/navbar.html',
})
export class NavbarComponent  {
	constructor(private loginService: LoginService) {}

	logout() {
		this.loginService.logout();
	}
}
