import { Component } from '@angular/core'
import { TextBox } from './TextBox';

@Component({
  selector: 'disabledTextBox',
  templateUrl: 'pages/TextBoxComponent/unchangable.html'
})
export class DisabledTextBoxComponent
	extends TextBox
{
	constructor() {
		super();
	}
}