import {
    Component, Input, OnInit, ViewChildren, ViewContainerRef, ViewChild,
    ReflectiveInjector, ComponentFactoryResolver,
    QueryList, ElementRef, TemplateRef
} from '@angular/core'
import {Location} from '@angular/common';
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
    template: 
    `
        <button class="btn btn-info" style="margin-bottom: 10px;" routerLink="/sublist" routerLinkActive="active">
        Wróć do listy wniosków</button>
        <template #target></template>
    `
})
export class PreviewComponent implements OnInit
{
    factory: ComponentFactoryResolver;
    pageJSON: string // = HOME;
    fillJson: any;
    pages = {
        'piecset' : LAYOUT,
        'main' : HOME
    };


    constructor(private route: ActivatedRoute, public cfr: ComponentFactoryResolver,
                private msService: MicroServicesService, private location: Location ) {
        this.factory = cfr;        
    }

    @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;


    ngOnInit(): void {
    
        this.msService.getFormJSON(this.route.snapshot.params['name'])
            .then(resp => {
                this.pageJSON = JSON.stringify(resp);
        })
            .then(() => this.getFillForm())
            .then(() => this.presetDynamicLists())
    }

    private renderService() {
        var parsed = JSON.parse(this.pageJSON)["components"];
        for(var elem = 0; elem < parsed.length; elem++)
        {
            var added = ComponentCreator.createFromJSON(
            parsed[elem], this.cfr, this.target)

        }
        
    }

    private getFillForm() {
        return this.msService.getFormAnswers(this.route.snapshot.params['name'], this.route.snapshot.params['id'])
            .then(res => {
                this.fillJson = res;
            })
    }

    private presetDynamicLists() {
        var allJson = JSON.parse(this.pageJSON);
        var jsonList = allJson["components"];
        var fullValuesList = this.fillJson;

        jsonList = this.setDLRecurse(jsonList);

        allJson["components"] = jsonList;
        this.pageJSON = JSON.stringify(allJson);

        this.renderService()
        this.modifyFillFields()
        setTimeout(() => this.fillForm(this.fillJson), 2000 );
    }

    private setDLRecurse (jsonList: any) {
        var toReturn: any[] = [];

        for (var obj of jsonList) {
            if (obj["type"] == "DynamicList") {
                this.DynamicListIdSet.push(obj["id"]);
                var findValue = this.fillJson[obj["id"]]; // to jest ta tablica np. czlonkowieRodziny
                obj["startChildCount"] = findValue.length;
            }
            // ustaw potomkow
            if (obj["children"]) {
                obj["children"] = this.setDLRecurse(obj["children"]);
            }

            toReturn.push(obj);
        }
        return toReturn;
    }
    
    private DynamicListIdSet: string[] = [];

    private modifyFillFields() {
        var jsonList = JSON.parse(this.pageJSON);
        var valuesList = this.fillJson;

        for (var obj of this.DynamicListIdSet) {

            var findValue = valuesList[obj]; // to jest ta tablica np. czlonkowieRodziny
            for (var i = 0; i < findValue.length; i++) {
                var arrayKeys: string[] = Object.keys(valuesList[obj][i])
                for (var k of arrayKeys) {
                    var new_field = k + "_" + (i + 1).toString();
                    valuesList[obj][i][new_field] = valuesList[obj][i][k];

                }
            }
        }

        this.fillJson = valuesList;
    }

    private fillForm(valuesList: Object) {
        for (let el of this.DynamicListIdSet) {
            var partObject = valuesList[el];
                for (let i of partObject) // i jest obiektem
                    for (let field of Object.keys(i)) {
                        valuesList[field] = i[field];
                    }
        }

        //TODO: http.get wartości od this.route.snapshot.params['id'] czyli id wniosku
        for (var v of Object.keys(valuesList)) {
            if (document.getElementById(v)) {
                (<HTMLInputElement> document.getElementById(v)).value = valuesList[v];
                (<HTMLInputElement> document.getElementById(v)).disabled = true;
            }
        }

    }

    private goBack() {
        this.location.back();
    }

}
