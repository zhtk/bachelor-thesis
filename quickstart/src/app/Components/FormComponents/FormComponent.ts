import {Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef,} from '@angular/core'
import { FormsModule }   from '@angular/forms';
import { TextBox } from './TextBox/TextBox';
import {FormClass} from "./FormClass";
import {Container} from "../ComponentsCore/Interfaces/ContainerInterface";
import {ComponentCreator} from "../ComponentsCore/ComponentCreator";

@Component({
  selector: 'formular',
  template: `<form ngNoForm (ngSubmit)="alert()" [ngClass] = "grid_class" action = "{{action}}" method = "{{method}}" id = "{{id}}">
                <fieldset>
                    <template #target></template>
                    <input type="submit" />
                </fieldset>
            </form>
            `
})
export class FormComponent extends FormClass implements Container
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
    if("id" in parsed)
      this.id = parsed["id"];
    else
      throw new Error('Error with JSON form.');

    if("method" in parsed)
      this.method = parsed["method"];
    if("children" in parsed)
    // Stworz wszystkie komponenty i dodaj je w sobie
      this.renderChildren(parsed["children"]);

  }

  renderChildren(children: any): void {
    for(var child = 0; child < children.length; child++)
    {
      var added = ComponentCreator.insertComponent(this.cfr, this.target, children[child]["type"]);
      added.renderJSON(children[child]);
    }
  }
}


