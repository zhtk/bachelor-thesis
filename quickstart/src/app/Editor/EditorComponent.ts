import {Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild} from '@angular/core';
import {PanelComponent} from "../Components/FrontComponents/PanelComponent";

import { Directive, Input } from '@angular/core';

@Directive({ selector: '[draggable]' })
export class HighlightDirective {

  top= "0px";
  left = "0px";
  clicked =false;
  x = 0;
  y =0;
  @HostListener('mousedown', ['$event']) onMouseDown(event:any) {
    event.preventDefault();
    if (event.button == 0) {
      this.clicked = true;
      this.x = event.clientX - this.el.nativeElement.offsetLeft;
      this.y = event.clientY - this.el.nativeElement.offsetTop;
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseup(event:any) {
    event.preventDefault();
    this.clicked = false;
  }
  @HostListener('document:mousemove', ['$event'])
  onMousemove(event:any) {
    event.preventDefault();
    if (this.clicked) {
      this.el.nativeElement.style.top = event.clientY - this.y + 'px';
      this.el.nativeElement.style.left = event.clientX  - this.x+ 'px';
    }
  }

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.position ='absolute';
  }
}

@Component({
  selector: 'btn',
  template: '<panel id="me" oncontextmenu="return false;" style="display:block; position: relative;"  [style.cursor] = "mouse"[style.left] = "pos_left" [style.top] = "pos_top" #panel>' +
  ' <div id="clear" style="clear:both;"></div></panel>',
})
export class Button extends PanelComponent{
  pos_left = "0px";
  pos_top = "0px";
  x_start = 0;
  y_start =0;
  x_offset = 0;
  y_offset =0;
  clicked=false;
  mouse="pointer";

  w=0;
  h=0;
  jak=0;


  @HostListener('mousedown', ['$event']) onMouseDown(event:any) {
    var rozmiar = document.getElementById('me').getElementsByClassName("panel-heading")[0].getBoundingClientRect();
    console.log(rozmiar.top);
    event.preventDefault();

    if (event.button == 0) {

      this.clicked = true;
      var rozmiar = document.getElementById('me').getElementsByClassName("panel-heading")[0].getBoundingClientRect();

      var rozmiar2 = document.getElementById('me').getElementsByClassName("panel-body")[0].getBoundingClientRect();
      var main = document.getElementById('me').getElementsByClassName("panelowy")[0].getBoundingClientRect();
      this.w =main.width;
      this.h =main.height;
      this.x_start = main.left;
      this.y_start= main.top;
      if(Math.abs(rozmiar.left - event.clientX) <10) //&& Math.abs(rozmiar.top - event.clientY) <10)
        this.jak = 1;
      else if(Math.abs((rozmiar.left + rozmiar.width) - event.clientX) < 10)
        this.jak = 2;
      else if(Math.abs(rozmiar.top  - event.clientY) < 10)
        this.jak = 3;
      else if(Math.abs((rozmiar2.top +rozmiar2.height) - event.clientY) < 10)
        this.jak = 4;
      else
        this.jak = 0;
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove(event:any) {
    var main = document.getElementById('me').getElementsByClassName("panelowy")[0];
    var main2 = document.getElementById('me').getElementsByClassName("panel-body")[0];
    var rozmiar = document.getElementById('me').getElementsByClassName("panel-heading")[0].getBoundingClientRect();
    var rozmiar2 = document.getElementById('me').getElementsByClassName("panel-body")[0].getBoundingClientRect();

    if(this.jak == 1)
    {
      var ile = (event.clientX - this.x_start)  ;
      var go = this.w - ile;
      main.setAttribute("style", "width:" +go+"px");
      this.pos_left = (event.clientX - this.x_start) + "px";
    }
    else if(this.jak == 2)
    {
      var ile = (event.clientX - this.x_start - this.w)  ;
      var go = this.w + ile;
      main.setAttribute("style", "width:" +go+"px");
    }
    else if(this.jak == 3)
    {
      var ile = (event.clientY - this.y_start)  ;
      var go = this.h - ile;
      main2.setAttribute("style", "height:" +go+"px");
      this.pos_top = (event.clientY - this.y_start) + "px";
      console.log(go);
    }
    else if (this.jak == 4)
    {
      var ile = (event.clientY - this.y_start - this.h)  ;
      var go = this.h + ile;
      main2.setAttribute("style", "height:" +go+"px");
    }


    if(Math.abs(rozmiar.left - event.clientX) <10) //&& Math.abs(rozmiar.top - event.clientY) <10)
      this.mouse = "w-resize";
    else if(Math.abs((rozmiar.left + rozmiar.width) - event.clientX) < 10)
      this.mouse = "e-resize";
    else if(Math.abs(rozmiar.top  - event.clientY) < 10)
      this.mouse = "n-resize";
    else if(Math.abs((rozmiar2.top +rozmiar2.height) - event.clientY) < 10)
      this.mouse = "s-resize";
    else
      this.mouse = "pointer";

    if(this.clicked && this.jak == 0)
    {
      this.x_offset+= event.movementX;
      this.y_offset+= event.movementY;
      this.pos_left =  this.x_offset + "px";//(event.clientX - this.x_start) + "px";
      this.pos_top = this.y_offset+ "px";
      console.log(this.pos_left);
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseup(event:any) {
    event.preventDefault();
    this.clicked = false;
    this.jak = 0;
  }
}


@Component({
  selector: 'editor',
  templateUrl: 'pages/editor.html',
})
export class EditorComponent {




}
