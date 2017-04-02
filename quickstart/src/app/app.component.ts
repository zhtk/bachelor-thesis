import { Component } from '@angular/core';
import { MenuService } from './menu-service';
import { MessagesService } from './service/messages.service';
import { EmailService } from './service/email.service';
import { LocationProviderService } from './service/location-provider.service';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, 
	RoutesRecognized, Event } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: 'pages/mockup.html',
  providers: [MenuService, MessagesService, EmailService, LocationProviderService]
})
export class AppComponent {
	constructor(private router: Router, private locationProviderService: LocationProviderService) {
		this.router.events.subscribe(() => {
			this.locationProviderService.setWindowLocationPath(window.location.pathname);
		});
	}
}
