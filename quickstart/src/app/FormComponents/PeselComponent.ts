import { Component, Input, } from '@angular/core'
import { FormComponent } from './FormComponent'
import { FormsModule }   from '@angular/forms';
import { TextBox } from './TextBox';

@Component({
  selector: 'textBox',
  templateUrl: 'pages/TextBoxComponent/TextBox.html'
})
export class PeselComponent
	extends TextBox
	//implements FEComponent
{
	constructor() {
		super();
		this.text="94112900120"
		this.regex = new RegExp("/^[0-9]{11}$/g");
		this.validate();
	}

	validate(): Boolean {
		var parsedPesel = Array<string>(this.text).forEach(el => parseInt(el));
		console.log(parsedPesel);
		return (
			true
			);
	}
}