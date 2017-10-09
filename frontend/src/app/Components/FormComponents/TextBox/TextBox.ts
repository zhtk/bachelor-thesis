import { Component, Input } from '@angular/core'
import { FormClass } from '../FormClass'
import { FormsModule }   from '@angular/forms';
import { Attr, SetterAlg, ComponentsInfo, ComponentsRegister, Register } from "../../ComponentsRegister";
import { SizeProperties } from "../../ComponentsCore/MainClasses/SizeProperties";

@Component({
  selector: 'textBox',
  templateUrl: '../../../pages/Components/TextBoxComponents/TextBox.html'
})
export class TextBox extends FormClass implements RenderFromJSON
{
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
  @SetterAlg({field: 'regex', func: (ci: any, v: any) => {ci.regex = new RegExp(v)}})
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
  
  // metoda wołana po wpisnaiu znaku do pola
  textInputValidate (a:string)
  {
    if(this.text.length == 0) {
      this.backgroundColor = "rgba(0, 0, 0, 0)";
      return false;
    }

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
