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
import { VALUES } from './500plus/mock-form';

@Component
({
    selector: 'preview',
    //templateUrl: '../pages/test.html',
    template: 
    `
        <button class="btn btn-info" style="margin-bottom: 10px;">Wróć do listy wniosków</button>
        <template #target></template>
    `
})
export class PreviewComponent implements OnInit
{
    factory: ComponentFactoryResolver;
    pageJSON: string // = HOME;
    pages = {
        'piecset' : LAYOUT,
        'main' : HOME
    };

    constructor(private route: ActivatedRoute, public cfr: ComponentFactoryResolver,
                private msService: MicroServicesService ) {
        this.factory = cfr;        
    }

    @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;


    ngOnInit(): void {
    
        this.msService.getFormJSON(this.route.snapshot.params['name'])
            .then(resp => {
                console.log("rozwazany json:")
                console.log(resp);
                this.pageJSON = JSON.stringify(resp);
                this.renderService();
                
        })
            .then( () => this.fillForm() );
    }

    private renderService() {
        var parsed = JSON.parse(this.pageJSON)["components"];
        for(var elem = 0; elem < parsed.length; elem++)
        {
            var added = ComponentCreator.createFromJSON(
            parsed[elem], this.cfr, this.target)

            // var added = ComponentCreator.insertComponent(
            //   this.cfr, this.target, parsed[elem]["type"]);
            // added.renderJSON(parsed[elem]);
        }
        console.log("teraz wypelniam")
        
    }

    private fillForm() {
        var valuesList = JSON.parse(VALUES)
        console.log(valuesList)
        //TODO: http.get wartości od this.route.snapshot.params['id'] czyli id wniosku
        for (var v of Object.keys(valuesList)) {
            console.log("ustawie wartosc " + v)
            if (document.getElementById(v)) {
                console.log("ustawiona!");
                (<HTMLInputElement> document.getElementById(v)).value = valuesList[v];
            }
            else {
                console.log("nie znalazłem :c ")
                console.log(typeof(v))
            }
        }

    }

    sleep(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async demo() {
      await sleep(3000);
    }

}
