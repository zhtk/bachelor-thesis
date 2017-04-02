import { Component } from '@angular/core';

export class Msg {
    id:String;
    title:String;
    message:String;
    hidden:Boolean;
}


const MESSAGES: Msg[] = [
  { hidden: false, id:'0', title: 'Twój pracownik Michał Lewandowski zaczał zwolnienie lekarskie.'
    , message: '<ul><li>Czas trwania: 10.02 - 17.02</li><li>Lekarz wystawiający: Dr. Wstrząs</li><li>Przyczyna: Paluszek i główka</li></ul> ' },
  { hidden: false, id:'1',title: 'Nie odprowadziłeś jeszcze składki za miesiąc luty.'
    , message: 'Kwota : 1200 PLN' },
  { hidden: false, id:'2', title: 'Wezwanie na komisje lekarską'
    , message: '' },
        
];


@Component({
  selector: 'notify',
  templateUrl: 'pages/home_subpages/notify.html',
})
export class Notify {
    
    msgs = MESSAGES;
    count = MESSAGES.length;

    hide(hero: Msg): void {
        hero.hidden = true;
        this.count--;
        //var id:number = +hero.id;
        //INBOX_MESSAGES.slice(id, 1);
    }
}