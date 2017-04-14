import {Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef,} from '@angular/core'
import { FormClass } from '../FormComponents/FormClass'
import { FormsModule }   from '@angular/forms';
import {Container} from "../ComponentsCore/Interfaces/ContainerInterface";
import {ComponentCreator} from "../ComponentsCore/ComponentCreator";
import {FrontEndClass} from "../ComponentsCore/MainClasses/FrontEndClass";

@Component
({
  selector: 'content',
  templateUrl: '<template #target></template>'
})
export class ContentComponent extends FrontEndClass implements RenderFromJSON{

  text:string;

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {
    super();
  }

  renderJSON(specification: any): void {

    this.grid_class = "col-lg-";
    this.visible = true;

    if ("size" in specification)
      this.setGridClass(specification);
  }


}
