import {Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef, OnInit} from '@angular/core'
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import {FrontEndClass} from "./ComponentsCore/MainClasses/FrontEndClass";
import {ComponentsRegister} from "./ComponentsRegister";
import {PanelComponent} from "./FrontComponents/PanelComponent";
import {RowComponent} from "./FrontComponents/RowComponent";
import {IconComponent} from "./FrontComponents/IconComponent";
import {ComponentCreator} from "./ComponentsCore/ComponentCreator";



@Component
({
  selector: 'styleguide',
  templateUrl: '/pages/Components/style_guide.html',
})
export class StyleGuideComponent implements OnInit{
  ngOnInit(): void {
    let compFactory = this.cfr.resolveComponentFactory(this.components[this.route.snapshot.params['category']]);
    const that = <RenderFromJSON> this.target.createComponent(compFactory).instance;
    that.renderJSON({'class' : 'ok'});
    this.json = JSON.stringify({'class' : 'ok'});
  }
  components = {
    'Panel' : PanelComponent,
    'Row' : RowComponent,
    'Icon' : IconComponent
  };
  json:string;
  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;
  obj: FrontEndClass;
  constructor(private route: ActivatedRoute, private cfr: ComponentFactoryResolver)
  {
    let obj = Object.create(this.components[this.route.snapshot.params['category']]);
    obj.constructor = this.components[this.route.snapshot.params['category']];
    this.obj = obj.prototype;

  }
}

