import { Component, Input, } from '@angular/core'
import { FormClass } from '../FormClass'
import { FormsModule }   from '@angular/forms';
import { TextBox } from './TextBox';
import { SetterAlg } from "../../ComponentsRegister";
import { SizeProperties } from "../../ComponentsCore/MainClasses/SizeProperties";

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
		if(a.length == 0) {
			this.backgroundColor = "rgba(0, 0, 0, 0)";
			return true;
		}
		if (super.textInputValidate(a)) {
			if (!this.validate()) {
				this.backgroundColor = "rgba(255, 0, 0, 0.3)";
			}
			else {
				this.backgroundColor = "rgba(0, 0, 0, 0)";
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

	@SetterAlg()
	id: number;
	@SetterAlg()
	maxLength: number;
	@SetterAlg()
	minLength: number;
	@SetterAlg()
	defaultText: string;
	@SetterAlg()
	text: string;
	@SetterAlg()
	regex: RegExp;
	@SetterAlg()
	visible: boolean;
	@SetterAlg()
	backgroundColor: string;
	@SetterAlg()
	name:string;
	@SetterAlg()
	infoText: string;
	@SetterAlg()
	disabled: boolean;
	@SetterAlg()
	required: boolean;

	@SetterAlg({field: "size", func: (ci: TextBox, v: any) => {ci.setGridClass({"size": v})}})
	size: SizeProperties;
}
