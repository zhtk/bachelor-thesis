import {
  Component, Input, OnInit, ViewChildren, ViewContainerRef, ViewChild,
  ReflectiveInjector, ComponentFactoryResolver,
  QueryList, ElementRef, TemplateRef
} from '@angular/core'
import {TextBox} from "./Components/FormComponents/TextBox/TextBox";
import {ComponentCreator} from "./Components/ComponentsCore/ComponentCreator";
import { LAYOUT } from './500plus/mock-form'

@Component
({
  selector: 'testowe',
  templateUrl: '../pages/test.html',
})
export class TestComponent implements OnInit
{
  factory: ComponentFactoryResolver;

  constructor(public cfr: ComponentFactoryResolver) {
    this.factory = cfr;
  }

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  pageJSON = LAYOUT;
  ngOnInit(): void {
    var parsed = JSON.parse(this.pageJSON)["components"];
    for(var elem = 0; elem < parsed.length; elem++)
    {
      var added = ComponentCreator.insertComponent(
        this.cfr, this.target, parsed[elem]["type"]);
      added.renderJSON(parsed[elem]);
    }
  }

}
