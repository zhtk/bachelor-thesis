import {HeadingComponent} from "./FrontComponents/HeadingComponent";
import {Injectable} from "@angular/core";
import myGlobals = require('../globals');


export function Register(info : Object) {
  return (ctor: Function) => {
    Object.defineProperty(ctor.prototype, "name", {value: info.name});
    Object.defineProperty(ctor.prototype, "description", {value: info.description});
  }
}

class MemberInfo {
  name:string;
  type:string;
}


class ComponentsInfo {
 name:string;
 description:string;
 constructor(name:string, description:string)
 {
   this.name = name;
   this.description = description;
 }
 //members:MemberInfo[];
 //extends:ComponentsInfo[];
}

@Injectable()
export class ComponentsRegister {
  components_list:string[];//ComponentsInfo[];


  constructor()
  {
    this.components_list = [];
  }

  register(obj:any)
  {
    console.log(obj.name);
    this.components_list.push(obj.name);
    console.log( this.components_list);
  }

}
