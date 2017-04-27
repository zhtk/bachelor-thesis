import {ApplicationModule, Injectable, ModuleWithComponentFactories} from '@angular/core';
import {AppModule} from "../app.module";
import {Docs} from "./ComponentsCore/Interfaces/DescribeInterface";
import {FrontEndClass} from "./ComponentsCore/MainClasses/FrontEndClass";
import {PanelComponent} from "./FrontComponents/PanelComponent";
import {RowComponent} from "./FrontComponents/RowComponent";
import {IconComponent} from "./FrontComponents/IconComponent";
import {StyleGuideComponent} from "./StyleGuideComponent";
import {BaseClass} from "./ComponentsCore/MainClasses/BaseClass";



export function Attr(label: MemberInfo) {
  return function (target: any, key: any) {

    if(!ComponentsRegister.attributes)
      ComponentsRegister.attributes = {};

    label.name = key;
    if(!(target.constructor.name in ComponentsRegister.attributes))
      ComponentsRegister.attributes[target.constructor.name] = [];



    ComponentsRegister.attributes[target.constructor.name].push(label);
    //Object.defineProperty(label, 'class_name', {value: target.constructor.name});

  };
}
export function Register(info: Docs) {

  return (ctor: Function) => {
    console.log(ctor.name);
    console.log(ctor.prototype.constructor);
    if(!ComponentsRegister.components)
      ComponentsRegister.components = [];
    ComponentsRegister.components.push(info.name);

    Object.defineProperty(ctor.prototype, 'test', {value: 'static'});
    Object.defineProperty(ctor.prototype, 'name', {value: info.name});
    Object.defineProperty(ctor.prototype, 'description', {value: info.description});
    Object.defineProperty(ctor.prototype, 'tag', {value: info.tag});
    //Object.defineProperty(ctor.prototype, 'params', {value: ComponentsRegister.attributes[ctor.name] });

    ctor.prototype.params = [];
    ctor.prototype.params =  ctor.prototype.params.concat(ComponentsRegister.attributes[ctor.name]);
   // ctor.prototype.params.push(ComponentsRegister.attributes[ctor.name]);
    //for(var i in )

  };
}

export class MemberInfo {
  name: string;
  info: string;
  default: string;
}


export class ComponentsInfo {
 public name: string;
 public description: string;

 // members:MemberInfo[];
 // extends:ComponentsInfo[];
}


export class ComponentsRegister {
  // Slownik atrybutow
  static attributes :{};

  // Lista zarejestrowanych komponentow
  static components :string[];
}
