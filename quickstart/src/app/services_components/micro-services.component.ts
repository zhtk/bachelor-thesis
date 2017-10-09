import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

import { MsTile }  from '../mstile';
import { MicroServicesService } from '../service/micro-services.service';

const FilterTags: string[] = ['renta', 'urlop', 'zwolnienie', 'emerytura', 'skladki'];

@Component({
  selector: 'services',
  templateUrl: 'pages/services_subpages/micro.html',
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
        
        this.msService.getGrid().then(gridjson => 
        {
            this.servicesList = gridjson;
            for (let s of this.servicesList) {
                this.tags.add(s.tag);
            }
            this.tagStyles = Array(this.servicesList.length).fill("label label-primary");            
        });
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
