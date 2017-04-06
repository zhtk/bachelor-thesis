import {Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef,} from '@angular/core'
import { FormComponent } from './FormComponent'
import { FormsModule }   from '@angular/forms';
import {Container} from "./Container";
import {ComponentCreator} from "./ComponentCreator";

@Component
({
  selector: 'panelgroup',
  templateUrl: 'pages/PanelGroup/panelGroup.html'
})
export class PanelGroupComponent implements FEComponent, Container {

  visible: boolean;
  title:string;
  panel_class:string;
  width:number;
  grid_class:string;

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {

  }

  renderJSON(specification: any): void {
    //this.target.clear();
    this.panel_class = "panel panel-";
    this.grid_class = "col-lg-";

    if ("title" in specification)
      this.title = specification["title"];
    if ("panel_class" in specification)
      this.panel_class += specification["panel_class"];
    if ("width" in specification)
    {
      this.width = specification["width"];
      this.grid_class += this.width.toString()
    }
    if("children" in specification)
    {// Stworz wszystkie komponenty i dodaj je w sobie
      this.renderChildren(specification["children"]);
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

