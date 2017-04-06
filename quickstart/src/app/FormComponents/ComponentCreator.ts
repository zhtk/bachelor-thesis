import {RowComponent} from "./RowComponent";
import {PeselComponent} from "./PeselComponent";
import {PasswordComponent} from "./PasswordComponent";
import {TextBox} from "./TextBox";
import {PanelGroupComponent} from "./PanelGroupComponent";
import {Component, ComponentFactoryResolver, ViewContainerRef} from "@angular/core";
import {MicroService} from "./MicroService";

export class ComponentCreator {

	static componentMapping = {
		'TextBox': TextBox,
		'PanelGroup' : PanelGroupComponent
	};

	static insertComponent(factory:ComponentFactoryResolver, target:ViewContainerRef, type: string):FEComponent {
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
		
			default: // powinno byc explicite
			compFactory = factory.resolveComponentFactory(PanelGroupComponent);
			break;
		}
			
		const ref = target.createComponent(compFactory);
		return <FEComponent> ref.instance;
	}
	// TODO refactor!!!
}
