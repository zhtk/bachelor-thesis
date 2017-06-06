import {Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef, ComponentRef, OnInit} from '@angular/core'
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

const json2 = 
  {
    "type": "PanelComponent",
    "title": "Pracownik",
    "collapsible": true,
    "hidable" : true,
    "size": {"large": 12},
    "children": [
      {
        "type": "RowComponent",
        "id": "row1",
        "children": [
          {
            "type": "TextBox",
            "id": "wnioskodawca_imie",
            "infoText": "Imię",
            "defaultText": "Imię",
            "size": {
              "large": 5
            }
          },
          {
            "type": "TextBox",
            "id": "wnioskodawca_nazwisko",
            "infoText": "Nazwisko",
            "defaultText": "Nazwisko",
            "size": {
              "large": 6
            }
          }
        ]
      }
    ]
  }
;

const to = '{"title" : ' +
  '"nowy"'+'"panel_class" : "success"' +
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


  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {
    super();
  }
  
  ngOnInit(): void {
    this.dodaj();
  }

  private enhance_sibling_id(childNumber: number, jsonObj: Object): Object {
    if (jsonObj["id"])
      jsonObj["id"] = jsonObj["id"] + "_" + String(childNumber);

    if (jsonObj['children'])
      for (let child of jsonObj['children'])
        this.enhance_sibling_id(childNumber, child);

    console.log("Obiekt jak nowy!")
    console.log(jsonObj)
    return jsonObj;
  }

  onSubmit() {
    alert();
  }

  @SetterAlg()
  replicableElement: Object;

  private childCount = 0;
  private offspringArray: any[] = [];
  dodaj()
  {
    this.offspringArray.push(ComponentCreator.createFromJSON(
            this.enhance_sibling_id(++this.childCount, JSON.parse(JSON.stringify(this.replicableElement))), 
            this.cfr, this.target))
    //var added = ComponentCreator.insertComponent(this.cfr, this.target, "TextBox");
  }

  usun()
  {
    var toRemove = this.offspringArray.pop();
    if (toRemove) {
      this.childCount--;
      toRemove.destroy();
    }
  }

  private numbMap = new Map<number, boolean>();
  getNextFreeNumb() {
    for (var i = 0; i < this.childCount; i++) {
      if (!this.numbMap.get(i)) {
        this.numbMap.set(i, true);
        return i;
      }
    }
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
