import { Component } from '@angular/core';



export class Service{
    id:String;
    title:String;
    description:String;
    hidden:Boolean;
    tag:String
}

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
    category="";
    list = SERIVICES_LIST;


    filter(what: string): void {
       this.category = what;
    }
}



