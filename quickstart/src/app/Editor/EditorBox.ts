import {
  AfterContentInit, Component, ComponentFactoryResolver, ContentChildren, ElementRef, HostBinding, HostListener, OnInit,
  QueryList,
  ViewChild, ViewChildren, ViewContainerRef
} from '@angular/core';
import {FrontEndClass} from "../Components/ComponentsCore/MainClasses/FrontEndClass";
import {ComponentCreator} from "../Components/ComponentsCore/ComponentCreator";
import {TextBoxEditor} from "./TextBoxEditor";

@Component({
  selector: 'editorBox',
  template: '<div style = "background-color: white; ' +
  'width: 300px; height:700px; float:right;' +
  ' border: 1px solid black;"> ' +
  '<template #target></template> ' +
  '<textboxeditor #to></textboxeditor>' +
  '</div>',
})
export class EditorBox implements OnInit {
  components = [
    'TextBoxEditor',
    'PanelEditor'
  ];
  @ViewChild('target', {read: ViewContainerRef}) target: ViewContainerRef;
  @ContentChildren(FrontEndClass, {descendants: true}) lista: QueryList<FrontEndClass>;


  ngOnInit(): void {

    for (var i = 0; i < this.components.length; i++)
      ComponentCreator.insertComponent(this.cfr, this.target, this.components[i]);
  }

  constructor(private cfr: ComponentFactoryResolver) {
  }

  ngAfterContentInit() {
    console.log(this.lista);
  }
}


