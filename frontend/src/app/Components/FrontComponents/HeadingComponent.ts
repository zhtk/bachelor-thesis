import {Component, Input, Provider,} from '@angular/core'
import { FormClass } from '../FormComponents/FormClass'
import { FormsModule }   from '@angular/forms';
import {FrontEndClass} from "../ComponentsCore/MainClasses/FrontEndClass";
import {ProviderTypeEnum} from "../ComponentsCore/ProviderTypeEnum";
import {Attr, SetterAlg, ComponentsInfo, ComponentsRegister, Register} from "../ComponentsRegister";
import {Docs} from "../ComponentsCore/Interfaces/DescribeInterface";


@Component({
  selector: 'heading',
  template: `<h1 class="page-header">{{ text }}{{name}}</h1>`,
  providers:[ComponentsRegister]
})
export class HeadingComponent extends FrontEndClass implements RenderFromJSON
{

  textType:ProviderTypeEnum;
  @Attr({info:"Tekst na górnej belce", default : "", name:""})
  @SetterAlg()
  text: string;
  backgroundColor: string;

  constructor (reg : ComponentsRegister )
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
