import { Component } from '@angular/core';
import { MessagesService } from '../service/messages.service';
import { EmailService } from '../service/email.service';
import { Message } from '../message';

@Component({
  selector: 'inbox',
  templateUrl: 'pages/home_subpages/inbox.html',
})
export class InboxComponent {
	inboxName : string;
	message_array: Message[];
	current_message: Message;
	SIZE_MAX = 150;

	constructor(private messagesService: MessagesService, private emailService: EmailService) {
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

	private getMsgById(id: number) {
		return this.message_array.filter(p => p.id == id)[0];
	}

	setFocus(what: number) {
		this.current_message = this.getMsgById(what);
	}

	private addRe(m: Message) {
		m.topic = "Re: " + m.topic;
		return m;
	}

	respond(id: number) {
		this.emailService.setMessageWindowContent(this.addRe(this.getMsgById(id)));
	}

	newMessage() {
		this.emailService.setMessageWindowContent(new Message());
	}
}
