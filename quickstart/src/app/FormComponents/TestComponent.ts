import {
  Component, Input, OnInit, ViewChildren, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver,
  QueryList, ElementRef, TemplateRef
} from '@angular/core'
import {TextBox} from "./TextBox";
import {ComponentCreator} from "./ComponentCreator";
import {MicroService} from "./MicroService";


@Component
({
  selector: 'testowe',
  templateUrl: 'pages/TextBoxComponent/test.html',
})
export class TestComponent implements OnInit, MicroService
{
  factory: ComponentFactoryResolver;

  constructor(public cfr: ComponentFactoryResolver) {
    this.factory = cfr;
  }

  //@ViewChildren(TextBox) components: Array<FEComponent>;

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;
  pageJSON = `
    {
      "components":
      [
        {
          "type" : "RowComponent",
          "id" : "row1",
          "children" :
                  [
                    {
                    "type": "PeselComponent",
                    "id" : "test1",
                    "required" : true,
                    
                    "defaultText" : "standardowy tekst1",
                    "width" : 3
                    },
                    {
                      "type": "PasswordComponent",
                      "id" : "test2",
                      "required" : true,
                      
                      "defaultText" : "standardowy tekst2",
                      "width" : 3
                    }
                  ]
        },
        {
          "type" : "RowComponent",
          "id" : "row2",
          "children" :
              [
               {
                "type": "TextBox",
                 "id" : "test3",
                 "required" : true,
                 "regex" : "([0-9]{10})",
                 "defaultText" : "standardowy tekst3",
                 "width" : 3
                 }
              ]
         },
         {
          "type" : "RowComponent",
          "id" : "row2",
          "children" :
              [
               {
                "type": "PanelGroup",
                 "title" : "Tytul",
                 "panel_class" : "success",
                 "width" : 6,
                 "children":
                 [
                      {
                  "type": "TextBox",
                   "id" : "test3",
                   "required" : true,
                   "regex" : "([0-9]{10})",
                   "defaultText" : "standardowy tekst3",
                   "width" : 3
                   },
                      {
                  "type": "TextBox",
                   "id" : "test3",
                   "required" : true,
                   "regex" : "([0-9]{10})",
                   "defaultText" : "standardowy tekst3",
                   "width" : 3
                   }
                   
                 ]
                 }
              ]
         },
         {
          "type" : "Submit",
          "title" : "Wyślij"
         }
      ]
    }
  `;
  ngOnInit(): void {
    var parsed = JSON.parse(this.pageJSON)["components"];
    for(var elem = 0; elem < parsed.length; elem++)
    {
      var added = ComponentCreator.insertComponent(this.cfr, this.target, parsed[elem]["type"]);
      added.renderJSON(parsed[elem]);
    }
  }

}
