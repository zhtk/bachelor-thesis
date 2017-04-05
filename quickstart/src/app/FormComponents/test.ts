import {Component, OnInit, ViewChild} from '@angular/core'
import {TextBox} from "./TextBox";


@Component
({
  selector: 'testowe',
  templateUrl: 'pages/TextBoxComponent/test.html'
})
export class Testowe implements OnInit
{

  @ViewChild(TextBox) textbox: TextBox

  ngOnInit(): void {
    this.textbox.grid_class += "3";
  }

}
