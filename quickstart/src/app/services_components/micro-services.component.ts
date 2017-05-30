import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

//import {MenuService} from './menu-service'
import { MsTile }  from '../mstile';
import { MicroServicesService } from '../service/micro-services.service';

const FilterTags: string[] = ['renta', 'urlop', 'zwolnienie', 'emerytura', 'skladki'];

@Component({
  selector: 'services',
  templateUrl: 'pages/services_subpages/micro.html',
  //providers: [MenuService]
})
export class ServicesComponent implements OnInit {
    tags: Set<string>;
    tagStyles : string[];
    category:string[];
    servicesList: MsTile[];
    showStyle: false;
    profile = {};
    test:string;


    constructor(private msService: MicroServicesService) {
        this.category = [];
        this.tagStyles = new Array();
        this.tags = new Set<string>();
    }

    ngOnInit(): void {
        //this.menuService
        //.getAll2()
        //.subscribe(p => this.test = p, err => console.log(err));
        
        this.msService.getGrid().then(gridjson => 
        {
            console.log("dostalem kafelki");
            this.servicesList = gridjson;
            for (let s of this.servicesList) {
                this.tags.add(s.tag);
            }
            console.log(this.servicesList);
            this.tagStyles = Array(this.servicesList.length).fill("label label-primary");

            // IntervalObservable
            //     .create(this.REFRESH_RATE)
            //     .subscribe(
            //             () => {
            //             this.msService.getGrid().then(gridjson => { this.servicesList = gridjson });
            //         );
            
        });

        console.log("okej")
    }
    
    filter(what: string, index :number): void {
        if(this.tagStyles[index] == "label label-primary")
        {
            this.category.push(what);
            this.tagStyles[index] = "label label-success";
        }
        else
        {
            this.category.splice(this.category.indexOf(what),1);
            this.tagStyles[index] = "label label-primary";
        }
    }

}





