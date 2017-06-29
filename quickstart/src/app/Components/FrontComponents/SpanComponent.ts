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
  selector: 'spancomponent',
  template: '{{ text }}'
})
export class SpanComponent extends FrontEndClass{

  url:string;
  text:string;

  constructor(private http: Http) {
    super();
    this.text = "";
  }

  create_static(text:string) {
    this.text = text;
  }
  create_dynamic(provider_type:string, time:number, url:string, text:string) {
    this.url = url;
    if(provider_type == "periodic")
    {// Sciagaj w odstepach czasu
      let timer = TimerObservable.create(0, time);
      timer.subscribe(t => this.start());
    }
    else
    {// Sciagnij tylko raz
      this.start();
    }
  }

  start(){
    this.http.get(this.url).map(res => res.text())
      .subscribe(p => this.text = p)
  }


}
