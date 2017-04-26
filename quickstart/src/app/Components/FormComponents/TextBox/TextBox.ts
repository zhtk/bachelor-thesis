import { Component, Input, } from '@angular/core'
import { FormClass } from '../FormClass'
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'textBox',
  templateUrl: '../../../pages/Components/TextBoxComponents/TextBox.html'
})
export class TextBox extends FormClass implements RenderFromJSON
{

  maxLength: number;
  minLength: number;
  defaultText: string;
  text: string;
  regex: RegExp;
  visible: boolean;
  backgroundColor: string;
  name:string;
  infoText: string;

  constructor ()
  {
    super();
    this.maxLength = 0;
    this.minLength = 0;
    this.defaultText = "DefaultText";
    this.text = "";
    this.regex = new RegExp("");
    this.name = "val";
    this.infoText = "";
  }
  //Tutaj przyda się klasa autouzupelnienie
  //autoComplete:AutoComplete

  // Wołana po wpisnaiu znaku do pola
  textInputValidate (a:string)
  {
    if(this.regex.test(this.text) && this.text.length > 0)
      this.backgroundColor = "rgba(0, 255, 0, 0.3)";
    else
      this.backgroundColor = "rgba(255, 0, 0, 0.3)";

    return (this.regex.test(this.text) && this.text.length > 0);
  }

  renderJSON(parsed: any): void {

    if ("id" in parsed) {

      this.id = parsed["id"];
      this.name = this.name + this.id;
     }
    else
      throw new Error('Error with JSON form.');

    if ("regex" in parsed)
      this.regex = new RegExp(parsed["regex"]);
    if ("maxLength" in parsed)
      this.maxLength = parsed["maxLength"];
    if ("minLength" in parsed)
      this.minLength = parsed["minLength"];
    if ("defaultText" in parsed)
      this.defaultText = parsed["defaultText"];
    if ("size" in parsed)
      this.setGridClass(parsed);
    if("required" in parsed)
      this.required = parsed["required"];
    if("disabled" in parsed)
      this.disabled = parsed["disabled"];
    if("infoText" in parsed)
      this.infoText = parsed["infoText"];
    if("backgroundColor" in parsed)
      this.backgroundColor = parsed["backgroundColor"];
  }
}
