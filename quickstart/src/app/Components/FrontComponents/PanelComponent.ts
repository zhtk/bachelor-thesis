import {Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef,} from '@angular/core'
import { FormClass } from '../FormComponents/FormClass'
import { FormsModule }   from '@angular/forms';
import {Container} from "../ComponentsCore/Interfaces/ContainerInterface";
import {ComponentCreator} from "../ComponentsCore/ComponentCreator";
import {FrontEndClass} from "../ComponentsCore/MainClasses/FrontEndClass";

@Component
({
  selector: 'panelgroup',
  templateUrl: '../../pages/Components/Panel/panel.html'
})
export class PanelComponent extends FrontEndClass implements RenderFromJSON, Container {

  title:string;
  panel_class:string;
  collapsible:boolean;

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {
    super();
  }

  renderJSON(specification: any): void {
    //this.target.clear();
    this.panel_class = "panel panel-";
    this.grid_class = "col-lg-";

    if ("title" in specification)
      this.title = specification["title"];
    if ("panel_class" in specification)
      this.panel_class += specification["panel_class"];
    else
      this.panel_class += "default";
    if ("size" in specification)
      this.setGridClass(specification);
    if("children" in specification)
    // Stworz wszystkie komponenty i dodaj je w sobie
      this.renderChildren(specification["children"]);
    if("collapse" in specification)
      this.collapsible = specification["collapse"]
    else
      this.collapsible = false;
  }

  renderChildren(children: any): void {
    for(var child = 0; child < children.length; child++)
    {
      var added = ComponentCreator.insertComponent(this.cfr, this.target, children[child]["type"]);
      added.renderJSON(children[child]);
    }
  }

}

