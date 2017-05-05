import {Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild} from '@angular/core';
import {PanelComponent} from "../Components/FrontComponents/PanelComponent";

import { Directive, Input } from '@angular/core';

@Directive({ selector: '[draggable]' })
export class DraggableDirective {

  top= "0px";
  left = "0px";
  clicked =false;
  x = 0;
  y = 0;
  menu:any;

  @HostListener('mousedown', ['$event']) onMouseDown(event:any) {
    event.preventDefault();
    this.el.nativeElement.style.boxShadow = "0px 0px 5px blue";
    this.el.nativeElement.after = "a";

    if(event.button == 2)
    {
      this.menu.hidden=false;
      var w = this.el.nativeElement.offsetLeft+this.el.nativeElement.getBoundingClientRect().width;
      var h = this.el.nativeElement.offsetTop + this.el.nativeElement.getBoundingClientRect().height;
      this.menu.setAttribute("style", "background-color:grey;position:absolute; top:"+
        h  +"px;left:" +
        w+"px;");
    }



    //this.menu.setAttribute("style", "background-color:grey;position:absolute; top:"+ this.el.nativeElement.offsetTop +"px;left:" +  this.el.nativeElement.offsetLeft+"px;");
    document.body.appendChild(this.menu);
    if (event.button == 0) {
      this.menu.hidden=true;
      this.clicked = true;
      this.x = event.clientX - this.el.nativeElement.offsetLeft;
      this.y = event.clientY - this.el.nativeElement.offsetTop;
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseup(event:any) {
    event.preventDefault();
    this.clicked = false;
    this.el.nativeElement.style.boxShadow = "0px 0px 0px white";
    //this.menu.hidden=true;
  }
  @HostListener('document:mousemove', ['$event'])
  onMousemove(event:any) {
    event.preventDefault();
    var w = this.el.nativeElement.offsetLeft+this.el.nativeElement.getBoundingClientRect().width;
    var h = this.el.nativeElement.offsetTop + this.el.nativeElement.getBoundingClientRect().height;
    this.menu.setAttribute("style", "background-color:grey;position:absolute; top:"+
     h  +"px;left:" +
      w+"px;");

    console.log(this.el.nativeElement.offsetLeft+this.el.nativeElement.getBoundingClientRect().width);
    if (this.clicked && this.el.nativeElement.style.cursor == "move") {
      this.el.nativeElement.style.top = event.clientY - this.y + 'px';
      this.el.nativeElement.style.left = event.clientX  - this.x+ 'px';
    }
  }

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.position ='absolute';
    this.el.nativeElement.style.cursor = 'move';
    this.menu = document.createElement("DIV");        // Create a <button> element
    var t1 = document.createTextNode("pole1");       // Create a text node
    var t2 = document.createTextNode("pole2");       // Create a text node
    var t3 = document.createTextNode("pole3");       // Create a text node
    var t4 = document.createTextNode("pole4");       // Create a text node

    var s = document.createElement("P");
    var s1 = document.createElement("P");
    var s2 = document.createElement("P");
    this.menu.appendChild(t1);
    this.menu.appendChild(s);
    this.menu.appendChild(t2);
    this.menu.appendChild(s1);
    this.menu.appendChild(t3);
    this.menu.appendChild(s2);
    this.menu.appendChild(t4);
    this.menu.hidden=true;
  }
}


@Directive({ selector: '[resizable]' })
export class ResizableDirective {

  cursor: string;
  direction = "";
  bound = 15;
  clicked = false;

  @HostListener('document:mousemove', ['$event'])
  onMousemove(event: any) {
    event.preventDefault();
    var left = this.el.nativeElement.offsetLeft;
    var top = this.el.nativeElement.offsetTop;
    var w = this.el.nativeElement.getBoundingClientRect().width;
    var h = this.el.nativeElement.getBoundingClientRect().height;
    console.log(this.el);

    if(!this.clicked ) {

      this.direction = "";
      if (Math.abs(top - event.clientY) < this.bound)
        this.direction = "n";
      //this.el.nativeElement.style.cursor = "n-resize";
      else if (Math.abs((top + h) - event.clientY) < this.bound)
        this.direction = "s";

      if (Math.abs(left - event.clientX) < this.bound) //&& Math.abs(rozmiar.top - event.clientY) <10)
        this.direction += "w";
      else if (Math.abs((left + w) - event.clientX) < this.bound)
        this.direction += "e";

      if (this.direction)
        this.el.nativeElement.style.cursor = this.direction + "-resize";
      else
        this.el.nativeElement.style.cursor = this.cursor;
    }
    else {
      if (this.direction.indexOf('n') > -1) {
        this.el.nativeElement.style.top = top + event.movementY + 'px';
        if (h - event.movementY > 0)
          this.el.nativeElement.style.height = h - event.movementY + 'px';
      }
      if (this.direction.indexOf('s') > -1) {
        if (h + event.movementY > 0)
          this.el.nativeElement.style.height = h + event.movementY + 'px';
      }

      if (this.direction.indexOf('w') > -1) {
        this.el.nativeElement.style.left = left + event.movementX + 'px';
        if (w - event.movementX > 0)
          this.el.nativeElement.style.width = w - event.movementX + 'px';
      }
      if (this.direction.indexOf('e') > -1)
      {
        if (w + event.movementX > 0)
          this.el.nativeElement.style.width = w + event.movementX + 'px';
      }
    }
  }

  @HostListener('mousedown', ['$event']) onMouseDown(event: any)
  {
    this.clicked = true;
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseup(event:any) {
    this.clicked = false;
  }
  constructor(private el: ElementRef) {
    this.cursor = el.nativeElement.style.cursor;
  }
}


@Component({
  selector: 'editor',
  templateUrl: 'pages/editor.html',
})
export class EditorComponent {




}
