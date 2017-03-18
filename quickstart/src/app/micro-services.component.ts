import { Component } from '@angular/core';


export class Service{
    id:String;
    title:String;
    description:String;
    hidden:Boolean;
    tag:String
}

const FilterTags: string[] = ['renta', 'urlop', 'zwolnienie', 'emerytura', 'skladki'];

const SERIVICES_LIST: Service[] = [
    {tag:"renta", id : '0', title :'Nazwa', description : 'Opis' , hidden : false},
    {tag:"emerytura", id : '1', title :'Nazwa', description : 'Opis' , hidden : false},
    {tag:"urlop", id : '2', title :'Nazwa', description : 'Opis' , hidden : false},
    {tag:"zwolnienie", id : '3', title :'Nazwa', description : 'Opis' , hidden : false},
    {tag:"urlop", id : '4', title :'Nazwa', description : 'Opis' , hidden : false},  
    {tag:"zwolnienie", id : '5', title :'Nazwa', description : 'Opis' , hidden : false},    
    {tag:"zwolnienie", id : '6', title :'Nazwa', description : 'Opis' , hidden : false},  
    {tag:"renta",  id : '7', title :'Nazwa', description : 'Opis' , hidden : false},  
    {tag:"renta", id : '8', title :'Nazwa', description : 'Opis' , hidden : false},  
];



@Component({
  selector: 'services',
  templateUrl: 'pages/micro.html',
})
export class ServicesComponent {
    tags = FilterTags;
    tagStyles : string[];
    category:string[];
    list = SERIVICES_LIST;
    showStyle: false;

    constructor() {
        this.category=[];
        this.tagStyles = Array(SERIVICES_LIST.length).fill("label label-primary");
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





