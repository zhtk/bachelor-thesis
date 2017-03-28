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
  fullscreen : boolean;
  constructor()
  {
    this.hidden = true;
    this.resized = true;
    this.fullscreen = false;
  }
    exit() : void
    {
      this.hidden = false;
    }
    
    resize():void
    {
      this.resized = !this.resized;
      this.fullscreen = false;
    }

    maximize():void
    {
      this.fullscreen = !this.fullscreen;
    }
}