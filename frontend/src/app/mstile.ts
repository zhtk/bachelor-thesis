export class MsTile { //MicroserviceTile, kafelka na gridzie
    id: string;
    title: string;
    description: string;
    hidden: boolean;
    tag: string;
    
    renderInstr: Object;
    redirectUrl: string;

    constructor() {
    	this.renderInstr = null;
    }
}