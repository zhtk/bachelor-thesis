import {Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef,} from '@angular/core'
import {PanelComponent} from "../Components/FrontComponents/PanelComponent";
import {TextBox} from "../Components/FormComponents/TextBox/TextBox";

@Component
({
  selector: 'textboxeditor',
  templateUrl: 'pages/textbox_editor.html',
})

export class TextBoxEditor extends TextBox{

}


