import { Component } from '@angular/core';

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
