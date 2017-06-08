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
import {ProviderTypeEnum} from "../ComponentsCore/ProviderTypeEnum";
import {Attr, SetterAlg, ComponentsInfo, ComponentsRegister, Register} from "../ComponentsRegister";

@Injectable()
@Component
({
  selector: 'content',
  template: '<div style=" display:inline"#target>{{text}}</div>'
})
export class ContentComponent extends FrontEndClass implements RenderFromJSON{

  @SetterAlg({field: "endpoint", func: (ci: ContentComponent, v: any) => {ci.setEndpoint(v)}})
  url:string;
  @SetterAlg()
  text:string;
  @SetterAlg({field: "provider_type", func: (ci: ContentComponent, v: any) => {ci.setProvider(v)}})
  providerType:ProviderTypeEnum;

  @SetterAlg()
  data_provider: string;

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver, private peopleServicee : MenuService, private http: Http) {
    super();

    //let timer = TimerObservable.create(0, 5000);
    //timer.subscribe(t => this.start());
  }

  setProvider(provider_type: any) {
    switch(provider_type)
      {
        case "static":
          this.providerType = ProviderTypeEnum.static;
          break;
        case "dynamic":
          this.providerType = ProviderTypeEnum.dynamic;
          break;
        case "periodic":
          this.providerType = ProviderTypeEnum.service;
          break;
      }
  }

  setEndpoint(endpoint: any) {
    this.url = endpoint;
    this.start();
  }

  renderJSON(specification: any): void {
    if("provider_type" in specification)
    {
      switch(specification["provider_type"])
      {
        case "static":
          this.providerType = ProviderTypeEnum.static;
          break;
        case "dynamic":
          this.providerType = ProviderTypeEnum.dynamic;
          break;
        case "periodic":
          this.providerType = ProviderTypeEnum.service;
          break;
      }
    }
    if("endpoint" in specification)
      this.url = specification["endpoint"];
      this.start();
  }

  start(){
    console.log(this.url);
   this.http.get(this.url).map(res => res.text())
              .subscribe(p => this.text = p)
  }


}
