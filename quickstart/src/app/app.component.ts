import { Component } from '@angular/core';
import { MenuService } from './menu-service';
import { MessagesService } from './service/messages.service';
import { EmailService } from './service/email.service';

@Component({
  selector: 'my-app',
  templateUrl: 'pages/mockup.html',
  providers: [MenuService, MessagesService, EmailService]
})
export class AppComponent {}
