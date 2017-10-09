import { Component } from '@angular/core';
import { Notify } from './notifications.component';
import { NotificationsService } from '../service/notifications.service';

export class User {
	
	name:String;
	surname:String;
	nick:String;
}


@Component({
	selector: 'home',
	templateUrl: 'pages/home_subpages/home.html',
})

export class HomeComponent {

	private notifValues: {positive: number; negative: number; pending: number; } = 
		{positive: 0, negative: 0, pending: 0 };

	constructor(private notifService: NotificationsService) {
		this.notifService.getNotificationPositive().then(numb => 
		{
			this.notifValues.positive = numb;
		});

		this.notifService.getNotificationNegative().then(numb => 
		{
			this.notifValues.negative = numb;
		});

		this.notifService.getNotificationPending().then(numb => 
		{
			this.notifValues.pending = numb;
		});		
	}

	user : User = {
		name : "Jan",
		surname : "Kowalski",
		nick : "Janek77",
	}


}
