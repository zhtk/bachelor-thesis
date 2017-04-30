import { Component, Input, } from '@angular/core'
import { FormClass } from '../FormClass'
import { FormsModule }   from '@angular/forms';
import { TextBox } from './TextBox';
import { SetterAlg } from "../../ComponentsRegister";
import { SizeProperties } from "../../ComponentsCore/MainClasses/SizeProperties";

@Component({
  selector: 'zipcode',
  templateUrl: '../../../pages/Components/TextBoxComponents/TextBox.html'
})
export class ZipcodeComponent
	extends TextBox
	//implements RenderFromJSON
{
	constructor() {
		super();
		this.regex = new RegExp("^[0-9]{2}-[0-9]{3}$");
		this.infoText = "Kod pocztowy";
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
