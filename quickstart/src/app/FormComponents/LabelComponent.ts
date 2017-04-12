import { Component, Input, } from '@angular/core'
import { FormComponent } from './FormComponent'
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'labelcomp',
  template: `<h3 style="margin: 15px;">{{ text }}</h3>`
})
export class LabelComponent extends FormComponent
{

  text: string;
  backgroundColor: string;

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
