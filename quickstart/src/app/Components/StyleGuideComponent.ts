import {Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef, OnInit} from '@angular/core'
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import {FrontEndClass} from "./ComponentsCore/MainClasses/FrontEndClass";
import {ComponentsRegister} from "./ComponentsRegister";
import {PanelComponent} from "./FrontComponents/PanelComponent";
import {RowComponent} from "./FrontComponents/RowComponent";
import {IconComponent} from "./FrontComponents/IconComponent";
import {ComponentCreator} from "./ComponentsCore/ComponentCreator";
import { KeysPipe } from '../keys.pipe';

@Component
({
  selector: 'styleguide',
  templateUrl: '/pages/Components/style_guide.html',
})
export class StyleGuideComponent implements OnInit {

  static components = {
    'Panel' : PanelComponent,
    'Row' : RowComponent,
    'Icon' : IconComponent
  };

  json: string;

  obj:any;

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  constructor(private route: ActivatedRoute, private cfr: ComponentFactoryResolver) {
  }

  ngOnInit(): void {

    let compFactory =
      this.cfr.resolveComponentFactory(StyleGuideComponent.components[this.route.snapshot.params['category']]);
    this.main = this.target.createComponent(compFactory).instance;
    const that = <RenderFromJSON> this.main;
    that.renderJSON({'title' : 'ok'});
    ComponentCreator.setObjectProperty(that.constructor.name, 'title', that, 'okey');

    this.front = <FrontEndClass> this.main;
    this.obj = this.front;

    ComponentCreator.setObjectProperty(this.main.constructor.name, 'title', this.main, 'oxa');
    ComponentCreator.setObjectProperty(this.main.constructor.name, 'hidable', this.main, 'true');
    this.updateJSON();

    console.log("paramsy:");
    console.log(this.obj.params);

    // for (let param of this.obj.params) {
    //   this.valMap.set(param.name, "");
    //   if (param.default) {
    //     this.valMap.set(param.name, param.default);
    //     this.jsonVal[param.name] = param.default;
    //   }
    // }
    // const reg = new RegExp('"info":"(\w|\s)*",');


    this.json = ' { <br>';
    for (let i = 0; i < this.front.params.length; i++) {
      this.json += '"' +  this.front.params[i].name + '" : "' + this.valMap.get(this.front.params[i].name) +
                   '"' + '<br>';
    }
    this.json += '}';

    console.log("RAPORT")
    console.log(this.json);
    console.log(this.obj);

  }

  private main: any;
  private jsonVal = {};
  private valMap = new Map();
  private front: any;

  isObject(sth: any): boolean {
    //console.log("obiekt:")
    
    // if (sth) {
    //   console.log(sth);
    //   console.log(Object.getOwnPropertyNames(sth));
    // }
    // else {
    //   console.log("jakiś UNDEF")
    // }
    return (sth instanceof Object);
  }

  listaParam(obj: any) {
    if (obj) {
      var toReturn = Object.getOwnPropertyNames(obj);
      var index = toReturn.indexOf("parent");
      if (index > -1) {
        toReturn.splice(index, 1);
        console.log("wyciety parent")
      }
      else console.log("nie bylo parenta")
      return toReturn;
    }
    else
      return [];
  }

  updateJSON() {
    for (let param of this.obj.params) {
      //this.valMap.set(param.name, "");
      if (this.obj[param.name]) {
        this.valMap.set(param.name, this.jsonVal[param.name]);
        this.jsonVal[param.name] = this.obj[param.name]
      }
      if (param.default != undefined) {
        console.log("ustawilem w jsonVal " + param.name + " na")
        console.log(param.default)
        this.valMap.set(param.name, param.default);
        this.jsonVal[param.name] = param.default;
      }
    }
  }

  private getMapName(name: string) {
    return this.jsonVal[name] != undefined ? this.jsonVal[name] : "UNDEFINED"; 
  }

  makeString(obj: any) {
    return JSON.stringify(obj)
  }

  attr_change () {
    console.log("wywolano attr_change")

    var className: string = this.obj.constructor.name;
    for (let param of this.obj.params) {

      console.log("nazwa coto: " + this.route.snapshot.params['category'])
      console.log(StyleGuideComponent.components[this.route.snapshot.params['category']].name);
      console.log("nazwa klasy: " + className);
      
      if (this.isObject(this.jsonVal[param.name]))
        for (let nestedParam of this.listaParam(this.jsonVal[param.name]))
          ComponentCreator.setObjectProperty(className, this.jsonVal[param.name][nestedParam].name, this.obj, this.jsonVal[param.name]);  
      else
        ComponentCreator.setObjectProperty(className, param.name, this.obj, this.jsonVal[param.name]);
    }

    console.log(this.jsonVal)
    console.log(this.jsonVal["hidable"])
    console.log(this.obj)
    console.log(this.obj["hidable"])

    // console.log(this.jsonVal["size"]["small"])
    //this.updateJSON();
    //this.test.renderJSON(this.json);
  }

  printTypeBased(item: any, value: any) {
    console.log(item + " ma typ ");
    console.log(typeof item)
    console.log(value + " ma typ ");
    console.log(typeof value)
    if (item == "boolean")
      return value.toString();
    if (item == "number")
      return value.toString();
    if (item == "string")
      return "\"" + value + "\"";

    return JSON.stringify(value)
  }


}

