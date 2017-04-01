import { Component, Input } from '@angular/core';
import { EmailService } from '../service/email.service';

@Component({
	selector: 'email',
	templateUrl: 'pages/email.html',
})
export class EmailComponent {

	hidden : boolean;
	resized : boolean;
	fullscreen : boolean;

	@Input() addresser: string;
	@Input() topic: string;
	@Input() content: string;

	constructor(private emailService: EmailService)
	{
		this.hidden = false;
		this.resized = false;
		this.fullscreen = false;
	}
	exit() : void
	{
		this.hidden = true;
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
