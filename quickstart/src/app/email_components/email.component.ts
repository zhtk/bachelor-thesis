import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { EmailService } from '../service/email.service';
import { Message } from '../message'

@Component({
	selector: 'email',
	templateUrl: 'pages/email.html',
})
export class EmailComponent implements OnInit{

	hidden : boolean = true;
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
			console.log("zawartosc cache wiadomosci to:")

			var sumlen = 
				localStorage.getItem("email-cache-addresser").length +
				localStorage.getItem("email-cache-topic").length +
				localStorage.getItem("email-cache-content").length;

			if(sumlen > 0)
				this.hidden = false;
			else
				this.clearCache();

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

	private getDateFormatted() {
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1; //January is 0!
		var yyyy = today.getFullYear();

		return new String(yyyy + '-' + mm + '-' + dd);
	}

	sendMessage() {
		// tu pojawi sie protokol przesyłania wiadomości
		var toSend = new Message();
		toSend.topic = this.topic;
		toSend.content = this.msgContent;
		let today = new Date().toISOString().slice(0, 10);
		toSend.date = today;
		toSend.from = "USERNAME"; //TODO sciaganie
		toSend.toWho = this.addresser;

		this.emailService.sendMessage(toSend)
		// if response wyslania 200, to:
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
