import { Component, Input, } from '@angular/core'
import { FormClass } from '../FormComponents/FormClass'
import { FormsModule }   from '@angular/forms';
import {FrontEndClass} from "../ComponentsCore/MainClasses/FrontEndClass";

@Component({
  selector: 'heading',
  template: `<h1 class="page-header">{{ text }}</h1>`
})
export class HeadingComponent extends FrontEndClass implements RenderFromJSON
{
  textType:TextTypeEnum;
  text: string;
  backgroundColor: string;

  constructor ()
  {
    super();
    this.text = "";
  }

  renderJSON(parsed: any): void {
    if ("text" in parsed)
      this.text = parsed["text"];
    if("backgroundColor" in parsed)
      this.backgroundColor = parsed["backgroundColor"];
  }
}
