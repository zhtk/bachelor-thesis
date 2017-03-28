import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  //template: `<h2>OK!</h2>`
  templateUrl: 'pages/dashboard.html',
})
export class DashboardComponent {}


@Component({
  selector: 'email',
  templateUrl: 'pages/email.html',
})
export class EmailComponent {

  hidden : boolean;
  resized : boolean;
  constructor()
  {
    this.hidden = true;
    this.resized = true;
  }
    exit():void
    {
      this.hidden = false;
    }
       resize():void
    {
      this.resized = !this.resized;
    }
}