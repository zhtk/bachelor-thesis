import { Component, Input, } from '@angular/core'
import { FormClass } from '../FormClass'
import { FormsModule }   from '@angular/forms';
import { TextBox } from './TextBox';

@Component({
  selector: 'pesel',
  templateUrl: '../../../pages/Components/TextBoxComponents/TextBox.html'
})
export class PeselComponent extends TextBox
{
	constructor() {
		super();
		//this.text = "95040100120";
		this.defaultText = "PESEL";
		this.infoText = "PESEL";
		this.regex = new RegExp("^[0-9]{11}$");
		this.textInputValidate(this.text);
	}

	textInputValidate(a: string) {
		if (super.textInputValidate(a)) {
			if (!this.validate()) {
				this.backgroundColor = "rgba(255, 0, 0, 0.3)";
			}
		}
		return true;
	}

	validate(): Boolean {
		var parsedPesel = Array<number>();
		for (var i = 0; i < this.text.length; ++i) {
			parsedPesel[i] = parseInt(this.text[i]);
		}
		var controlSum =
			9 * parsedPesel[0] +
			7 * parsedPesel[1] +
			3 * parsedPesel[2] +
			1 * parsedPesel[3] +
			9 * parsedPesel[4] +
			7 * parsedPesel[5] +
			3 * parsedPesel[6] +
			1 * parsedPesel[7] +
			9 * parsedPesel[8] +
			7 * parsedPesel[9]

		return (controlSum % 10 == parsedPesel[10]);
	}
}
