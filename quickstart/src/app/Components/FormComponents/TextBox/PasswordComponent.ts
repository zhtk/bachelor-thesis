import { Component, Input, } from '@angular/core'
import { FormsModule }   from '@angular/forms';
import { TextBox } from './TextBox';
import { SetterAlg } from "../../ComponentsRegister";
import { SizeProperties } from "../../ComponentsCore/MainClasses/SizeProperties";

@Component({
  selector: 'password',
  templateUrl: '../../../pages/Components/TextBoxComponents/password.html'
})
export class PasswordComponent extends TextBox
{
	constructor() {
		super();
		this.text = "95040100120";
	}

	@SetterAlg()
	id: string;
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
