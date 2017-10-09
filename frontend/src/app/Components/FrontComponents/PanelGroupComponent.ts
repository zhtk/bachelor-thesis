import {Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef,} from '@angular/core'
import { FormClass } from '../FormComponents/FormClass'
import { FormsModule }   from '@angular/forms';
import {Container} from "../ComponentsCore/Interfaces/ContainerInterface";
import {ComponentCreator} from "../ComponentsCore/ComponentCreator";

@Component({
  selector: 'panelgroup',
  template: `<div class="panel-group"><template #target></template></div>`
})
export class PanelGroupComponent extends FormClass implements RenderFromJSON, Container
{

  text: string;
  backgroundColor: string;

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {
    super();
  }

  renderJSON(parsed: any): void {

    if("children" in parsed)
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
