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
var Msg = (function () {
    function Msg() {
    }
    return Msg;
}());
exports.Msg = Msg;
var MESSAGES = [
    { hidden: false, id: '0', title: 'Twój pracownik Michał Lewandowski zaczał zwolnienie lekarskie.',
        message: '<ul><li>Czas trwania: 10.02 - 17.02</li><li>Lekarz wystawiający: Dr. Wstrząs</li><li>Przyczyna: Paluszek i główka</li></ul> ' },
    { hidden: false, id: '1', title: 'Nie odprowadziłeś jeszcze składki za miesiąc luty.',
        message: 'Kwota : 1200 PLN' },
    { hidden: false, id: '2', title: 'Wezwanie na komisje lekarską',
        message: '' },
];
var Notify = (function () {
    function Notify() {
        this.msgs = MESSAGES;
        this.count = MESSAGES.length;
    }
    Notify.prototype.hide = function (hero) {
        hero.hidden = true;
        this.count--;
        //var id:number = +hero.id;
        //MESSAGES.slice(id, 1);
    };
    Notify = __decorate([
        core_1.Component({
            selector: 'notify',
            templateUrl: 'pages/home_subpages/notify.html',
            styleUrls: ['app/home.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], Notify);
    return Notify;
}());
exports.Notify = Notify;
//# sourceMappingURL=notifications.component.js.map