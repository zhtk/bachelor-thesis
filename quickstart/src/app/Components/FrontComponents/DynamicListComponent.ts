import {Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef, OnInit} from '@angular/core'
import { FormClass } from '../FormComponents/FormClass'
import { FormsModule }   from '@angular/forms';
import {Container} from "../ComponentsCore/Interfaces/ContainerInterface";
import {ComponentCreator} from "../ComponentsCore/ComponentCreator";
import {FrontEndClass} from "../ComponentsCore/MainClasses/FrontEndClass";
import {Attr, SetterAlg, ComponentsInfo, ComponentsRegister, Register} from "../ComponentsRegister";
import {Docs} from "../ComponentsCore/Interfaces/DescribeInterface";
import {SizeProperties} from "../ComponentsCore/MainClasses/SizeProperties";

const t = '{"type": "TextBox",' +
  '"id": "dziecko2_data_ur",' +
  '"infoText": "Data urodzenia",' +
  '"defaultText": "Data urodzenia",' +
  '"size": {"large": 12}}';

const json =  '{"type": "PanelComponent",' +
  '"title": "Pracownik","collapse": true,' +
  '"hidable" : true,' +
  '"size": {"large": 12,}' +
  '}';

const to = '{"title" : ' +
  '"nowy"+"panel_class" : "success"' +
  '"collapsible" : false"main_id" : ' +
  '"""hidable" : false"visible" : true"size" ' +
  ': {"large":"12"}"backgroundColor" : "blue""textColor" : ' +
  '"red""cursor" : "pointer"}';

@Component
({
  selector: 'dynamic_list',
  templateUrl: '../../pages/Components/DynamicList.html'
})
export class DynamicListComponent extends FrontEndClass implements RenderFromJSON, Container, OnInit {
  ngOnInit(): void {
  }


  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {
    super();

  }
  onSubmit() {
    alert();
  }
  dodaj()
  {
    var added = ComponentCreator.insertComponent(this.cfr, this.target, "TextBox");
  }
  renderJSON(specification: any): void {
  }

  renderChildren(children: any): void {

  }

  hide():void {
    this.visible = false;
  }

}

/**
 * Created by majki on 05.06.17.
 */
