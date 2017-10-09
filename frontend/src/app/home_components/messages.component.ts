import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessagesService } from '../service/messages.service';
import { EmailService } from '../service/email.service';
import { Message } from '../message';

@Component({
  selector: 'messages',
  templateUrl: 'pages/home_subpages/messages.html',
})
export class MessagesComponent {

	constructor
	(
		private router: Router,
		private messagesService: MessagesService,
		private emailService: EmailService
	) {}

	newMessage() {
		this.emailService.setMessageWindowContent(new Message());
	}
}
