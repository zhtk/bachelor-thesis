import { Component } from '@angular/core';

@Component({
  selector: 'messages',
  templateUrl: 'pages/home_subpages/messages.html',
})
export class MessagesComponent {
	inboxName : string;
	message: {
		topic: string,
		content: string,
		date: string,
		from: string,
	}

	constructor() {
		this.inboxName = "Nazwa skrzynki"
		this.message = {
			topic: "testowy temat",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			date: "2017-01-02",
			from: "John Doe"

		}
	}
}
