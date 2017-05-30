var express = require('express')
var proxyMiddleware = require('http-proxy-middleware');
var fallbackMiddleware = require('connect-history-api-fallback');
var grpc = require('grpc');
var morgan = require('morgan');

var authDescriptor = grpc.load(__dirname + '/auth/auth.proto');
var authChannel = new authDescriptor.AuthService('207.154.212.228:50051', grpc.credentials.createInsecure());

var proxy = proxyMiddleware({
  target: 'http://207.154.212.228:9000',
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    '^/api/' : '/'
  }
});

var app = express();
app.use(morgan('combined'));

app.get('/login', function (req, res) {
  if (req.query.login == null || req.query.password == null) {
    res.status(403).end();
    return;
  }
  console.log("przyszlo zapytanie");
  
  var loginData = {login: req.query.login, password: req.query.password};

  authChannel.getToken(loginData, function(err, data) {
    if (err) {
      res.status(404).end();
    } else {
      var status = data.status;
      var token = data.token;

      // Wypisz wynik do response
      if (status == 'OK') {
        res.send(token);
      } else {
        // Invalid login
        res.status(403).end();
      }
    }
  });
});

app.get('/logout', function (req, res) {
  if (req.query.token == null) {
    res.status(403).end();
    return;
  }
  
  var data = {token: req.query.token};
  authChannel.invalidateToken(data, function(err, data) {
    if (err) {
      res.status(404).end();
    } else {
      res.end();
    }
  });
});

