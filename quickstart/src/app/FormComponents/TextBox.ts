import {Component, Input, } from '@angular/core'
import { FormComponent } from './FormComponent'
import { FormsModule }   from '@angular/forms';

@Component
({
  selector: 'textBox',
  templateUrl: 'pages/TextBoxComponent/TextBox.html'
})
export class TextBox extends FormComponent implements FEComponent
{

  maxLength:number;
  minLength:number;
  defaultText:string;
  text:string;
  regex:RegExp;
  visible:boolean;

  constructor ()
  {
    super();
    this.maxLength = 0;
    this.minLength = 0;
    this.defaultText = "DefaultText";
    this.text = "";
    this.regex = new RegExp("");
  }
  //Tutaj przyda się klasa autouzupelnienie
  //autoComplete:AutoComplete

  // Wołana po wpisnaiu znaku do pola
  textInput (a:string)
  {
    if(this.regex.test(this.text))
      this.backgroundColor = "rgba(0, 255, 0, 0.3)";
    else
      this.backgroundColor = "rgba(255, 0, 0, 0.3)";
  }

  renderJSON(parsed: any): void {

    if("id" in parsed)
      this.id = parsed["id"];
    else
      throw new Error('Error with JSON form.');

    if ("regex" in parsed)
      this.regex = new RegExp(parsed["regex"]);
    if ("maxLength" in parsed)
      this.maxLength = parsed["maxLength"];
    if ("minLength" in parsed)
      this.minLength = parsed["minLength"]
    if ("defaultText" in parsed)
      this.defaultText = parsed["defaultText"];
    if ("width" in parsed)
    {
      this.width = parsed["width"];
      this.grid_class += this.width.toString()
    }
    if("required" in parsed)
      this.required = parsed["required"];
    if("disabled" in parsed)
      this.disabled = parsed["disabled"];
    if("backgroundColor" in parsed)
      this.backgroundColor = parsed["backgroundColor"];
  }
}
