import {
  Component, Input, OnInit, ViewChildren, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver,
  QueryList, ElementRef, TemplateRef
} from '@angular/core'
import { FormClass } from '../FormComponents/FormClass'
import { FormsModule }   from '@angular/forms';
import {TextBox} from "../FormComponents/TextBox/TextBox";
import {Type} from "typescript";
import {ViewContainer} from "@angular/core/src/linker/view_container";
import {ComponentCreator} from "../ComponentsCore/ComponentCreator";
import {Container} from "../ComponentsCore/Interfaces/ContainerInterface";
import {Register} from "../ComponentsRegister";
import { SetterAlg } from "../ComponentsRegister";

@Component
({
  selector: 'repeat',
  template: '<div *ngFor="let nr of numbers"><template #target></template></div>'
})
@Register
(
  {
    name : "Repeatable",
    description : "Pozwala wyświetlić 1.. razy swoją zawartość",
    tag : "kontener"
  }
)
export class RepeatableComponent implements RenderFromJSON, OnInit, Container{

  @SetterAlg()
  id:number;
  parsed:any;

  visible:boolean;
  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  @SetterAlg()
  adderText: string;

  private numbers : number[] = [1, 2];

  constructor(private cfr: ComponentFactoryResolver) {
    this.adderText = "Dodaj";
    this.numbers = [1, 2];
  }

  ngOnInit(): void {}

  renderJSON(specification: any): void {
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
