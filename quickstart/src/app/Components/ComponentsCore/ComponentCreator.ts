import {RowComponent} from "../FrontComponents/RowComponent";
import {PeselComponent} from "../FormComponents/TextBox/PeselComponent";
import {PasswordComponent} from "../FormComponents/TextBox/PasswordComponent";
import {ZipcodeComponent} from "../FormComponents/TextBox/PostalCodeComponent";
import {LabelComponent} from "../FrontComponents/LabelComponent";
import {TextBox} from "../FormComponents/TextBox/TextBox";
import {PanelComponent} from "../FrontComponents/PanelComponent";
import {Component, ComponentFactoryResolver,
	ViewContainerRef} from "@angular/core";
import { renderInstr } from '../ComponentsRegister';
import {SubmitComponent} from "../FormComponents/SubmitComponent";
import { ProgressBarComponent } from '../FormComponents/ProgressBarComponent';
import {FormComponent} from "../FormComponents/FormComponent";
import {HeadingComponent} from "../FrontComponents/HeadingComponent";
import {PanelGroupComponent} from "../FrontComponents/PanelGroupComponent";
import {ContentComponent} from "../FrontComponents/ContentComponent";
import {IconComponent} from "../FrontComponents/IconComponent";
import {SpanComponent} from "../FrontComponents/SpanComponent";

export class ComponentCreator {

	static componentMapping = new Map();


	static insertComponent(factory:ComponentFactoryResolver,
		target:ViewContainerRef, type: string):RenderFromJSON {
		var compFactory: any;
		// Rozwiazanie tymczasowe, z mapą z góry nie chce działać
		
		/*this.componentMapping.set("TextBox", TextBox);
		this.componentMapping.set("RowComponent", RowComponent);
		this.componentMapping.set("PeselComponent", PeselComponent);
		this.componentMapping.set("PasswordComponent", PasswordComponent);
		this.componentMapping.set("PanelComponent", PanelComponent);
		this.componentMapping.set("LabelComponent", LabelComponent);
		this.componentMapping.set("Submit", SubmitComponent);
		this.componentMapping.set("Form", FormComponent);
		this.componentMapping.set("ProgBar", ProgressBarComponent);
		this.componentMapping.set("Zipcode", ZipcodeComponent);
		this.componentMapping.set("Heading", HeadingComponent);
		this.componentMapping.set("PanelGroup", PanelGroupComponent);
		this.componentMapping.set("Content", ContentComponent);
		this.componentMapping.set("Icon", IconComponent);
		this.componentMapping.set("Span", SpanComponent);

		compFactory = factory.resolveComponentFactory(this.componentMapping[type]);
*/
		switch (type) {
			case ("TextBox"):
				compFactory = factory.resolveComponentFactory(TextBox);
				break;

			case ("RowComponent"):
				compFactory = factory.resolveComponentFactory(RowComponent);
				break;

			case ("PeselComponent"):
				compFactory = factory.resolveComponentFactory(PeselComponent);
				break;

			case ("PasswordComponent"):
				compFactory = factory.resolveComponentFactory(PasswordComponent);
				break;

			case ("LabelComponent"):
				compFactory = factory.resolveComponentFactory(LabelComponent);
				break;

			case ("Submit"):
				compFactory = factory.resolveComponentFactory(SubmitComponent);
				break;

			case ("Form"):
				compFactory = factory.resolveComponentFactory(FormComponent);
				break;

			case ("ProgBar"):
				compFactory = factory.resolveComponentFactory(ProgressBarComponent);
				break;

			case ("Zipcode"):
				compFactory = factory.resolveComponentFactory(ZipcodeComponent);
				break;

      case ("Heading"):
        compFactory = factory.resolveComponentFactory(HeadingComponent);
        break;
      case ("PanelGroup"):
        compFactory = factory.resolveComponentFactory(PanelGroupComponent);
        break;
      case ("Content"):
        compFactory = factory.resolveComponentFactory(ContentComponent);
        break;
      case ("Icon"):
        compFactory = factory.resolveComponentFactory(IconComponent);
        break;
      case ("Span"):
        compFactory = factory.resolveComponentFactory(SpanComponent);
        break;

			default: // powinno byc explicite
				compFactory = factory.resolveComponentFactory(PanelComponent);
				break;
		}

		const ref = target.createComponent(compFactory);
		return <RenderFromJSON> ref.instance;
	}
	// TODO refactor!!!

	static createFromJSON(jsonObject: any, factory:ComponentFactoryResolver,
		target:ViewContainerRef) {
		var compFactory: any;

		console.log("tworze sobie obiekt " + jsonObject["type"])
		console.log(jsonObject);

		compFactory = factory.resolveComponentFactory(PanelComponent);
		// tu powyzej: decyzja na podst. mapy "type" -> ClassName

		// zniknie
		switch (jsonObject["type"]) {
			case ("TextBox"):
				compFactory = factory.resolveComponentFactory(TextBox);
				break;

			case ("RowComponent"):
				compFactory = factory.resolveComponentFactory(RowComponent);
				break;

			case ("PeselComponent"):
				compFactory = factory.resolveComponentFactory(PeselComponent);
				break;

			case ("PasswordComponent"):
				compFactory = factory.resolveComponentFactory(PasswordComponent);
				break;

			case ("LabelComponent"):
				compFactory = factory.resolveComponentFactory(LabelComponent);
				break;

			case ("Submit"):
				compFactory = factory.resolveComponentFactory(SubmitComponent);
				break;

			case ("Form"):
				compFactory = factory.resolveComponentFactory(FormComponent);
				break;

			case ("ProgBar"):
				compFactory = factory.resolveComponentFactory(ProgressBarComponent);
				break;

			case ("Zipcode"):
				compFactory = factory.resolveComponentFactory(ZipcodeComponent);
				break;

      case ("Heading"):
        compFactory = factory.resolveComponentFactory(HeadingComponent);
        break;
      case ("PanelGroup"):
        compFactory = factory.resolveComponentFactory(PanelGroupComponent);
        break;
      case ("Content"):
        compFactory = factory.resolveComponentFactory(ContentComponent);
        break;
      case ("Icon"):
        compFactory = factory.resolveComponentFactory(IconComponent);
        break;
      case ("Span"):
        compFactory = factory.resolveComponentFactory(SpanComponent);
        break;

			default: // powinno byc explicite
				compFactory = factory.resolveComponentFactory(PanelComponent);
				break;
		}

		//endof zniknie

		const ref = target.createComponent(compFactory);
		var obj = ref.instance;

		// ref.instance.renderJSON(...)

		for (var elem in jsonObject) {
			console.log("jest element " + elem);
			if (elem == "children") {
				console.log(jsonObject.children)
				for (var i = 0; i < jsonObject.children.length; i++) {
					console.log(jsonObject.children[i]);
					this.createFromJSON(jsonObject.children[i], factory, target);
				}
			} else if (elem != "type" && elem != "id") {
				renderInstr[jsonObject["type"]][elem](obj, jsonObject[elem]);
			}
		}
		
	}
}
