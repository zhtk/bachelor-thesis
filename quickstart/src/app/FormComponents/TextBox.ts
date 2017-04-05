import {Component, Input, } from '@angular/core'
import { FormComponent } from './FormComponent'
import { FormsModule }   from '@angular/forms';

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
    this.defaultText = "DefaultText";
    this.text = "";
    this.regex = new RegExp("([0-9]{10})");
  }
  //Tutaj przyda się klasa autouzupelnienie
  //autoComplete:AutoComplete
  textInput (a:string)
  {

    if(this.regex.test(this.text))
      this.backgroundColor = "rgba(0, 255, 0, 0.3)";
    else
      this.backgroundColor = "rgba(255, 0, 0, 0.3)";
  }
}
