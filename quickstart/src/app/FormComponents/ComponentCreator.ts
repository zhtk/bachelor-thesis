import {RowComponent} from "./RowComponent";
import {TextBox} from "./TextBox";
import {PanelGroupComponent} from "./PanelGroupComponent";
import {Component, ComponentFactoryResolver, ViewContainerRef} from "@angular/core";
import {MicroService} from "./MicroService";

export class ComponentCreator {

  static componentMapping = {
    'TextBox': TextBox,
    'PanelGroup' : PanelGroupComponent
  };

  static insertComponent(factory:ComponentFactoryResolver, target:ViewContainerRef, type: string):FEComponent {
    // Rozwiazanie tymczasowe, z mapą z góry nie chce działać
    var compFactory;
    console.log("typ" + type);
    if (type == "TextBox") {
      compFactory = factory.resolveComponentFactory(TextBox);
      const ref = target.createComponent(compFactory);
      return <FEComponent> ref.instance;
    }
    else if(type == "RowComponent") {
      compFactory = factory.resolveComponentFactory(RowComponent);
      const ref = target.createComponent(compFactory);
      return <FEComponent> ref.instance;
    }
    else
    {
      compFactory = factory.resolveComponentFactory(PanelGroupComponent);
      const ref = target.createComponent(compFactory);
      return <FEComponent> ref.instance;
    }
  }

}
