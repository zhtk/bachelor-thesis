import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core'
import {TextBox} from "./TextBox";


@Component
({
  selector: 'testowe',
  templateUrl: 'pages/TextBoxComponent/test.html'
})
export class Testowe implements OnInit
{

  @ViewChildren(TextBox) components: Array<FEComponent>
  //@ViewChild(TextBox) textbox: TextBox
  pageJSON = `
    {
      "components":
      [
        
         {"id" : "test",
          "required" : true,
          "regex" : "([0-9]{10})",
          "defaultText" : "standardowy tekst1",
          "width" : 3
          },
          {"id" : "test",
          "required" : true,
          "regex" : "([0-9]{10})",
          "defaultText" : "standardowy tekst2",
          "width" : 3
          }
      ]
    }
  `;
  ngOnInit(): void {
    this.components = new Array<FEComponent>();
    this.components.push(new TextBox());
    this.components[0].renderJSON(JSON.parse(this.pageJSON)["components"][0]);
  }

}
