import { Component } from '@angular/core';
import { Notify } from './notifications.component';

export class User {
  
  name:String;
  surname:String;
  nick:String;
}


@Component({
  selector: 'home',
  templateUrl: 'pages/home.html',
})
export class HomeComponent {
  user : User = {
    name : "Jan",
    surname : "Kowalski",
    nick : "Janek77",
  }
}
