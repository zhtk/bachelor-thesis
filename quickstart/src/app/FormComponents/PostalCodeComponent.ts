import { Component, Input, } from '@angular/core'
import { FormComponent } from './FormComponent'
import { FormsModule }   from '@angular/forms';
import { TextBox } from './TextBox';

@Component({
  selector: 'zipcode',
  templateUrl: 'pages/TextBoxComponent/TextBox.html'
})
export class ZipcodeComponent
	extends TextBox
	//implements FEComponent
{
	constructor() {
		super();
		this.regex = new RegExp("^[0-9]{2}-[0-9]{3}$");
	}
}