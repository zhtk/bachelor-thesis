import {Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef,} from '@angular/core'
import { FormsModule }   from '@angular/forms';
import { TextBox } from './TextBox';
import {FormComponent} from "./FormComponent";
import {Container} from "./Container";
import {ComponentCreator} from "./ComponentCreator";

@Component({
  selector: 'formular',
  template: `<form (ngSubmit)="alert()" [ngClass] = "grid_class" action = "{{action}}" method = "{{method}}" >
                <template #target></template>
            </form>`
})
export class FormularComponent extends FormComponent implements Container
{

  title:string;
  action:string;
  method:string;
  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {

    super();
    this.grid_class = "col-lg-12";
    this.action = "";
    this.method = "get";
  }
  renderJSON(parsed: any): void {
    if("action" in parsed)
      this.action = parsed["action"];

    if("method" in parsed)
      this.method = parsed["method"];
    if("children" in parsed)
    {// Stworz wszystkie komponenty i dodaj je w sobie
      this.renderChildren(parsed["children"]);
    }
  }

  renderChildren(children: any): void {
    for(var child = 0; child < children.length; child++)
    {
      var added = ComponentCreator.insertComponent(this.cfr, this.target, children[child]["type"]);
      added.renderJSON(children[child]);
    }
  }
}


