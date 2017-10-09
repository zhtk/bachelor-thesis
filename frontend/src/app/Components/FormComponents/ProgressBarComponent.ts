import { Component, Input, } from '@angular/core'
import { FormClass } from './FormClass';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'labelcomp',
  template: `
  <div class="progress" style="margin: 10px;">
    <div class="progress-bar progress-bar-default"
    aria-valuemin="0" aria-valuemax="100" role="progressbar" [ngStyle]="{width: giveWidth() + '%'}"></div>
   </div>`
})
export class ProgressBarComponent extends FormClass
{

  type: string;
  backgroundColor: string;
  val: number;
  width: number;

  constructor ()
  {
    super();
    this.type = "";
    this.val = 0;
  }
 
  renderJSON(parsed: any): void {

    if("id" in parsed)
      this.id = parsed["id"];
    else
      throw new Error('Error with JSON form.');

    if ("type" in parsed)
      this.type = parsed["type"];
    else
      this.type = "default";

    if("width" in parsed)
      this.width = parsed["width"];

    if("backgroundColor" in parsed)
      this.backgroundColor = parsed["backgroundColor"];
  }

  giveWidth() {
    return (this.width / 8) * 100;
  }
}
