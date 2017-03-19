import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'render-menu',
	templateUrl: 'pages/render-test.html',
})

export class RenderComponent implements OnInit {
	@Input() menu: any = null;
	first: boolean = false;

	ngOnInit() {
		var init = JSON.parse('{"start":"/read/abc","menu":[{"nr":"0","name":"Albo tutaj","icon":"","link":"/view/abc","menu":[]},{"nr":"0","name":"Kliknij tutaj","icon":"","link":"/read/abc","menu":[{"nr":"0","name":"To jest w submenu","icon":"","link":"/read/abc","menu":[]},{"nr":"0","name":"To też","icon":"","link":"/read/abc","menu":[]}]}]}');
		if (!this.menu) {
			this.first = true;
			this.menu = init.menu
		}
		// sortowanie po nr
	}

	notEmpty() {
		return (this.menu.length > 0);
	}
}
