import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'lekarz',
  templateUrl: 'pages/leave_subpages/lekarz.html',
})
export class LekarzComponent implements OnInit {
  isPesel:boolean;

    ngOnInit(): void {
      this.isPesel = false;
    }

  name:string;
  surname:string;
  birthday:string;
  city:string;
  postal_code:string;
  street:string;
  house:string;
  flat:string;

    pesel()
    {
      this.name = "Jan";
      this.surname = "Kowalski";
      this.birthday = "1994.01.01";
      this.city = "Kielce";
      this.postal_code = "00-007";
      this.street= "Woronicza";
      this.house = "7";
      this.flat= "20";
      this.isPesel =true;
    }

}
