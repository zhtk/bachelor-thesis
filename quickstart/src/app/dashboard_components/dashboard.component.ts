import { Component } from '@angular/core';
import {PanelComponent} from "../Components/FrontComponents/PanelComponent";
import {RowComponent} from "../Components/FrontComponents/RowComponent";
import {IconComponent} from "../Components/FrontComponents/IconComponent";
import {ComponentsRegister} from "../Components/ComponentsRegister";

@Component({
  selector: 'dashboard',
  templateUrl: 'pages/dashboard.html',
})
export class DashboardComponent {

  display: string[];

  constructor () {

    this.display = [];

    for (let i in ComponentsRegister.components) {
      this.display.push(ComponentsRegister.components[i]);
    }

  }
}
