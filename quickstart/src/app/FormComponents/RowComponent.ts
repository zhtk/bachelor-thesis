import {
  Component, Input, OnInit, ViewChildren, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver,
  QueryList, ElementRef, TemplateRef
} from '@angular/core'
import { FormComponent } from './FormComponent'
import { FormsModule }   from '@angular/forms';
import {TextBox} from "./TextBox";
import {Type} from "typescript";
import {ViewContainer} from "@angular/core/src/linker/view_container";
import {ComponentCreator} from "./ComponentCreator";
import {Container} from "./Container";

@Component
({
  selector: 'row',
  template: '<div class="row"><template #target></template></div>'
 ,
})
export class RowComponent implements FEComponent, OnInit, Container{

  id:number;
  parsed:any;

  visible:boolean;
  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {
  }


  ngOnInit(): void {
  }

  renderJSON(specification: any): void {
    //this.target.clear();
    if("id" in specification)
      this.id = specification["id"];

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
