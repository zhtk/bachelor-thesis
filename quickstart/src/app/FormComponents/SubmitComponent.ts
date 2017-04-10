import { Component, Input, } from '@angular/core'
import { FormsModule }   from '@angular/forms';
import { TextBox } from './TextBox';
import {FormComponent} from "./FormComponent";

@Component({
  selector: 'submit',
  templateUrl: 'pages/submit.html'
})
export class SubmitComponent extends FormComponent
{
  title:string;
  constructor() {
    super();
    this.title = "Wyślij";
  }
  renderJSON(parsed: any): void {
    if("title" in parsed)
      this.title = parsed["title"];
    if ("width" in parsed)
    {
      this.width = parsed["width"];
      this.grid_class += this.width.toString()
    }
  }

}

