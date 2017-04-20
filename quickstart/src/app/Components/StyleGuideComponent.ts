import {Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef, OnInit} from '@angular/core'
import { FormsModule }   from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {FrontEndClass} from "./ComponentsCore/MainClasses/FrontEndClass";
import {ComponentsRegister} from "./ComponentsRegister";



@Component
({
  selector: 'styleguide',
  template: 'prop',
  providers:[ComponentsRegister]
})
export class StyleGuideComponent implements  OnInit{
  ngOnInit(): void {
  }
  constructor (private reg : ComponentsRegister) {

  }

}

