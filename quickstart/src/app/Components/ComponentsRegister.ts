import {ApplicationModule, Injectable, ModuleWithComponentFactories} from '@angular/core';
import {AppModule} from "../app.module";
import {Docs} from "./ComponentsCore/Interfaces/DescribeInterface";
import {FrontEndClass} from "./ComponentsCore/MainClasses/FrontEndClass";


export function Attr(label: MemberInfo) {
  return function (target: FrontEndClass, key: string) {

    if (!target.params) {
      target.params = [];
    }
    label.name = key;
    target.params.push(label);

  };
}
export function Register(info: Docs) {
  return (ctor: Function) => {
    Object.defineProperty(ctor.prototype, 'name', {value: info.name});
    Object.defineProperty(ctor.prototype, 'description', {value: info.description});
    Object.defineProperty(ctor.prototype, 'tag', {value: info.tag});
    //Object.defineProperty(ctor.prototype, 'params', {});
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

@Injectable()
export class ComponentsRegister {
  components_list: string[]; // ComponentsInfo[];


  constructor() {
    this.components_list = [];
  }

  register(obj: any) {
    console.log(obj.name);
    this.components_list.push(obj.name);
    console.log( this.components_list);
  }

}
