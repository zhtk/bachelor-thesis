import {
  Component, Input, OnInit, ViewChildren, ViewContainerRef, ViewChild,
  ReflectiveInjector, ComponentFactoryResolver,
  QueryList, ElementRef, TemplateRef
} from '@angular/core'
import {TextBox} from "./TextBox";
import {ComponentCreator} from "./ComponentCreator";
import {MicroService} from "./MicroService";
import { LAYOUT } from '../500plus/mock-form'

@Component
({
  selector: 'testowe',
  templateUrl: 'pages/TextBoxComponent/test.html',
})
export class TestComponent implements OnInit, MicroService
{
  factory: ComponentFactoryResolver;

  constructor(public cfr: ComponentFactoryResolver) {
    this.factory = cfr;
  }

  //@ViewChildren(TextBox) components: Array<FEComponent>;

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
