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
  styleUrls: ['app/home.component.css'],
})
export class HomeComponent {
  user : User = {
    name : "Jan",
    surname : "Kowalski",
    nick : "Janek77",
  }
}
