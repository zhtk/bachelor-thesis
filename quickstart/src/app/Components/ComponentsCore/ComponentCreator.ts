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
import {FrontEndClass} from './MainClasses/FrontEndClass';

export class ComponentCreator {

	private componentMapping = new Map();

	static insertComponent(factory:ComponentFactoryResolver,
		target:ViewContainerRef, type: string):RenderFromJSON {
		var compFactory: any;
		// Rozwiazanie tymczasowe, z mapą z góry nie chce działać
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

	constructor() {
	}



	static createFromJSON(jsonObject: any, factory:ComponentFactoryResolver,
		target:ViewContainerRef): RenderFromJSON {
		var compFactory: any;
		var ref: any;
		var obj: any;
		var className: string;


		// tu powyzej: decyzja na podst. mapy "type" -> ClassName

		// HACK, zniknie
		switch (jsonObject["type"]) {
			case ("TextBox"):
				compFactory = factory.resolveComponentFactory(TextBox);
				ref = target.createComponent(compFactory);
				obj = <TextBox> ref.instance
				className = "TextBox";
				break;


			case ("RowComponent"):
				compFactory = factory.resolveComponentFactory(RowComponent);
				ref = target.createComponent(compFactory);
				obj = <RowComponent> ref.instance
				className = "RowComponent";
				break;


			case ("PeselComponent"):
				compFactory = factory.resolveComponentFactory(PeselComponent);
				ref = target.createComponent(compFactory);
				obj = <PeselComponent> ref.instance
				className = "PeselComponent";
				break;


			case ("PasswordComponent"):
				compFactory = factory.resolveComponentFactory(PasswordComponent);
				ref = target.createComponent(compFactory);
				obj = <PasswordComponent> ref.instance
				className = "PasswordComponent";
				break;


			case ("LabelComponent"):
				compFactory = factory.resolveComponentFactory(LabelComponent);
				ref = target.createComponent(compFactory);
				obj = <LabelComponent> ref.instance
				className = "LabelComponent";
				break;


			case ("Submit"):
				compFactory = factory.resolveComponentFactory(SubmitComponent);
				ref = target.createComponent(compFactory);
				obj = <SubmitComponent> ref.instance
				className = "SubmitComponent";
				break;


			case ("Form"):
				compFactory = factory.resolveComponentFactory(FormComponent);
				ref = target.createComponent(compFactory);
				obj = <FormComponent> ref.instance
				className = "FormComponent";
				break;


			case ("ProgBar"):
				compFactory = factory.resolveComponentFactory(ProgressBarComponent);
				ref = target.createComponent(compFactory);
				obj = <ProgressBarComponent> ref.instance
				className = "ProgressBarComponent";
				break;


			case ("Zipcode"):
				compFactory = factory.resolveComponentFactory(ZipcodeComponent);
				ref = target.createComponent(compFactory);
				obj = <ZipcodeComponent> ref.instance
				className = "ZipcodeComponent";
				break;


			case ("Heading"):
				compFactory = factory.resolveComponentFactory(HeadingComponent);
				ref = target.createComponent(compFactory);
				obj = <HeadingComponent> ref.instance
				className = "HeadingComponent";
				break;

			case ("PanelGroup"):
				compFactory = factory.resolveComponentFactory(PanelGroupComponent);
				ref = target.createComponent(compFactory);
				obj = <PanelGroupComponent> ref.instance
				className = "PanelGroupComponent";
				break;

			case ("Content"):
				compFactory = factory.resolveComponentFactory(ContentComponent);
				ref = target.createComponent(compFactory);
				obj = <ContentComponent> ref.instance
				className = "ContentComponent";
				break;

			case ("Icon"):
				compFactory = factory.resolveComponentFactory(IconComponent);
				ref = target.createComponent(compFactory);
				obj = <IconComponent> ref.instance
				className = "IconComponent";
				break;

			case ("Span"):
				compFactory = factory.resolveComponentFactory(SpanComponent);
				ref = target.createComponent(compFactory);
				obj = <SpanComponent> ref.instance
				className = "SpanComponent";
				break;


			case ("PanelComponent"):
				compFactory = factory.resolveComponentFactory(PanelComponent);
				ref = target.createComponent(compFactory);
				obj = <PanelComponent> ref.instance
				className = "PanelComponent";
				break;

			default:
				throw "Błędny typ komponentu";
		}

		//endof zniknie

		// ref = target.createComponent(compFactory);
		// obj = <FrontEndClass> ref.instance

		for (var elem in jsonObject) {
			if (elem == "children") {
				for (var i = 0; i < jsonObject.children.length; i++) {
					this.createFromJSON(jsonObject.children[i], factory, obj.target);
				}
			} else if (elem != "type" && elem != "id") {
				//renderInstr[className][elem](obj, jsonObject[elem]);
				this.setObjectProperty(className, elem, obj, jsonObject[elem]);

			}
		}

		return <RenderFromJSON> obj;

	}

	static setObjectProperty(className: string, jsonElem: string, obj: any, val: any) {
		renderInstr[className][jsonElem](obj, val);
	}
}
