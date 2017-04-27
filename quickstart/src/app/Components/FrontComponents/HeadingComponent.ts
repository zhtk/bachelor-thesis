import {Component, Input, Provider,} from '@angular/core'
import { FormClass } from '../FormComponents/FormClass'
import { FormsModule }   from '@angular/forms';
import {FrontEndClass} from "../ComponentsCore/MainClasses/FrontEndClass";
import {ProviderTypeEnum} from "../ComponentsCore/ProviderTypeEnum";
import {ComponentsRegister, Register, Attr} from "../ComponentsRegister";
import {Docs} from "../ComponentsCore/Interfaces/DescribeInterface";


@Component({
  selector: 'heading',
  template: `<h1 class="page-header">{{ text }}{{name}}</h1>`,
  providers:[ComponentsRegister]
})
@Register
(
  { name : "Heading",
    description : "Okno z górną belką i miejscem na zawartość",
    tag : "kontener"
  }
)
export class HeadingComponent extends FrontEndClass implements RenderFromJSON
{


  textType:ProviderTypeEnum;
  @Attr({info:"Tekst ssna górnej belce", default : "", name:""})
  text: string;
  backgroundColor: string;

  constructor (reg : ComponentsRegister )
  {
    super();
    this.text = "";
  }

  renderJSON(parsed: any): void {
    console.log( );
    if ("text" in parsed)
      this.text = parsed["text"];
    if("backgroundColor" in parsed)
      this.backgroundColor = parsed["backgroundColor"];
  }
}
