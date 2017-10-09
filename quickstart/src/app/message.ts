export class Message {
	constructor() {
		this.id = -1;
		this.topic = "";
		this.content = "";
		this.date = "";
		this.from = "";
		this.toWho = "";
	}

	id: number;
	topic: string;
	content: string;
	date: string;
	from: string;
	toWho: string;
}