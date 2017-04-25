import {Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef,} from '@angular/core'
import { FormClass } from '../FormComponents/FormClass'
import { FormsModule }   from '@angular/forms';
import {Container} from "../ComponentsCore/Interfaces/ContainerInterface";
import {ComponentCreator} from "../ComponentsCore/ComponentCreator";
import {FrontEndClass} from "../ComponentsCore/MainClasses/FrontEndClass";
import {Attr, ComponentsInfo, Register} from "../ComponentsRegister";
import {Docs} from "../ComponentsCore/Interfaces/DescribeInterface";

@Component
({
  selector: 'panelgroup',
  templateUrl: '../../pages/Components/Panel/panel.html'
})
@Register
(
   { name : "Panel",
     description : "Okno z górną belką i miejscem na zawartość",
     tag : "kontener"
   }
)
export class PanelComponent extends FrontEndClass implements RenderFromJSON, Container {

  @Attr({info:"Tekst na górnej belce", default : "", name:""})
  public title:string;
  @Attr({info:"Kolor panelu", default : "", name:""})
  panel_class:string;

  panel_body_class:string;

  @Attr({info:"Czy ciało panelu rozwijane", default : "false", name:""})
  collapsible:boolean;

  @Attr({info:"Id panelu", default : "", name:""})
  main_id:string;
  @Attr({info:"Czy panel usuwalny", default : "false", name:""})
  hidable:boolean;

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;


  constructor(private cfr: ComponentFactoryResolver) {

    super();
    this.main_id = Math.floor((Math.random() * 10000) + 1).toString();
    this.arrayOfKeys += Object.keys(this);
  }

  renderJSON(specification: any): void {

    this.panel_class = "panel panel-";
    this.panel_body_class ="panel-body";
    this.grid_class = "col-lg-";
    this.hidable = false;
    this.visible = true;

    if ("title" in specification)
      this.title = specification["title"];
    if ("panel_class" in specification)
      this.panel_class += specification["panel_class"];
    else
      this.panel_class += "default";
    if ("size" in specification)
      this.setGridClass(specification);
    if ("children" in specification)
    // Stworz wszystkie komponenty i dodaj je w sobie
      this.renderChildren(specification["children"]);
    if ("collapse" in specification) {
      this.collapsible = specification["collapse"]
      this.panel_body_class += " collapse";
      this.cursor = "pointer";
    }
    else
      this.collapsible = false;

    if("hidable" in specification)
      this.hidable = true;

  }

  renderChildren(children: any): void {
    for(var child = 0; child < children.length; child++)
    {
      var added = ComponentCreator.insertComponent(this.cfr, this.target, children[child]["type"]);
      added.renderJSON(children[child]);
    }
  }

  hide():void {
    this.visible = false;
  }

}

