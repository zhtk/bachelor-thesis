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
    czas:number;
    dzien:string;
    potrzeba:number;

    sprawa(t : number)
    {
      this.potrzeba = t;
    }

    ngOnInit(): void {
      this.potrzeba = 0;
        this.wojewodztwo ='';
        this.gmina ='';
        this.powiat = '';
        this.urzad ='';
    }
  fakeArray = Array(30).fill("x");
  constructor()
  {
    var Wday: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var now = new Date;
    var prnDt = now.getUTCDate() + 1;
    this.czas = prnDt;
    this.dzien = Wday[now.getUTCDay() + 1];
  }
}
@Component({
  selector: 'urzedowanie',
  templateUrl: 'pages/urzad_godziny.html',
})
export class UrzedowanieComponent {

}
