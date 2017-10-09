import { Component, Input, OnInit } from '@angular/core';
import { LocationProviderService } from '../service/location-provider.service';

@Component({
	selector: 'breadcrumb',
	//template: ``,
	templateUrl: 'pages/breadcrumb.html',
})
export class BreadCrumbComponent implements OnInit{

	fullpath: string;
	pathElements: PathPair[];
	splitted: string[];
	activeLink: string;

	constructor(private locationProviderService: LocationProviderService) {}

	ngOnInit() {
		this.updateVariables(window.location.pathname);

		this.locationProviderService.current$.subscribe(
			data => {
				this.updateVariables(data);
			});
	}

	updateVariables(val: string) {
		this.fullpath = val;
		this.splitted = this.fullpath.split("/");
		this.pathElements = this.divideFullPath();
	}

	divideFullPath(): PathPair[] {

		var toReturn: PathPair[] = [];

		for (var i = 0; i < this.splitted.length; ++i) {
			toReturn[i] = new PathPair();
			if (i > 0) {
				toReturn[i].long = toReturn[i - 1].long + "/" + this.splitted[i];
			}
			else {
				toReturn[i].long = this.splitted[i];
			}
			toReturn[i].short = this.splitted[i];

		};
		toReturn.shift(); // pierwszy element to 2 puste stringi
		this.activeLink = toReturn.pop().short;

		return toReturn;
	}
}

class PathPair {
	constructor() {
		this.short = this.long = "";
	}

	short: string;
	long: string;
}

