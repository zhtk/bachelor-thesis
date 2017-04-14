import {Component, ComponentFactoryResolver, Injectable, Input, ViewChild, ViewContainerRef,} from '@angular/core'
import { FormClass } from '../FormComponents/FormClass'
import { FormsModule }   from '@angular/forms';
import {Container} from "../ComponentsCore/Interfaces/ContainerInterface";
import {ComponentCreator} from "../ComponentsCore/ComponentCreator";
import {FrontEndClass} from "../ComponentsCore/MainClasses/FrontEndClass";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {MenuService} from "../../menu-service";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Injectable()
@Component
({
  selector: 'icon',
  template: '<span [style.font-size] = "font_size" [ngClass]="class"></span>'
})
export class IconComponent extends FrontEndClass implements RenderFromJSON{

  class:string;
  font_size:string;
  constructor(private cfr: ComponentFactoryResolver, private peopleServicee : MenuService, private http: Http) {
    super();
    this.class = "glyphicon glyphicon-"

  }

  renderJSON(specification: any): void {
    if("class" in specification)
      this.class+= specification["class"];
    if("size" in specification)
    {
      switch(specification["size"])
      {
        case "small":
          this.font_size = "1em";
          break;
        case "medium":
          this.font_size = "2em";
          break;
        case "big":
          this.font_size = "3em";
          break;
      }
    }
  }



}
