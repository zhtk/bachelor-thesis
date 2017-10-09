import { Component } from '@angular/core';

export class Zwolnienie {
    id:String;
    name:String;
    surname:String;
    from:String;
    to:String;
    illness:string;
}

const zwolnienia: Zwolnienie[] = [
  { 'id': '0', name: 'Jan', surname: "ZKowalski", from: '01-02-2017', to: '08-02-2017', illness:'Grypa'   },
   { 'id': '1', name: 'Marek', surname: "YKowalski", from: '02-02-2017', to: '10-02-2017', illness:'Grypa'   },
    { 'id': '2', name: 'Janusz', surname: "CKowalski", from: '03-02-2017', to: '11-02-2017', illness:'Grypa'   },
     { 'id': '3', name: 'Albert', surname: "AKowalski", from: '04-02-2017', to: '12-02-2017', illness:'Grypa'   },
      { 'id': '4', name: 'Xyzal', surname: "BKowalski", from: '08-02-2017', to: '14-02-2017', illness:'Grypa'   },
];


@Component({
  selector: 'zwolnienielista',
  templateUrl: 'pages/leave_subpages/list_of_leaves.html',
})
export class ListaComponent {

  lista = zwolnienia;
  name_sorted = false;
  surname_sorted = false;
  from_sorted = false;
  to_sorted = false;
  illness_sorted = false;

  sort(which : string)
  {
      if(which == "name")
      {
        if(this.name_sorted)
            zwolnienia.sort(cmp_name);
        else
            zwolnienia.sort(cmp_name_reserve);
        this.name_sorted = !this.name_sorted;

      }
      else if(which == "surname")
      {
         if(this.surname_sorted)
            zwolnienia.sort(cmp_surname);
        else
            zwolnienia.sort(cmp_surname_reserve);
        this.surname_sorted = !this.surname_sorted;

      }
      else if(which == "from")
      {
         if(this.from_sorted)
            zwolnienia.sort(cmp_from);
        else
            zwolnienia.sort(cmp_from_reserve);
        this.from_sorted = !this.from_sorted;

      }
    else if(which == "to")
      {
         if(this.to_sorted)
            zwolnienia.sort(cmp_to);
        else
            zwolnienia.sort(cmp_to_reserve);
        this.to_sorted = !this.to_sorted;

      }
      else
      {
         if(this.illness_sorted)
            zwolnienia.sort(cmp_illness);
        else
            zwolnienia.sort(cmp_illness_reserve);
        this.illness_sorted = !this.illness_sorted;
      }
  }
}
function cmp_name (a:Zwolnienie, b:Zwolnienie)
{

    if (a.name > b.name)
        return 1;
    else
        return -1;    
}
function cmp_name_reserve (a:Zwolnienie, b:Zwolnienie)
{
   return (-1) * cmp_name(a,b);  
}

function cmp_surname(a:Zwolnienie, b:Zwolnienie)
{

    if (a.surname > b.surname)
        return 1;
    else
        return -1;    
}
function  cmp_surname_reserve (a:Zwolnienie, b:Zwolnienie)
{
   return (-1) *  cmp_surname(a,b);  
}

function cmp_illness (a:Zwolnienie, b:Zwolnienie)
{

    if (a.illness > b.illness)
        return 1;
    else
        return -1;    
}
function cmp_illness_reserve (a:Zwolnienie, b:Zwolnienie)
{
   return (-1) * cmp_illness(a,b);  
}
function cmp_to (a:Zwolnienie, b:Zwolnienie)
{
    var suma = Number(a.to.split("-")[0]) + Number(a.to.split("-")[1]) + Number(a.to.split("-")[2])
    var sumb = Number(b.to.split("-")[0]) + Number(b.to.split("-")[1]) + Number(b.to.split("-")[2])
    if (suma > sumb)
        return 1;
    else
        return -1;    
}
function cmp_to_reserve (a:Zwolnienie, b:Zwolnienie)
{
   return (-1) * cmp_to(a,b);  
}

function cmp_from (a:Zwolnienie, b:Zwolnienie)
{
    var suma = Number(a.from.split("-")[0]) + Number(a.from.split("-")[1]) + Number(a.from.split("-")[2])
    var sumb = Number(b.from.split("-")[0]) + Number(b.from.split("-")[1]) + Number(b.from.split("-")[2])
    if (suma > sumb)
        return 1;
    else
        return -1;    
}
function cmp_from_reserve (a:Zwolnienie, b:Zwolnienie)
{
   return (-1) * cmp_from(a,b);  
}