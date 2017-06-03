import {
    Component, Input, OnInit, ViewChildren, ViewContainerRef, ViewChild,
    ReflectiveInjector, ComponentFactoryResolver,
    QueryList, ElementRef, TemplateRef
} from '@angular/core'
import {TextBox} from "./Components/FormComponents/TextBox/TextBox";
import {ComponentCreator} from "./Components/ComponentsCore/ComponentCreator";
import { LAYOUT } from './500plus/mock-form'
import { HOME } from './home_components/home-json'
import {ActivatedRoute} from "@angular/router";
import { MicroServicesService } from './service/micro-services.service';

@Component
({
    selector: 'testowe',
    templateUrl: '../pages/test.html',
})
export class TestComponent implements OnInit
{
    factory: ComponentFactoryResolver;
    pageJSON: string // = HOME;
    pages = {
        'piecset' : LAYOUT,
        'main' : HOME
    };

    constructor(private route: ActivatedRoute, public cfr: ComponentFactoryResolver,
                private msService: MicroServicesService) {
        this.factory = cfr;
        console.log("niebywałe")
        console.log(this.route.snapshot.params['name']);
        console.log(this.pages[this.route.snapshot.params['name']]);
        
    }

    @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

    ngOnInit(): void {
        console.log("rozwazany json:")
        console.log(this.pageJSON);
        if (this.pages[this.route.snapshot.params['name']] != undefined) {
            this.pageJSON = this.pages[this.route.snapshot.params['name']];
            this.renderService();
        }
        else {
            this.msService.getFormJSON(this.route.snapshot.params['name'])
                .then(resp => {
                    this.pageJSON = JSON.stringify(resp);
                    this.renderService();
            });
        }
    }

    private renderService() {
        var parsed = JSON.parse(this.pageJSON)["components"];
        for (var elem = 0; elem < parsed.length; elem++)
        {
            var added = ComponentCreator.createFromJSON(
            parsed[elem], this.cfr, this.target)

            // var added = ComponentCreator.insertComponent(
            //   this.cfr, this.target, parsed[elem]["type"]);
            // added.renderJSON(parsed[elem]);
        }
        setTimeout(() => { this.fillDefaults() }, 3000); // for demo only
    }

    private fillDefaults() {
        console.log("sprawdzam...")
        console.log(this.pageJSON);
        console.log("zagladne na url " + JSON.parse(this.pageJSON)["fill-url"])
        this.msService.getFormPrefill(JSON.parse(this.pageJSON)["fill-url"])
        .then(resp => this.applyFill(resp));
    }

    private applyFill(valuesList: Object) {
        for (var v of Object.keys(valuesList)) {
            if (document.getElementById(v)) {
                (<HTMLInputElement> document.getElementById(v)).value = valuesList[v];
                (<HTMLInputElement> document.getElementById(v)).disabled = true;
            }
            else {
                console.log(typeof(v))
            }
        }
    }

}
