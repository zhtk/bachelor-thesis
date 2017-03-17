import { Component } from '@angular/core';



export class Service{
    id:String;
    title:String;
    description:String;
    hidden:Boolean;
}

const SERIVICES_LIST: Service[] = [
    {id : '0', title :'Nazwa', description : 'Opis' , hidden : false},
    {id : '1', title :'Nazwa', description : 'Opis' , hidden : false},
    {id : '2', title :'Nazwa', description : 'Opis' , hidden : false},
    {id : '3', title :'Nazwa', description : 'Opis' , hidden : false},

        
];


@Component({
  selector: 'services',
  templateUrl: 'pages/micro.html',
})
export class Services {
    list = SERIVICES_LIST;
}

