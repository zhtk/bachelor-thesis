import { Component, Input, OnInit, ViewChildren, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver,
  QueryList} from '@angular/core'
import { FormComponent } from './FormComponent'
import { FormsModule }   from '@angular/forms';
import {TextBox} from "./TextBox";
import {Type} from "typescript";

@Component
({
  selector: 'row',
  template: '<button (click) = "dziala()">test</button> '
 ,
})
export class RowComponent implements FEComponent, OnInit{

  parsed:any;
  componentRegistry = {
  'TextBox': TextBox,
  }

  pageJSON = `
    {
      "components":
      [
         {
          "type": "TextBox",
          "id" : "test",
          "required" : true,
          "defaultText" : "standardowy tekst1",
          "width" : 3
          },
          {
            "type": "TextBox",
            "id" : "test",
            "required" : true,
            "regex" : "([0-9]{10})",
            "defaultText" : "standardowy tekst2",
            "width" : 3
          }
      ]
    }
  `;
  visible:boolean;
  //@ViewChildren(TextBox) components: QueryList<TextBox>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) {
    this.parsed = JSON.parse(this.pageJSON)["components"];
  }

  ngOnInit(): void {
    console.log(this.parsed);
    for (var i = 0, len = this.parsed.length; i < len; ++i)
    {
      var obj = this.parsed[i];
      this.add_element(obj.type, obj);
    }

  }

  renderJSON(specification: any): void {

  }

  add_element (type:any, specification: any)
  {
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.componentRegistry[type]);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
    var added = <FEComponent> ref.instance;
    added.renderJSON(specification);
  }

}
