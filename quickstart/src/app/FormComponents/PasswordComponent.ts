import { Component, Input, } from '@angular/core'
import { FormsModule }   from '@angular/forms';
import { TextBox } from './TextBox';

@Component({
  selector: 'password',
  templateUrl: 'pages/TextBoxComponent/password.html'
})
export class PasswordComponent extends TextBox
{
	constructor() {
		super();
		this.text = "95040100120";
	}
}
