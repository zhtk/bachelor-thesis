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
    const main = this.target.createComponent(compFactory).instance;
    const that = <RenderFromJSON> main;
    that.renderJSON({'title' : 'ok'});

    const front = <FrontEndClass> main;
    this.obj = front;



    // const reg = new RegExp('"info":"(\w|\s)*",');

    this.json = ' { <br>';
    /*for (let i = 0; i < FrontEndClass.params.length; i++) {
      this.json += '"' +  FrontEndClass.params[i].name + '" : "' + 'val' + '"' + '<br>';
    }
    this.json += '}';
    this.test = front;*/
  }





  attr_change () {
    //this.test.renderJSON(this.json);
  }
}

