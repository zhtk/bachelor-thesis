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
var UmowComponent = (function () {
    function UmowComponent() {
        this.fakeArray = Array(30).fill("x");
        var Wday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var now = new Date;
        var prnDt = now.getUTCDate() + 1;
        this.czas = prnDt;
        this.dzien = Wday[now.getUTCDay() + 1];
    }
    UmowComponent.prototype.sprawa = function (index, t) {
        this.potrzeba = t;
        this.slots = this.sprawy[index];
    };
    UmowComponent.prototype.ngOnInit = function () {
        this.sprawy = [];
        this.sprawy.push(["11:30", "13:10", "14:00"]);
        this.sprawy.push(["09:30", "12:10", "13:00"]);
        this.sprawy.push(["08:00", "10:10", "11:00"]);
        this.sprawy.push(["11:30", "12:15", "12:50"]);
        this.potrzeba = 0;
        this.wojewodztwo = '';
        this.gmina = '';
        this.powiat = '';
        this.urzad = '';
        this.pathurl = window.location.pathname;
        alert("siema");
    };
    UmowComponent = __decorate([
        core_1.Component({
            selector: 'meeting',
            templateUrl: 'pages/meeting_subpages/booking_subpages/umow.html',
        }), 
        __metadata('design:paramtypes', [])
    ], UmowComponent);
    return UmowComponent;
}());
exports.UmowComponent = UmowComponent;
//# sourceMappingURL=umow-component.js.map