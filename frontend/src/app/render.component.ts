import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from './menu-service';

@Component({
	selector: 'render-menu',
	templateUrl: 'pages/render-test.html',
})

export class RenderComponent implements OnInit {
	@Input() menu: any = null;
	first: boolean = false;

	constructor (private menuService: MenuService) {}

	ngOnInit() {
		var init = this.menuService.getAll();

		if (!this.menu) {
			this.first = true;
			this.menu = init.subscribe(p => this.menu = p)
		}
		// sortowanie po nr
	}

	notEmpty() {
		return (this.menu.length > 0);
	}
}
