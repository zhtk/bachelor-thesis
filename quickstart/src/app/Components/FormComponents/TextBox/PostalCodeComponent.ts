import { Component, Input, } from '@angular/core'
import { FormClass } from '../FormClass'
import { FormsModule }   from '@angular/forms';
import { TextBox } from './TextBox';

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
}
