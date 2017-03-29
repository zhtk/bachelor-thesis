import { Component } from '@angular/core';
import { MessagesService } from '../service/messages.service';
import { Message } from '../message';

@Component({
  selector: 'messages',
  templateUrl: 'pages/home_subpages/messages.html',
})
export class MessagesComponent {
	inboxName : string;
	message_array: Message[];
	current_message: Message;
	SIZE_MAX = 30;

	constructor(private messagesService: MessagesService) {
		this.inboxName = "Nazwa skrzynki"
		this.message_array = messagesService.getMessagesInbox();
		this.current_message = null;
		if (this.message_array.length != 0) {
			this.current_message = this.message_array[0];
		}
	}

	abbreviate(content: string) {
		if (content.length <= this.SIZE_MAX - 3)
			return content
		return content.substring(0, this.SIZE_MAX) + "...";
	}

	setFocus(what: number) {
		this.current_message = this.message_array.filter(p => p.id == what)[0];
	}
}
