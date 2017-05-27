import { Component } from '@angular/core';
import { MenuService } from './menu-service';
import { MessagesService } from './service/messages.service';
import { NotificationsService } from './service/notifications.service';
import { MicroServicesService } from './service/micro-services.service';
import { EmailService } from './service/email.service';
import { MyHttp } from './http.service';
import { LoginService } from './login.service';
import { LocationProviderService } from './service/location-provider.service';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, 
         RoutesRecognized, Event } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  //templateUrl: 'pages/mockup.html',
  providers: [ MenuService, MessagesService, NotificationsService, EmailService, LocationProviderService,
               MicroServicesService, LoginService, MyHttp ]
})
export class AppComponent {
    constructor(private router: Router, private locationProviderService: LocationProviderService) {
        this.router.events.subscribe(() => {
            this.locationProviderService.setWindowLocationPath(window.location.pathname);
        });
    }
}