const SENT_MESSAGES = [
  {id: 1, from: 'Adresat Pierwszy', date: '2017-04-01', topic: 'Dzień dobry', content: ' we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pain'},
  {id: 2, from: 'Pan Adresat', date: '2017-02-01', topic: 'Odprowadź składki!', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur'},
  {id: 3, from: 'Man Doe', date: '2017-06-01', topic: 'Re: Ważne!', content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?'},
  {id: 4, from: 'John Doe', date: '2017-01-01', topic: 'Re: Ważne!', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'},
  {id: 5, from: 'Abigail xxtt', date: '2017-01-01', topic: 'Re: Wniosek 500+', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum '},
  {id: 6, from: 'John Doe2', date: '2017-01-15', topic: 'Re: Re: Ważne!', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum '},
  {id: 7, from: 'John Doe1', date: '2017-01-11', topic: 'Ubezpiecz się', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum '},
];

const SERVICES_LIST = [
  {tag:"500_plus", id : '0', title :'Wniosek 500+', description : 'Złóż nowy wniosek' , hidden : false, renderInstr: null, redirectUrl: 'get500'},
  {tag:"zwolnienie", id : '1', title :'Zwolnienie lekarskie', description : 'Wystaw zwolnienie lekarskie' , hidden : false, renderInstr: null, redirectUrl: 'getZwoln'},
  {tag:"urlop", id : '2', title :'<Nazwa>', description : 'Krótki opis...' , hidden : false, renderInstr: null, redirectUrl: 'testt'},
  {tag:"zwolnienie", id : '3', title :'<Nazwa>', description : 'Wystawianie, sprawdzanie' , hidden : false, renderInstr: null, redirectUrl: 'testt'},
  {tag:"urlop", id : '4', title :'<Nazwa>', description : 'Krótki opis...' , hidden : false, renderInstr: null, redirectUrl: 'testt'},  
  {tag:"zwolnienie", id : '5', title :'<Nazwa>', description : 'Krótki opis...' , hidden : false, renderInstr: null, redirectUrl: 'testt'},    
  {tag:"zwolnienie", id : '6', title :'<Nazwa>', description : 'Krótki opis...' , hidden : false, renderInstr: null, redirectUrl: 'testt'},  
  {tag:"renta",  id : '7', title :'<Nazwa>', description : 'Krótki opis...' , hidden : false, renderInstr: null, redirectUrl: 'testt'},  
  {tag:"renta", id : '8', title :'<Nazwa>', description : 'Krótki opis...' , hidden : false, renderInstr: null, redirectUrl: 'testt'},  
];

const SMALL_FORM = 
{
  "components":
  [
    {
      "type": "PanelComponent",
      "id": "panel3",
      "size": {
      },
      "children": [
        {
          "type": "LabelComponent",
          "id": "test2",
          "size": {
            "large": 10,
          },
          "text": 
`5. Oświadczam, że orzeczeniem o niepełnosprawności lub orzeczeniem o umiarkowanym lub
znacznym stopniu niepełnosprawności legitymuje się następujące dziecko wchodzące w skład
rodziny (wypełnić tylko w przypadku ubiegania się o świadczenie wychowawcze na pierwsze dziecko
jeśli członkiem rodziny jest dziecko legitymujące się ww. orzeczeniem):`,
        },
        {
          "type": "RowComponent",
          "id": "row1",
          "children": [
            {
              "type": "TextBox",
              "id": "test1",
              "infoText" : "Imię i nazwisko dziecka",
              "defaultText": "Imię i nazwisko dziecka",
              "size": {
                "large": 10,
              },
            }
          ]
        },
      ]
    }
        
  ]
};

const BIG_FORM = 
{"send-url": "/api/write/plus500-send/","fill-url": "/plus500-fill/","components":[{"type":"Form","id":"500main", "form_action":"/api/write/plus500-send/", "method":"get","children":[{"type":"PanelComponent","collapsible":true,"hidable":true,"size":{"large":12},"title":"Wniosek o ustalenie prawa do świadczenia wychowawczego","children":[{"type":"PanelComponent","size":{"large":12},"children":[{"type":"RowComponent","id":"row1","children":[{"type":"TextBox","id":"wnioskodawca_imie","infoText":"Imię","defaultText":"Imię","size":{"large":5}},{"type":"TextBox","id":"wnioskodawca_nazwisko","infoText":"Nazwisko","defaultText":"Nazwisko","size":{"large":6}}]},{"type":"RowComponent","id":"row1","children":[{"type":"PeselComponent","id":"test1","defaultText":"PESEL","size":{"large":5}},{"type":"TextBox","id":"wnioskodawca_stan_cyw","infoText":"Stan cywilny","defaultText":"Stan cywilny","size":{"large":3}},{"type":"TextBox","id":"wnioskodawca_obywatelstwo","infoText":"Obywatelstwo","defaultText":"Obywatelstwo","size":{"large":4}}]},{"type":"RowComponent","id":"row1","children":[{"type":"TextBox","id":"wnioskodawca_miasto","infoText":"Miejscowość","defaultText":"Miejscowość","size":{"large":8}},{"type":"Zipcode","id":"wnioskodawca_zipcode","defaultText":"Kod Pocztowy","size":{"large":3}}]},{"type":"RowComponent","id":"row1","children":[{"type":"TextBox","id":"wnioskodawca_ulica","infoText":"Ulica","defaultText":"Ulica","size":{"large":5}},{"type":"TextBox","id":"wnioskodawca_nr_domu","infoText":"Numer Domu","defaultText":"Numer Domu","size":{"large":3}},{"type":"TextBox","id":"wnioskodawca_nr_mieszk","infoText":"Numer mieszkania","defaultText":"Numer mieszkania","size":{"large":3}}]}]},{"type":"PanelComponent","id":"panel1","size":{"large":10},"title":"2. Ustalenie prawa do świadczenia wychowawczego na pierwsze dziecko.","children":[{"type":"LabelComponent","id":"test2","text":"Świadczenie wychowawcze przysługuje na pierwsze dziecko jeżeli dochód rodziny w przeliczeniu na osobę nie przekracza kwoty 800,00 zł. Jeżeli członkiem rodziny jest dziecko niepełnosprawne, świadczenie wychowawcze na pierwsze dziecko przysługuje jeżeli dochód rodziny w przeliczeniu na osobę nie przekracza kwoty 1 200,00 zł. Pierwsze dziecko oznacza jedyne lub najstarsze dziecko w rodzinie w wieku do ukończenia\n\t\t18. roku życia; w przypadku dzieci urodzonych tego samego dnia, miesiąca i roku, będących\n\t\tnajstarszymi dziećmi w rodzinie w wieku do ukończenia 18. roku życia (czyli w przypadku wieloraczków) pierwsze dziecko oznacza jedno z tych dzieci wskazane przez\n\t\tosobę ubiegającą się.\n\t\tNiepełnosprawne dziecko oznacza dziecko legitymujące się orzeczeniem o niepełnosprawności\n\t\tokreślonym w przepisach o rehabilitacji zawodowej i społecznej oraz zatrudnianiu osób\n\t\tniepełnosprawnych albo orzeczeniem o umiarkowanym lub znacznym stopniu niepełnosprawności.","size":{"large":10}}]},{"type":"PanelComponent","id":"panel2","size":{"large":10},"collapsible":true,"title":"3. Ustalenie prawa do świadczenia wychowawczego na kolejne dziecko/dzieci w wieku poniżej\n\t\t18. roku życia, inne niż pierwsze dziecko.","children":[{"type":"LabelComponent","id":"test3","text":"Wnoszę o ustalenie prawa do świadczenia wychowawczego na następujące dzieci/dziecko\n\t\tzamieszkujące ze mną oraz pozostające na moim utrzymaniu (świadczenie wychowawcze na drugie\n\t\ti kolejne dziecko przysługuje do dnia ukończenia przez dziecko 18. roku życia i przysługuje niezależnie\n\t\tod osiągniętego dochodu):","size":{"large":12,"medium":12}},{"type":"PanelComponent","id":"panel3","title":"1. Dziecko","size":{"large":12},"children":[{"type":"RowComponent","id":"row1","children":[{"type":"TextBox","id":"dziecko1_imie","infoText":"Imię","defaultText":"Imię","size":{"large":4}},{"type":"TextBox","id":"dziecko1_nazwisko","infoText":"Nazwisko","defaultText":"Nazwisko","size":{"large":4}},{"type":"TextBox","id":"dziecko1_plec","infoText":"Płeć","defaultText":"Płeć","size":{"large":3}}]},{"type":"RowComponent","id":"row1","children":[{"type":"PeselComponent","id":"dziecko1_pesel","infoText":"PESEL","defaultText":"PESEL","size":{"large":2}},{"type":"TextBox","id":"dziecko1_stan_cyw","infoText":"Stan cywilny","defaultText":"Stan cywilny","size":{"large":3}},{"type":"TextBox","id":"dziecko1_obywat","infoText":"Obywatelstwo","defaultText":"Obywatelstwo","size":{"large":3}},{"type":"TextBox","id":"dziecko1_data_ur","infoText":"Data urodzenia","defaultText":"Data urodzenia","size":{"large":3}}]}]},{"type":"PanelComponent","id":"panel3","title":"2. Dziecko","size":{"large":12},"children":[{"type":"RowComponent","id":"row1","children":[{"type":"TextBox","id":"dziecko2_imie","infoText":"Imię","defaultText":"Imię","size":{"large":4}},{"type":"TextBox","id":"dziecko2_nazwisko","infoText":"Nazwisko","defaultText":"Nazwisko","size":{"large":4}},{"type":"TextBox","id":"dziecko2_plec","infoText":"Płeć","defaultText":"Płeć","size":{"large":3}}]},{"type":"RowComponent","id":"row1","children":[{"type":"PeselComponent","id":"dziecko2_pesel","infoText":"PESEL","defaultText":"PESEL","size":{"large":2}},{"type":"TextBox","id":"dziecko2_stan_cyw","infoText":"Stan cywilny","defaultText":"Stan cywilny","size":{"large":3}},{"type":"TextBox","id":"dziecko2_obywat","infoText":"Obywatelstwo","defaultText":"Obywatelstwo","size":{"large":3}},{"type":"TextBox","id":"dziecko2_data_ur","infoText":"Data urodzenia","defaultText":"Data urodzenia","size":{"large":3}}]}]},{"type":"PanelComponent","id":"panel3","title":"3. Dziecko","size":{"large":12},"children":[{"type":"RowComponent","id":"row1","children":[{"type":"TextBox","id":"dziecko3_imie","infoText":"Imię","defaultText":"Imię","size":{"large":4}},{"type":"TextBox","id":"dziecko3_nazwisko","infoText":"Nazwisko","defaultText":"Nazwisko","size":{"large":4}},{"type":"TextBox","id":"dziecko3_plec","infoText":"Płeć","defaultText":"Płeć","size":{"large":3}}]},{"type":"RowComponent","id":"row1","children":[{"type":"PeselComponent","id":"dziecko3_pesel","infoText":"PESEL","defaultText":"PESEL","size":{"large":2}},{"type":"TextBox","id":"dziecko3_stan_cyw","infoText":"Stan cywilny","defaultText":"Stan cywilny","size":{"large":3}},{"type":"TextBox","id":"dziecko3_obywat","infoText":"Obywatelstwo","defaultText":"Obywatelstwo","size":{"large":3}},{"type":"TextBox","id":"dziecko3_data_ur","infoText":"Data urodzenia","defaultText":"Data urodzenia","size":{"large":3}}]}]},{"type":"PanelComponent","id":"panel3","title":"4. Dziecko","size":{"large":12},"children":[{"type":"RowComponent","id":"row1","children":[{"type":"TextBox","id":"dziecko4_imie","infoText":"Imię","defaultText":"Imię","size":{"large":4}},{"type":"TextBox","id":"dziecko4_nazwisko","infoText":"Nazwisko","defaultText":"Nazwisko","size":{"large":4}},{"type":"TextBox","id":"dziecko4_plec","infoText":"Płeć","defaultText":"Płeć","size":{"large":3}}]},{"type":"RowComponent","id":"row1","children":[{"type":"PeselComponent","id":"dziecko4_pesel","infoText":"PESEL","defaultText":"PESEL","size":{"large":2}},{"type":"TextBox","id":"dziecko4_stan_cyw","infoText":"Stan cywilny","defaultText":"Stan cywilny","size":{"large":3}},{"type":"TextBox","id":"dziecko4_obywat","infoText":"Obywatelstwo","defaultText":"Obywatelstwo","size":{"large":3}},{"type":"TextBox","id":"dziecko4_data_ur","infoText":"Data urodzenia","defaultText":"Data urodzenia","size":{"large":3}}]}]}]},{"type":"PanelComponent","id":"panel3","size":{"large":10},"title":"4. Dane członków rodziny","collapsible":true,"children":[{"type":"LabelComponent","id":"test2","text":"Rodzina oznacza odpowiednio: małżonków, rodziców dzieci, opiekuna faktycznego dziecka\n\t\t(opiekun faktyczny dziecka to osoba faktycznie opiekującą się dzieckiem, jeżeli wystąpiła z wnioskiem\n\t\tdo sądu opiekuńczego o przysposobienie dziecka) oraz zamieszkujące wspólnie z tymi osobami,\n\t\tpozostające na ich utrzymaniu dzieci w wieku do ukończenia 25. roku życia, a także dzieci, które\n\t\tukończyły 25. rok życia, legitymujące się orzeczeniem o znacznym stopniu niepełnosprawności,\n\t\tjeżeli w związku z tą niepełnosprawnością przysługuje świadczenie pielęgnacyjne lub specjalny\n\t\tzasiłek opiekuńczy albo zasiłek dla opiekuna, o którym mowa w ustawie z dnia 4 kwietnia 2014 r.\n\t\to ustaleniu i wypłacie zasiłków dla opiekunów (Dz. U. z 2016 r. poz. 162). Do członków rodziny nie\n\t\tzalicza się dziecka pozostającego pod opieką opiekuna prawnego, dziecka pozostającego w\n\t\tzwiązku małżeńskim, a także pełnoletniego dziecka posiadającego własne dziecko.\n\t\tW przypadku gdy dziecko, zgodnie z orzeczeniem sądu, jest pod opieką naprzemienną obydwojga\n\t\trodziców rozwiedzionych, żyjących w separacji lub żyjących w rozłączeniu, dziecko zalicza się\n\t\tjednocześnie do członków rodzin obydwojga rodziców.\n\t\tOsoba samotnie wychowująca dziecko (oznacza to pannę, kawalera, wdowę, wdowca, osobę\n\t\tpozostającą w separacji orzeczonej prawomocnym wyrokiem sądu, osobę rozwiedzioną, chyba że\n\t\twychowuje wspólnie co najmniej jedno dziecko z jego rodzicem) nie wpisuje do składu rodziny\n\t\tdrugiego z rodziców dziecka.","size":{"large":10}},{"type":"LabelComponent","id":"test2","text":"W skład mojej rodziny zgodnie z ww. definicją wchodzą (zgodnie z ww. definicją należy wpisać\n\t\twszystkich członków rodziny osoby ubiegającej się o świadczenie wychowawcze, w tym dzieci\n\t\twskazane w tabeli A i B):","size":{"large":10}},{"type":"PanelComponent","id":"panel4","size":{"large":10},"children":[{"type":"RowComponent","id":"row1","children":[{"type":"TextBox","id":"czlonek1_imie","infoText":"Imię","defaultText":"Imię","size":{"large":4}},{"type":"TextBox","id":"czlonek1_nazwisko","infoText":"Nazwisko","defaultText":"Nazwisko","size":{"large":4}},{"type":"TextBox","id":"czlonek1_stopien_pokr","infoText":"Stopień pokrewieństwa","defaultText":"Stopień pokrewieństwa","size":{"large":3}}]},{"type":"RowComponent","id":"row1","children":[{"type":"PeselComponent","id":"czlonek1_pesel","infoText":"PESEL","defaultText":"PESEL","size":{"large":3}},{"type":"TextBox","id":"czlonek1_urzad_sk","infoText":"Urząd skarbowy","defaultText":"Urząd skarbowy","size":{"large":8}}]}]},{"type":"PanelComponent","id":"panel4","size":{"large":10},"children":[{"type":"RowComponent","id":"row1","children":[{"type":"TextBox","id":"test1","infoText":"Imię","defaultText":"Imię","size":{"large":4}},{"type":"TextBox","id":"test2","infoText":"Nazwisko","defaultText":"Nazwisko","size":{"large":4}},{"type":"TextBox","id":"test2","infoText":"Stopień pokrewieństwa","defaultText":"Stopień pokrewieństwa","size":{"large":3}}]},{"type":"RowComponent","id":"row1","children":[{"type":"PeselComponent","id":"test1","infoText":"PESEL","defaultText":"PESEL","size":{"large":3}},{"type":"TextBox","id":"test2","infoText":"Urząd skarbowy","defaultText":"Urząd skarbowy","size":{"large":8}}]}]},{"type":"PanelComponent","id":"panel4","size":{"large":10},"children":[{"type":"RowComponent","id":"row1","children":[{"type":"TextBox","id":"test1","infoText":"Imię","defaultText":"Imię","size":{"large":4}},{"type":"TextBox","id":"test2","infoText":"Nazwisko","defaultText":"Nazwisko","size":{"large":4}},{"type":"TextBox","id":"test2","infoText":"Stopień pokrewieństwa","defaultText":"Stopień pokrewieństwa","size":{"large":3}}]},{"type":"RowComponent","id":"row1","children":[{"type":"PeselComponent","id":"test1","infoText":"PESEL","defaultText":"PESEL","size":{"large":3}},{"type":"TextBox","id":"test2","infoText":"Urząd skarbowy","defaultText":"Urząd skarbowy","size":{"large":8}}]}]},{"type":"PanelComponent","id":"panel4","size":{"large":10},"children":[{"type":"RowComponent","id":"row1","children":[{"type":"TextBox","id":"test1","infoText":"Imię","defaultText":"Imię","size":{"large":4}},{"type":"TextBox","id":"test2","infoText":"Nazwisko","defaultText":"Nazwisko","size":{"large":4}},{"type":"TextBox","id":"test2","infoText":"Stopień pokrewieństwa","defaultText":"Stopień pokrewieństwa","size":{"large":3}}]},{"type":"RowComponent","id":"row1","children":[{"type":"PeselComponent","id":"test1","infoText":"PESEL","defaultText":"PESEL","size":{"large":3}},{"type":"TextBox","id":"test2","infoText":"Urząd skarbowy","defaultText":"Urząd skarbowy","size":{"large":8}}]}]},{"type":"PanelComponent","id":"panel4","size":{"large":10},"children":[{"type":"RowComponent","id":"row1","children":[{"type":"TextBox","id":"test1","infoText":"Imię","defaultText":"Imię","size":{"large":4}},{"type":"TextBox","id":"test2","infoText":"Nazwisko","defaultText":"Nazwisko","size":{"large":4}},{"type":"TextBox","id":"test2","infoText":"Stopień pokrewieństwa","defaultText":"Stopień pokrewieństwa","size":{"large":3}}]},{"type":"RowComponent","id":"row1","children":[{"type":"PeselComponent","id":"test1","infoText":"PESEL","defaultText":"PESEL","size":{"large":3}},{"type":"TextBox","id":"test2","infoText":"Urząd skarbowy","defaultText":"Urząd skarbowy","size":{"large":8}}]}]},{"type":"PanelComponent","id":"panel4","size":{"large":10},"children":[{"type":"RowComponent","id":"row1","children":[{"type":"TextBox","id":"test1","infoText":"Imię","defaultText":"Imię","size":{"large":4}},{"type":"TextBox","id":"test2","infoText":"Nazwisko","defaultText":"Nazwisko","size":{"large":4}},{"type":"TextBox","id":"test2","infoText":"Stopień pokrewieństwa","defaultText":"Stopień pokrewieństwa","size":{"large":3}}]},{"type":"RowComponent","id":"row1","children":[{"type":"PeselComponent","id":"test1","infoText":"PESEL","defaultText":"PESEL","size":{"large":3}},{"type":"TextBox","id":"test2","infoText":"Urząd skarbowy","defaultText":"Urząd skarbowy","size":{"large":8}}]}]},{"type":"PanelComponent","id":"panel4","size":{"large":10},"children":[{"type":"RowComponent","id":"row1","children":[{"type":"TextBox","id":"test1","infoText":"Imię","defaultText":"Imię","size":{"large":4}},{"type":"TextBox","id":"test2","infoText":"Nazwisko","defaultText":"Nazwisko","size":{"large":4}},{"type":"TextBox","id":"test2","infoText":"Stopień pokrewieństwa","defaultText":"Stopień pokrewieństwa","size":{"large":3}}]},{"type":"RowComponent","id":"row1","children":[{"type":"PeselComponent","id":"test1","infoText":"PESEL","defaultText":"PESEL","size":{"large":3}},{"type":"TextBox","id":"test2","infoText":"Urząd skarbowy","defaultText":"Urząd skarbowy","size":{"large":8}}]}]},{"type":"PanelComponent","id":"panel4","size":{"large":10},"children":[{"type":"RowComponent","id":"row1","children":[{"type":"TextBox","id":"test1","infoText":"Imię","defaultText":"Imię","size":{"large":4}},{"type":"TextBox","id":"test2","infoText":"Nazwisko","defaultText":"Nazwisko","size":{"large":4}},{"type":"TextBox","id":"test2","infoText":"Stopień pokrewieństwa","defaultText":"Stopień pokrewieństwa","size":{"large":3}}]},{"type":"RowComponent","id":"row1","children":[{"type":"PeselComponent","id":"test1","infoText":"PESEL","defaultText":"PESEL","size":{"large":3}},{"type":"TextBox","id":"test2","infoText":"Urząd skarbowy","defaultText":"Urząd skarbowy","size":{"large":8}}]}]}]},{"type":"PanelComponent","id":"panel3","title":"5. Oświadczenie o niepełnosprawności","size":{"large":10},"children":[{"type":"LabelComponent","id":"test2","size":{"large":10},"text":"Oświadczam, że orzeczeniem o niepełnosprawności lub orzeczeniem o umiarkowanym lub\n\t\tznacznym stopniu niepełnosprawności legitymuje się następujące dziecko wchodzące w skład\n\t\trodziny (wypełnić tylko w przypadku ubiegania się o świadczenie wychowawcze na pierwsze dziecko\n\t\tjeśli członkiem rodziny jest dziecko legitymujące się ww. orzeczeniem):"},{"type":"RowComponent","id":"row1","children":[{"type":"TextBox","id":"test1","infoText":"Imię i nazwisko dziecka","defaultText":"Imię i nazwisko dziecka","size":{"large":10}}]}]}]}]}]} ;

app.get('/get500', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(BIG_FORM));
});


const ZWOLNIENIE = 
{"components":[{"type":"Form","id":"zwolnienie_form","form_action":"/api/write/zwolnienie-send/","method":"get","children":[{"type":"RowComponent","id":"row1","children":[{"type":"PanelComponent","id":"panel1","title":"Dane ubezpieczonego","size":{"large":6},"children":[{"type":"RowComponent","id":"row11","children":[{"type":"TextBox","id":"imie_ubez","infoText":"Imię","defaultText":"Imię","size":{"large":6}},{"type":"TextBox","id":"nazwisko_ubez","infoText":"Nazwisko","defaultText":"Nazwisko","size":{"large":6}}]},{"type":"RowComponent","id":"row12","children":[{"type":"PeselComponent","id":"pesel_ubez","infoText":"PESEL","defaultText":"PESEL","size":{"large":6}},{"type":"TextBox","id":"data_ur_ubez","regex":"^[0-9]{4}-[0-9]{2}-[0-9]{2}$","infoText":"Data urodzenia (RRRR-MM-DD)","defaultText":"Data urodzenia","size":{"large":6}}]},{"type":"RowComponent","id":"row13","children":[{"type":"TextBox","id":"nip_ubez","infoText":"NIP","defaultText":"NIP","size":{"large":8}}]}]},{"type":"PanelComponent","id":"panel2","title":"Dane adresowe ubezpieczonego","size":{"large":6},"children":[{"type":"RowComponent","id":"row21","children":[{"type":"TextBox","id":"ulica_ubezp","infoText":"Ulica","defaultText":"Ulica","size":{"large":8}},{"type":"TextBox","id":"nr_domu_ubez","infoText":"Numer domu","defaultText":"Numer domu","size":{"large":2}},{"type":"TextBox","id":"nr_mieszk_ubez","infoText":"Mieszkanie","defaultText":"Mieszkanie","size":{"large":2}}]},{"type":"RowComponent","id":"row22","children":[{"type":"Zipcode","id":"kod_pocz_ubez","infoText":"Kod pocztowy","defaultText":"Kod pocztowy","size":{"large":6}},{"type":"TextBox","id":"miasto_ubez","infoText":"Miasto","defaultText":"Miasto","size":{"large":6}}]}]}]},{"type":"RowComponent","id":"row1","children":[{"type":"PanelComponent","id":"panel3","title":"Dane o niezdolności do pracy","size":{"large":8},"children":[{"type":"RowComponent","id":"row31","children":[{"type":"TextBox","id":"data_od","regex":"^[0-9]{4}-[0-9]{2}-[0-9]{2}$","infoText":"Początek zwolnienia (RRRR-MM-DD)","defaultText":"Data","size":{"large":6}},{"type":"TextBox","id":"data_do","regex":"^[0-9]{4}-[0-9]{2}-[0-9]{2}$","infoText":"Koniec zwolnienia (RRRR-MM-DD)","defaultText":"Data","size":{"large":6}}]},{"type":"RowComponent","id":"row32","children":[{"type":"TextBox","id":"id_choroby","infoText":"Numer referencyjny choroby","defaultText":"Numer","size":{"large":2}},{"type":"TextBox","id":"opis_choroby","infoText":"Opis choroby (opcjonalny)","defaultText":"Opis...","size":{"large":10}}]}]}]}]}]}

app.get('/getZwoln', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(ZWOLNIENIE));
});

const FILL_500 = {
  "wnioskodawca_imie": "Janusz",
  "wnioskodawca_nazwisko": "Tracz"
};

app.get('/plus500-fill', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(FILL_500));
});

app.get('/auth_check', function (req, res) {
  res.status(403).json({
        message: 'Jesteś zalogowany!'
    });
});


app.get('/msgget', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(SENT_MESSAGES));
});

app.get('/get_grid', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(SERVICES_LIST));
});

app.get('/getJSON', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(SMALL_FORM));
});

app.use('/api', proxy);

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/src' ));

app.get('*', function(req, res) {
  res.sendfile('./src/index.html');
});

app.listen(3000, function () {
  console.log('Server started on port 3000!')
});
