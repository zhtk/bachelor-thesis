import {
  Component, Input, OnInit, ViewChildren, ViewContainerRef, ViewChild,
  ReflectiveInjector, ComponentFactoryResolver,
  QueryList, ElementRef, TemplateRef
} from '@angular/core'
import {TextBox} from "./Components/FormComponents/TextBox/TextBox";
import {ComponentCreator} from "./Components/ComponentsCore/ComponentCreator";
import { LAYOUT } from './500plus/mock-form'
import { HOME } from './home_components/home-json'
import {ActivatedRoute} from "@angular/router";
import { MicroServicesService } from './service/micro-services.service';

@Component
({
  selector: 'testowe',
  templateUrl: '../pages/test.html',
})
export class TestComponent implements OnInit
{
  factory: ComponentFactoryResolver;
  pageJSON = HOME;
  pages = {
    'piecset' : LAYOUT,
    'main' : HOME
  };

  constructor(private route: ActivatedRoute, public cfr: ComponentFactoryResolver,
              private msService: MicroServicesService ) {
    this.factory = cfr;
    console.log(this.route.snapshot.params['name']);
    if (this.pages[this.route.snapshot.params['name']])
      this.pageJSON = this.pages[this.route.snapshot.params['name']];
    else
      this.msService.getFormJSON(this.route.snapshot.params['name'])
        .then(resp => {
          //this.pageJSON = JSON.parse(resp);
        });
  }

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;


  ngOnInit(): void {
    console.log("rozwazany json:")
    console.log(LAYOUT);
    var parsed = JSON.parse(this.pageJSON)["components"];
    for(var elem = 0; elem < parsed.length; elem++)
    {
      var added = ComponentCreator.createFromJSON(
      parsed[elem], this.cfr, this.target)

      // var added = ComponentCreator.insertComponent(
      //   this.cfr, this.target, parsed[elem]["type"]);
      // added.renderJSON(parsed[elem]);
    }
  }

}
