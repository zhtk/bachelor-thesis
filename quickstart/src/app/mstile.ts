export class MsTile { //MicroserviceTile, kafelka na gridzie
    id: String;
    title: String;
    description: String;
    hidden: Boolean;
    tag: String;
    renderInstr: Object;
    redirectUrl: string;

    constructor() {
    	this.renderInstr = null;
    }
}