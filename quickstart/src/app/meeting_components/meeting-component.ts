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
    
    pathurl: string; 

    wojewodztwo:string;
    gmina:string;
    powiat:string;
    urzad:string;
    czas:number;
    dzien:string;
    potrzeba:number;
    sprawy: string [][];
    slots : string[];

    sprawa(index: number, t : number)
    {
      this.potrzeba = t;
      this.slots= this.sprawy[index];
    }

    ngOnInit(): void {
      this.sprawy =[];
      this.sprawy.push ( ["11:30", "13:10", "14:00"]);
      this.sprawy.push (["09:30", "12:10", "13:00"]);
      this.sprawy.push (["08:00", "10:10", "11:00"]);
      this.sprawy.push (["11:30", "12:15", "12:50"]);
      this.potrzeba = 0;
        this.wojewodztwo ='';
        this.gmina ='';
        this.powiat = '';
        this.urzad ='';
      this.pathurl = window.location.pathname;
      alert("siema")
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

