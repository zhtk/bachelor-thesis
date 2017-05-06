import {ApplicationModule, Injectable, ModuleWithComponentFactories} from '@angular/core';
import {AppModule} from "../app.module";
import {Docs} from "./ComponentsCore/Interfaces/DescribeInterface";
import {FrontEndClass} from "./ComponentsCore/MainClasses/FrontEndClass";
import {PanelComponent} from "./FrontComponents/PanelComponent";
import {RowComponent} from "./FrontComponents/RowComponent";
import {IconComponent} from "./FrontComponents/IconComponent";
import {StyleGuideComponent} from "./StyleGuideComponent";
import {BaseClass} from "./ComponentsCore/MainClasses/BaseClass";


export var renderInstr : {[id: string] : {[id: string] : Function }} = {}; 
// mapa ze slowa JSONowego na funkcje do wywolania

export function SetterAlg(obj?: {field: string, func: Function}) {
    return function recordInjection(target: Object, decoratedPropertyName: string) : void {

        var field: string;
        var func: Function;

        if (obj) {
            field = obj.field;
            func = obj.func;
        }
        else {
            field = func = undefined;
        }

        var className = target.constructor.name;
        console.log("rejestruje dla klasy " + className + " property " + decoratedPropertyName)

        if (field)
            console.log("pole " + field);
        else
            console.log("nie ma pola")
        
        if (!renderInstr[className]) {
            renderInstr[className] = {};
        }


        if (!field)
            field = decoratedPropertyName;

        if (func) {
            renderInstr[className][field] = func;
            console.log("dostarczono funkcje")
        }
        else {
            renderInstr[className][field] = 
                (classInstance: any, val: any) => { classInstance[decoratedPropertyName] = val }; // tu funkcja settera
        }

    }
}

export function Attr(label: MemberInfo) {
    return function (target: any, key: any) {

        if(!ComponentsRegister.attributes)
            ComponentsRegister.attributes = {};

        label.name = key;
        if(!(target.constructor.name in ComponentsRegister.attributes))
            ComponentsRegister.attributes[target.constructor.name] = [];

        console.log("kostruktor")
        console.log(target)
        console.log(key)
        console.log(typeof target.constructor.key)
        label.type = typeof label.default;
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
    default: any;
    type?: any;
}

@Injectable()
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
