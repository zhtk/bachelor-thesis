import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { EmailService } from '../service/email.service';

@Component({
	selector: 'email',
	templateUrl: 'pages/email.html',
})
export class EmailComponent implements OnInit{

	hidden : boolean;
	resized : boolean;
	fullscreen : boolean;

	@Input() addresser: string;
	@Input() topic: string;
	@Input() msgContent: string;

	constructor(private emailService: EmailService) {}

	ngOnInit() {
		this.hidden = true;
		this.resized = false;
		this.fullscreen = false;
		
		if (this.checkForCache()) {
			this.hidden = false;

			this.addresser = localStorage.getItem("email-cache-addresser");
			this.topic = localStorage.getItem("email-cache-topic");
			this.msgContent = localStorage.getItem("email-cache-content");
		}

		this.emailService.current$.subscribe(
			data => {
				this.addresser = data.from;
				this.msgContent = data.content;
				this.topic = data.topic;
				
				this.hidden = false;
			});
	}

	checkForCache(): Boolean {
		return (
			(localStorage.getItem("email-cache-addresser") != null) ||
			(localStorage.getItem("email-cache-topic") != null) ||
			(localStorage.getItem("email-cache-content") != null)
			);
	}

	myOnChanges() {
		//console.log("mamy zmiane");
		localStorage.setItem("email-cache-addresser", this.addresser);
		localStorage.setItem("email-cache-topic", this.topic);
		localStorage.setItem("email-cache-content", this.msgContent);
	}
	
	clearCache() {
		localStorage.removeItem("email-cache-addresser");
		localStorage.removeItem("email-cache-topic");
		localStorage.removeItem("email-cache-content");
	}

	sendMessage() {
		// tu pojawi sie protokol przesyłania wiadomości
		
		this.clearCache();
		this.exit();
	}

	exit(): void
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
