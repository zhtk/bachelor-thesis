import { Component, Input, OnInit } from '@angular/core';
import { EmailService } from '../service/email.service';

@Component({
	selector: 'email',
	templateUrl: 'pages/email.html',
})
export class EmailComponent implements OnInit{

	hidden : boolean;
	resized : boolean;
	fullscreen : boolean;

	addresser: string;
	topic: string;
	msgContent: string;

	constructor(private emailService: EmailService)
	{}

	ngOnInit() {
		this.hidden = true;
		this.resized = false;
		this.fullscreen = false;
	
		this.emailService.current$.subscribe(
			data => {
				this.addresser = data.from;
				this.msgContent = data.content;
				this.topic = "Re: " + data.topic;
				
				this.hidden = false;
			});
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
