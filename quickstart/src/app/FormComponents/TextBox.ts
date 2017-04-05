import {Component, Input} from '@angular/core'
import { FormComponent } from './FormComponent'

@Component
({
  selector: 'textBox',
  templateUrl: 'pages/TextBoxComponent/TextBox.html'
})
export class TextBox extends FormComponent
{
  maxLength:number;
  minLength:number;
  defaultText:string;
  text:string;
  regex:RegExp;

  constructor ()
  {
    super();
    this.maxLength = 0;
    this.minLength = 0;
    this.defaultText = "";
    this.text = "";
    this.regex = new RegExp("");
  }
  //Tutaj przyda się klasa autouzupelnienie
  //autoComplete:AutoComplete
}
