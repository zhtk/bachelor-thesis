import {RowComponent} from "../FrontComponents/RowComponent";
import {PeselComponent} from "../FormComponents/TextBox/PeselComponent";
import {PasswordComponent} from "../FormComponents/TextBox/PasswordComponent";
import {ZipcodeComponent} from "../FormComponents/TextBox/PostalCodeComponent";
import {LabelComponent} from "../FrontComponents/LabelComponent";
import {TextBox} from "../FormComponents/TextBox/TextBox";
import {PanelComponent} from "../FrontComponents/PanelComponent";
import {Component, ComponentFactoryResolver,
	ViewContainerRef} from "@angular/core";
import {SubmitComponent} from "../FormComponents/SubmitComponent";
import { ProgressBarComponent } from '../FormComponents/ProgressBarComponent';
import {FormComponent} from "../FormComponents/FormComponent";
import {HeadingComponent} from "../FrontComponents/HeadingComponent";
import {PanelGroupComponent} from "../FrontComponents/PanelGroupComponent";
import {ContentComponent} from "../FrontComponents/ContentComponent";
import {IconComponent} from "../FrontComponents/IconComponent";
import {SpanComponent} from "../FrontComponents/SpanComponent";

export class ComponentCreator {

	static componentMapping = {
		'TextBox': TextBox,
		'PanelGroup' : PanelComponent
	};

	static insertComponent(factory:ComponentFactoryResolver,
		target:ViewContainerRef, type: string):RenderFromJSON {
		// Rozwiazanie tymczasowe, z mapą z góry nie chce działać
		var compFactory: any;
		console.log("typ" + type);
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
}
