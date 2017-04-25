import { Component } from '@angular/core';
import {PanelComponent} from "../Components/FrontComponents/PanelComponent";
import {RowComponent} from "../Components/FrontComponents/RowComponent";
import {IconComponent} from "../Components/FrontComponents/IconComponent";

@Component({
  selector: 'dashboard',
  templateUrl: 'pages/dashboard.html',
})
export class DashboardComponent {

  components = [
    'Panel' ,
    'Row' ,
    'Icon' ,
  ];

  display: string[];

  constructor () {
    this.display = [];

    for (let i in this.components) {
      //let obj = Object.create(this.components[i]);

      //obj.constructor = this.components[i];
      //this.display.push(obj.prototype);
      this.display.push(this.components[i]);
    }

  }
}
