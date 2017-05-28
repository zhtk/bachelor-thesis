import { Component, Input, } from '@angular/core'
import { FormClass } from '../FormComponents/FormClass'
import { FormsModule }   from '@angular/forms';
import { SetterAlg } from "../ComponentsRegister";
import { SizeProperties } from "../ComponentsCore/MainClasses/SizeProperties";

@Component({
  selector: 'labelcomp',
  template: `<h5 style="margin: 15px;">{{ text }}</h5>`
})
export class LabelComponent extends FormClass implements RenderFromJSON {

  @SetterAlg()
  id: string
  @SetterAlg()
  text: string;
  @SetterAlg()
  backgroundColor: string;
  // @SetterAlg()
  // id: number;

  @SetterAlg({field: "size", func: (ci: LabelComponent, v: any) => {ci.setGridClass({"size": v})}})
  size: SizeProperties;

  constructor ()
  {
    super();
    this.text = "";
  }
 
  renderJSON(parsed: any): void {

    if("id" in parsed)
      this.id = parsed["id"];
    else
      throw new Error('Error with JSON form.');

    if ("text" in parsed)
      this.text = parsed["text"];
    if("backgroundColor" in parsed)
      this.backgroundColor = parsed["backgroundColor"];
  }
}
