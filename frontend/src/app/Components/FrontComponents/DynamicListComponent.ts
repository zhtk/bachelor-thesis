import {Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef, ComponentRef, OnInit} from '@angular/core'
import { FormClass } from '../FormComponents/FormClass'
import { FormsModule }   from '@angular/forms';
import {Container} from "../ComponentsCore/Interfaces/ContainerInterface";
import {ComponentCreator} from "../ComponentsCore/ComponentCreator";
import {FrontEndClass} from "../ComponentsCore/MainClasses/FrontEndClass";
import {Attr, SetterAlg, ComponentsInfo, ComponentsRegister, Register} from "../ComponentsRegister";
import {Docs} from "../ComponentsCore/Interfaces/DescribeInterface";
import {SizeProperties} from "../ComponentsCore/MainClasses/SizeProperties";

@Component
({
  selector: 'dynamic_list',
  templateUrl: '../../pages/Components/DynamicList.html'
})
export class DynamicListComponent extends FrontEndClass implements RenderFromJSON, Container, OnInit {

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {
    super();
    this.replicableElement = {};
    this.sendCount = true;
    this.startChildCount = 0;
  }
  
  ngOnInit(): void {
    if (this.startChildCount == 0)
      this.dodaj();
    else
      for (var i = 0; i < this.startChildCount; i++) 
        this.dodaj();
  }

  private enhance_sibling_id(childNumber: number, jsonObj: Object): Object {
    if (jsonObj["id"])
      jsonObj["id"] = jsonObj["id"] + "_" + String(childNumber);

    if (jsonObj['children'])
      for (let child of jsonObj['children'])
        this.enhance_sibling_id(childNumber, child);

    return jsonObj;
  }

  onSubmit() {
    alert();
  }

  @SetterAlg()  
  startChildCount: number;

  @SetterAlg()
  replicableElement: Object;

  @SetterAlg()
  id: string;

  @SetterAlg()
  sendCount: boolean;

  private childCount = 0;
  private offspringArray: any[] = [];
  
  dodaj(event?: Event) { 
    if (event)
      event.preventDefault();
    this.offspringArray.push(ComponentCreator.createFromJSON(
            this.enhance_sibling_id(++this.childCount, JSON.parse(JSON.stringify(this.replicableElement))), 
            this.cfr, this.target));
  }

  usun(event?: Event) {
    if (event)
      event.preventDefault();
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

  private shouldModify() {
    return (this.startChildCount == 0);
  }

  renderJSON(specification: any): void {
  }

  renderChildren(children: any): void {

  }

  hide():void {
    this.visible = false;
  }

}