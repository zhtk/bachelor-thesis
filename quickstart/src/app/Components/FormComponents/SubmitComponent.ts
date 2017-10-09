import { Component, Input, } from '@angular/core'
import { FormsModule }   from '@angular/forms';
import { TextBox } from './TextBox/TextBox';
import {FormClass} from "./FormClass";
import { SetterAlg } from "../ComponentsRegister";

@Component({
  selector: 'submit',
  templateUrl: 'pages/submit.html'
})
export class SubmitComponent extends FormClass
{
  @SetterAlg()
  title: string;
  @SetterAlg()
  width: string;

  constructor() {
    super();
    this.title = "Wyślij";
  }
  renderJSON(parsed: any): void {
    if("title" in parsed)
      this.title = parsed["title"];
    if ("width" in parsed)
     this.setGridClass(parsed);
  }

}

