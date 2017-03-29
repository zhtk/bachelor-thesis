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
var Zwolnienie = (function () {
    function Zwolnienie() {
    }
    return Zwolnienie;
}());
exports.Zwolnienie = Zwolnienie;
var zwolnienia = [
    { 'id': '0', name: 'Jan', surname: "ZKowalski", from: '01-02-2017', to: '08-02-2017', illness: 'Grypa' },
    { 'id': '1', name: 'Marek', surname: "YKowalski", from: '02-02-2017', to: '10-02-2017', illness: 'Grypa' },
    { 'id': '2', name: 'Janusz', surname: "CKowalski", from: '03-02-2017', to: '11-02-2017', illness: 'Grypa' },
    { 'id': '3', name: 'Albert', surname: "AKowalski", from: '04-02-2017', to: '12-02-2017', illness: 'Grypa' },
    { 'id': '4', name: 'Xyzal', surname: "BKowalski", from: '08-02-2017', to: '14-02-2017', illness: 'Grypa' },
];
var ListaComponent = (function () {
    function ListaComponent() {
        this.lista = zwolnienia;
        this.name_sorted = false;
        this.surname_sorted = false;
        this.from_sorted = false;
        this.to_sorted = false;
        this.illness_sorted = false;
    }
    ListaComponent.prototype.sort = function (which) {
        if (which == "name") {
            if (this.name_sorted)
                zwolnienia.sort(cmp_name);
            else
                zwolnienia.sort(cmp_name_reserve);
            this.name_sorted = !this.name_sorted;
        }
        else if (which == "surname") {
            if (this.surname_sorted)
                zwolnienia.sort(cmp_surname);
            else
                zwolnienia.sort(cmp_surname_reserve);
            this.surname_sorted = !this.surname_sorted;
        }
        else if (which == "from") {
            if (this.from_sorted)
                zwolnienia.sort(cmp_from);
            else
                zwolnienia.sort(cmp_from_reserve);
            this.from_sorted = !this.from_sorted;
        }
        else if (which == "to") {
            if (this.to_sorted)
                zwolnienia.sort(cmp_to);
            else
                zwolnienia.sort(cmp_to_reserve);
            this.to_sorted = !this.to_sorted;
        }
        else {
            if (this.illness_sorted)
                zwolnienia.sort(cmp_illness);
            else
                zwolnienia.sort(cmp_illness_reserve);
            this.illness_sorted = !this.illness_sorted;
        }
    };
    ListaComponent = __decorate([
        core_1.Component({
            selector: 'zwolnienielista',
            templateUrl: 'pages/leave_subpages/list_of_leaves.html',
        }), 
        __metadata('design:paramtypes', [])
    ], ListaComponent);
    return ListaComponent;
}());
exports.ListaComponent = ListaComponent;
function cmp_name(a, b) {
    if (a.name > b.name)
        return 1;
    else
        return -1;
}
function cmp_name_reserve(a, b) {
    return (-1) * cmp_name(a, b);
}
function cmp_surname(a, b) {
    if (a.surname > b.surname)
        return 1;
    else
        return -1;
}
function cmp_surname_reserve(a, b) {
    return (-1) * cmp_surname(a, b);
}
function cmp_illness(a, b) {
    if (a.illness > b.illness)
        return 1;
    else
        return -1;
}
function cmp_illness_reserve(a, b) {
    return (-1) * cmp_illness(a, b);
}
function cmp_to(a, b) {
    var suma = Number(a.to.split("-")[0]) + Number(a.to.split("-")[1]) + Number(a.to.split("-")[2]);
    var sumb = Number(b.to.split("-")[0]) + Number(b.to.split("-")[1]) + Number(b.to.split("-")[2]);
    if (suma > sumb)
        return 1;
    else
        return -1;
}
function cmp_to_reserve(a, b) {
    return (-1) * cmp_to(a, b);
}
function cmp_from(a, b) {
    var suma = Number(a.from.split("-")[0]) + Number(a.from.split("-")[1]) + Number(a.from.split("-")[2]);
    var sumb = Number(b.from.split("-")[0]) + Number(b.from.split("-")[1]) + Number(b.from.split("-")[2]);
    if (suma > sumb)
        return 1;
    else
        return -1;
}
function cmp_from_reserve(a, b) {
    return (-1) * cmp_from(a, b);
}
//# sourceMappingURL=list-leaves-component.js.map