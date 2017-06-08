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
    //directives: [ROUTER_DIRECTIVES],
    //templateUrl: '../pages/test.html'
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
                console.log("rozwazany json:")
                console.log(resp);
                this.pageJSON = JSON.stringify(resp);
        })
            .then(() => this.getFillForm())
            .then(() => this.presetDynamicLists())
            // .then(() => this.renderService())
            // .then(() => this.modifyFillFields())
            // .then( () => setTimeout(() => this.fillForm(this.fillJson), 3000 ));
    }

    private renderService() {
        var parsed = JSON.parse(this.pageJSON)["components"];
        for(var elem = 0; elem < parsed.length; elem++)
        {
            var added = ComponentCreator.createFromJSON(
            parsed[elem], this.cfr, this.target)

        }
        console.log("teraz wypelniam")
        
    }

    private getFillForm() {
        console.log("uważajcie")
        return this.msService.getFormAnswers(this.route.snapshot.params['name'], this.route.snapshot.params['id'])
            .then(res => {
                this.fillJson = res;
                console.log("bedzie filljson")
                console.log(this.fillJson)
                // this.fillForm(res);
            })
    }

    private presetDynamicLists() {
        // console.log("wchodze")
        var allJson = JSON.parse(this.pageJSON);
        var jsonList = allJson["components"];
        // console.log(jsonList)
        var fullValuesList = this.fillJson;

        jsonList = this.setDLRecurse(jsonList);

        allJson["components"] = jsonList;
        this.pageJSON = JSON.stringify(allJson);
        // console.log("i co wyszlo")
        // console.log(allJson) // smiga!

        this.renderService()
        this.modifyFillFields()
        setTimeout(() => this.fillForm(this.fillJson), 2000 );
    }

    private setDLRecurse (jsonList: any) {
        // console.log("rekursja")
        // console.log(jsonList)
        var toReturn: any[] = [];

        for (var obj of jsonList) {
            // console.log("obrot")
            // console.log(this.fillJson);
            if (obj["type"] == "DynamicList") {
                this.DynamicListIdSet.push(obj["id"]);
                var findValue = this.fillJson[obj["id"]]; // to jest ta tablica np. czlonkowieRodziny
                obj["startChildCount"] = findValue.length;
                // console.log("tablica " + obj["id"] + " ma pól " + findValue.length);
                // console.log(findValue);
            }
            // ustaw potomkow
            if (obj["children"]) {
                // console.log("dzieci")
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
        // console.log(this.DynamicListIdSet)
        // console.log("filllist przed")
        // console.log(valuesList)

        for (var obj of this.DynamicListIdSet) {

            var findValue = valuesList[obj]; // to jest ta tablica np. czlonkowieRodziny
            for (var i = 0; i < findValue.length; i++) {
                var arrayKeys: string[] = Object.keys(valuesList[obj][i])
                for (var k of arrayKeys) {
                    // console.log("pole " + k)
                    var new_field = k + "_" + (i + 1).toString();
                    // console.log("dostaje liftring na " + new_field)
                    valuesList[obj][i][new_field] = valuesList[obj][i][k];

                }
            }
        }

        // console.log("filllist po")
        // console.log(valuesList)
        this.fillJson = valuesList;
    }

    private fillForm(valuesList: Object) {
        //var valuesList = JSON.parse(VALUES);
        // console.log("wypelniam formularz")
        // console.log(valuesList)
        for (let el of this.DynamicListIdSet) {
            var partObject = valuesList[el];
                for (let i of partObject) // i jest obiektem
                    for (let field of Object.keys(i)) {
                        // console.log("pole " + field + " dostanie wartosc " + i[field])
                        valuesList[field] = i[field];
                    }
        }
        // console.log("@@@@przerobka")
        // console.log(valuesList);

        //TODO: http.get wartości od this.route.snapshot.params['id'] czyli id wniosku
        for (var v of Object.keys(valuesList)) {
            // console.log("ustawie wartosc " + v)
            if (document.getElementById(v)) {
                // console.log("ustawiona!");
                (<HTMLInputElement> document.getElementById(v)).value = valuesList[v];
                (<HTMLInputElement> document.getElementById(v)).disabled = true;
            }
            else {
                // console.log("nie znalazłem :c ")
                // console.log(typeof(v))
            }
        }

    }

    private goBack() {
        this.location.back();
    }

}
