import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'meeting',
  templateUrl: 'pages/meetup.html',
})
export class MeetingComponent {

}

@Component({
  selector: 'meeting',
  templateUrl: 'pages/kolejka.html',
})
export class KolejkaComponent {

}


@Component({
  selector: 'meeting',
  templateUrl: 'pages/umow.html',
})
export class UmowComponent implements OnInit {
 

    wojewodztwo:string;
    gmina:string;
    powiat:string;
    urzad:string;

    
    ngOnInit(): void {
        this.wojewodztwo ='';
        this.gmina ='';
        this.powiat = '';
        this.urzad ='';
    }
}
