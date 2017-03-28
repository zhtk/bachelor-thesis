"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
//import {MenuService} from './menu-service'
var Service = (function () {
    function Service() {
    }
    return Service;
}());
exports.Service = Service;
var FilterTags = ['renta', 'urlop', 'Zwolnienie', 'emerytura', 'skladki'];
var SERIVICES_LIST = [
    { tag: "renta", id: '0', title: 'Nazwa', description: 'Opis', hidden: false },
    { tag: "emerytura", id: '1', title: 'Nazwa', description: 'Opis', hidden: false },
    { tag: "urlop", id: '2', title: 'Nazwa', description: 'Opis', hidden: false },
    { tag: "Zwolnienie", id: '3', title: '', description: 'Wystawianie, sprawdzanie', hidden: false },
    { tag: "urlop", id: '4', title: 'Nazwa', description: 'Opis', hidden: false },
    { tag: "zwolnienie", id: '5', title: 'Nazwa', description: 'Opis', hidden: false },
    { tag: "zwolnienie", id: '6', title: 'Nazwa', description: 'Opis', hidden: false },
    { tag: "renta", id: '7', title: 'Nazwa', description: 'Opis', hidden: false },
    { tag: "renta", id: '8', title: 'Nazwa', description: 'Opis', hidden: false },
];
var ServicesComponent = (function () {
    function ServicesComponent() {
        this.tags = FilterTags;
        this.list = SERIVICES_LIST;
        this.profile = {};
        this.category = [];
        this.tagStyles = Array(SERIVICES_LIST.length).fill("label label-primary");
    }
    ServicesComponent.prototype.ngOnInit = function () {
        //this.menuService
        //.getAll2()
        //.subscribe(p => this.test = p, err => console.log(err));
        console.log("ok");
    };
    ServicesComponent.prototype.filter = function (what, index) {
        if (this.tagStyles[index] == "label label-primary") {
            this.category.push(what);
            this.tagStyles[index] = "label label-success";
        }
        else {
            this.category.splice(this.category.indexOf(what), 1);
            this.tagStyles[index] = "label label-primary";
        }
    };
    ServicesComponent = __decorate([
        core_1.Component({
            selector: 'services',
            templateUrl: 'pages/micro.html',
        }), 
        __metadata('design:paramtypes', [])
    ], ServicesComponent);
    return ServicesComponent;
}());
exports.ServicesComponent = ServicesComponent;
//# sourceMappingURL=micro-services.component.js.map