const layout_dict =
	{
		"components":
		[
			{
				"type": "Form",
				"id": "500main",
				//"form_action": "500recieve",
				"method": "get",
				"children": [
					{
						"type": "PanelComponent",
						"collapse" : true,
						"hidable" : true,
						"size": {
							"large": 12,
						},
						"title": "Wniosek o ustalenie prawa do świadczenia wychowawczego",
						"children":
						[
							{
								"type": "PanelComponent",
								"size": {
									"large": 12,
								},
								"children":
								[

									{
										"type": "RowComponent",
										"id": "row1",
										"children": [
											{
												"type": "TextBox",
												"id": "test1",
												"infoText" : "Imię",
												"defaultText": "Imię",
												"size": {
													"large": 5,
												}
											},
											{
												"type": "TextBox",
												"id": "test2",
												"infoText" : "Nazwisko",
												"defaultText": "Nazwisko",
												"size": {
													"large": 6,
												},
											}
										]
									},
									{
										"type": "RowComponent",
										"id": "row1",
										"children": [
											{
												"type": "PeselComponent",
												"id": "test1",
												"defaultText": "PESEL",
												"size": {
													"large": 5,
												},
											},
											{
												"type": "TextBox",
												"id": "test2",
												"infoText" : "Stan cywilny",
												"defaultText": "Stan cywilny",
												"size": {
													"large": 3,
												},
											},
											{
												"type": "TextBox",
												"id": "test2",
												"infoText" : "Obywatelstwo",
												"defaultText": "Obywatelstwo",
												"size": {
													"large": 4,
												},
											}
										]
									},
									{
										"type": "RowComponent",
										"id": "row1",
										"children": [
											{
												"type": "TextBox",
												"id": "test1",
												"infoText" : "Miejscowość",
												"defaultText": "Miejscowość",
												"size": {
													"large": 8,
												},
											},
											{
												"type": "Zipcode",
												"id": "test2",
												"defaultText": "Kod Pocztowy",
												"size": {
													"large": 3,
												},
											}
										]
									},
									{
										"type": "RowComponent",
										"id": "row1",
										"children": [
											{
												"type": "TextBox",
												"id": "test1",
												"infoText" : "Ulica",
												"defaultText": "Ulica",
												"size": {
													"large": 5,
												},
											},
											{
												"type": "TextBox",
												"id": "test2",
												"infoText" : "Numer Domu",
												"defaultText": "Numer Domu",
												"size": {
													"large": 3,
												},
											},
											{
												"type": "TextBox",
												"id": "test2",
												"infoText" : "Numer mieszkania",
												"defaultText": "Numer mieszkania",
												"size": {
													"large": 3,
												},
											},

										]
									}
								]
							},
							{
								"type": "PanelComponent",
								"id": "panel1",
								"size": {
									"large": 10,
								},
								"title": "2. Ustalenie prawa do świadczenia wychowawczego na pierwsze dziecko.",
								"children": [
									{
										"type": "LabelComponent",
										"id": "test2",
										"text":
		`Świadczenie wychowawcze przysługuje na pierwsze dziecko jeżeli dochód rodziny w przeliczeniu na osobę nie przekracza kwoty 800,00 zł. Jeżeli członkiem rodziny jest dziecko niepełnosprawne, świadczenie wychowawcze na pierwsze dziecko przysługuje jeżeli dochód rodziny w przeliczeniu na osobę nie przekracza kwoty 1 200,00 zł. Pierwsze dziecko oznacza jedyne lub najstarsze dziecko w rodzinie w wieku do ukończenia
		18. roku życia; w przypadku dzieci urodzonych tego samego dnia, miesiąca i roku, będących
		najstarszymi dziećmi w rodzinie w wieku do ukończenia 18. roku życia (czyli w przypadku wieloraczków) pierwsze dziecko oznacza jedno z tych dzieci wskazane przez
		osobę ubiegającą się.
		Niepełnosprawne dziecko oznacza dziecko legitymujące się orzeczeniem o niepełnosprawności
		określonym w przepisach o rehabilitacji zawodowej i społecznej oraz zatrudnianiu osób
		niepełnosprawnych albo orzeczeniem o umiarkowanym lub znacznym stopniu niepełnosprawności.`,
										"size": {
											"large": 10,
										}
									}
								]
							},
							{
								"type": "PanelComponent",
								"id": "panel2",
								"size": {
									"large": 10,
								},
								"collapse" : true,
								"title": `3. Ustalenie prawa do świadczenia wychowawczego na kolejne dziecko/dzieci w wieku poniżej
		18. roku życia, inne niż pierwsze dziecko.`,
								"children": [
									{
										"type": "LabelComponent",
										"id": "test3",
										"text":
		`Wnoszę o ustalenie prawa do świadczenia wychowawczego na następujące dzieci/dziecko
		zamieszkujące ze mną oraz pozostające na moim utrzymaniu (świadczenie wychowawcze na drugie
		i kolejne dziecko przysługuje do dnia ukończenia przez dziecko 18. roku życia i przysługuje niezależnie
		od osiągniętego dochodu):`,
										"size": {
											"large": 12,
											"medium": 12
										}
									},
									{
										"type": "PanelComponent",
										"id": "panel3",
										"title": "1. Dziecko",
										"size": {
											"large": 12,
										},
										"children": [
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "TextBox",
														"id": "test1",
														"infoText" : "Imię",
														"defaultText": "Imię",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Nazwisko",
														"defaultText": "Nazwisko",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Płeć",
														"defaultText": "Płeć",
														"size": {
															"large": 3,
														},
													}
												]
											},
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "PeselComponent",
														"id": "test1",
														"infoText": "PESEL",
														"defaultText": "PESEL", //TODO samo się ustawia
														"size": {
															"large": 2,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Stan cywilny",
														"defaultText": "Stan cywilny",
														"size": {
															"large": 3,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Obywatelstwo",
														"defaultText": "Obywatelstwo",
														"size": {
															"large": 3,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Data urodzenia",
														"defaultText": "Data urodzenia",
														"size": {
															"large": 3,
														},
													}
												]
											}
										]
									},
									{
										"type": "PanelComponent",
										"id": "panel3",
										"title": "2. Dziecko",
										"size": {
											"large": 12,
										},
										"children": [
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "TextBox",
														"id": "test1",
														"infoText" : "Imię",
														"defaultText": "Imię",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Nazwisko",
														"defaultText": "Nazwisko",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Płeć",
														"defaultText": "Płeć",
														"size": {
															"large": 3,
														},
													}
												]
											},
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "PeselComponent",
														"id": "test1",
														"infoText": "PESEL",
														"defaultText": "PESEL", //TODO samo się ustawia
														"size": {
															"large": 2,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Stan cywilny",
														"defaultText": "Stan cywilny",
														"size": {
															"large": 3,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Obywatelstwo",
														"defaultText": "Obywatelstwo",
														"size": {
															"large": 3,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Data urodzenia",
														"defaultText": "Data urodzenia",
														"size": {
															"large": 3,
														},
													}
												]
											}
										]
									},
									{
										"type": "PanelComponent",
										"id": "panel3",
										"title": "3. Dziecko",
										"size": {
											"large": 12,
										},
										"children": [
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "TextBox",
														"id": "test1",
														"infoText" : "Imię",
														"defaultText": "Imię",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Nazwisko",
														"defaultText": "Nazwisko",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Płeć",
														"defaultText": "Płeć",
														"size": {
															"large": 3,
														},
													}
												]
											},
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "PeselComponent",
														"id": "test1",
														"infoText": "PESEL",
														"defaultText": "PESEL", //TODO samo się ustawia
														"size": {
															"large": 2,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Stan cywilny",
														"defaultText": "Stan cywilny",
														"size": {
															"large": 3,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Obywatelstwo",
														"defaultText": "Obywatelstwo",
														"size": {
															"large": 3,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Data urodzenia",
														"defaultText": "Data urodzenia",
														"size": {
															"large": 3,
														},
													}
												]
											}
										]
									},
									{
										"type": "PanelComponent",
										"id": "panel3",
										"title": "4. Dziecko",
										"size": {
											"large": 12,
										},
										"children": [
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "TextBox",
														"id": "test1",
														"infoText" : "Imię",
														"defaultText": "Imię",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Nazwisko",
														"defaultText": "Nazwisko",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Płeć",
														"defaultText": "Płeć",
														"size": {
															"large": 3,
														},
													}
												]
											},
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "PeselComponent",
														"id": "test1",
														"infoText": "PESEL",
														"defaultText": "PESEL", //TODO samo się ustawia
														"size": {
															"large": 2,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Stan cywilny",
														"defaultText": "Stan cywilny",
														"size": {
															"large": 3,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Obywatelstwo",
														"defaultText": "Obywatelstwo",
														"size": {
															"large": 3,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Data urodzenia",
														"defaultText": "Data urodzenia",
														"size": {
															"large": 3,
														},
													}
												]
											}
										]
									}
								]
							},
							{
								"type": "PanelComponent",
								"id": "panel3",
								"size": {
									"large": 10,
								},
								"title": "4. Dane członków rodziny",
								"collapse" : true,
								"children": [
									{
										"type": "LabelComponent",
										"id": "test2",
										"text":
		`Rodzina oznacza odpowiednio: małżonków, rodziców dzieci, opiekuna faktycznego dziecka
		(opiekun faktyczny dziecka to osoba faktycznie opiekującą się dzieckiem, jeżeli wystąpiła z wnioskiem
		do sądu opiekuńczego o przysposobienie dziecka) oraz zamieszkujące wspólnie z tymi osobami,
		pozostające na ich utrzymaniu dzieci w wieku do ukończenia 25. roku życia, a także dzieci, które
		ukończyły 25. rok życia, legitymujące się orzeczeniem o znacznym stopniu niepełnosprawności,
		jeżeli w związku z tą niepełnosprawnością przysługuje świadczenie pielęgnacyjne lub specjalny
		zasiłek opiekuńczy albo zasiłek dla opiekuna, o którym mowa w ustawie z dnia 4 kwietnia 2014 r.
		o ustaleniu i wypłacie zasiłków dla opiekunów (Dz. U. z 2016 r. poz. 162). Do członków rodziny nie
		zalicza się dziecka pozostającego pod opieką opiekuna prawnego, dziecka pozostającego w
		związku małżeńskim, a także pełnoletniego dziecka posiadającego własne dziecko.
		W przypadku gdy dziecko, zgodnie z orzeczeniem sądu, jest pod opieką naprzemienną obydwojga
		rodziców rozwiedzionych, żyjących w separacji lub żyjących w rozłączeniu, dziecko zalicza się
		jednocześnie do członków rodzin obydwojga rodziców.
		Osoba samotnie wychowująca dziecko (oznacza to pannę, kawalera, wdowę, wdowca, osobę
		pozostającą w separacji orzeczonej prawomocnym wyrokiem sądu, osobę rozwiedzioną, chyba że
		wychowuje wspólnie co najmniej jedno dziecko z jego rodzicem) nie wpisuje do składu rodziny
		drugiego z rodziców dziecka.`,
										"size": {
											"large": 10,
										}
									},

									{

										"type": "LabelComponent",
										"id": "test2",
										"text": 
		`W skład mojej rodziny zgodnie z ww. definicją wchodzą (zgodnie z ww. definicją należy wpisać
		wszystkich członków rodziny osoby ubiegającej się o świadczenie wychowawcze, w tym dzieci
		wskazane w tabeli A i B):`,
										"size": {
											"large": 10,
										}
									},
									{
										"type": "PanelComponent",
										"id": "panel4",
										"size": {
											"large": 10,
										},
										"children": [
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "TextBox",
														"id": "test1",
														"infoText" : "Imię",
														"defaultText": "Imię",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Nazwisko",
														"defaultText": "Nazwisko",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Stopień pokrewieństwa",
														"defaultText": "Stopień pokrewieństwa",
														"size": {
															"large": 3,
														},
													}
												]
											},
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "PeselComponent",
														"id": "test1",
														"infoText": "PESEL",
														"defaultText": "PESEL", //TODO samo się ustawia
														"size": {
															"large": 3,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Urząd skarbowy",
														"defaultText": "Urząd skarbowy",
														"size": {
															"large": 8,
														},
													}
													
												]
											}
										]
									},
									{
										"type": "PanelComponent",
										"id": "panel4",
										"size": {
											"large": 10,
										},
										"children": [
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "TextBox",
														"id": "test1",
														"infoText" : "Imię",
														"defaultText": "Imię",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Nazwisko",
														"defaultText": "Nazwisko",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Stopień pokrewieństwa",
														"defaultText": "Stopień pokrewieństwa",
														"size": {
															"large": 3,
														},
													}
												]
											},
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "PeselComponent",
														"id": "test1",
														"infoText": "PESEL",
														"defaultText": "PESEL", //TODO samo się ustawia
														"size": {
															"large": 3,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Urząd skarbowy",
														"defaultText": "Urząd skarbowy",
														"size": {
															"large": 8,
														},
													}
													
												]
											}
										]
									},
									{
										"type": "PanelComponent",
										"id": "panel4",
										"size": {
											"large": 10,
										},
										"children": [
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "TextBox",
														"id": "test1",
														"infoText" : "Imię",
														"defaultText": "Imię",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Nazwisko",
														"defaultText": "Nazwisko",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Stopień pokrewieństwa",
														"defaultText": "Stopień pokrewieństwa",
														"size": {
															"large": 3,
														},
													}
												]
											},
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "PeselComponent",
														"id": "test1",
														"infoText": "PESEL",
														"defaultText": "PESEL", //TODO samo się ustawia
														"size": {
															"large": 3,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Urząd skarbowy",
														"defaultText": "Urząd skarbowy",
														"size": {
															"large": 8,
														},
													}
													
												]
											}
										]
									},
									{
										"type": "PanelComponent",
										"id": "panel4",
										"size": {
											"large": 10,
										},
										"children": [
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "TextBox",
														"id": "test1",
														"infoText" : "Imię",
														"defaultText": "Imię",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Nazwisko",
														"defaultText": "Nazwisko",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Stopień pokrewieństwa",
														"defaultText": "Stopień pokrewieństwa",
														"size": {
															"large": 3,
														},
													}
												]
											},
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "PeselComponent",
														"id": "test1",
														"infoText": "PESEL",
														"defaultText": "PESEL", //TODO samo się ustawia
														"size": {
															"large": 3,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Urząd skarbowy",
														"defaultText": "Urząd skarbowy",
														"size": {
															"large": 8,
														},
													}
													
												]
											}
										]
									},
									{
										"type": "PanelComponent",
										"id": "panel4",
										"size": {
											"large": 10,
										},
										"children": [
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "TextBox",
														"id": "test1",
														"infoText" : "Imię",
														"defaultText": "Imię",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Nazwisko",
														"defaultText": "Nazwisko",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Stopień pokrewieństwa",
														"defaultText": "Stopień pokrewieństwa",
														"size": {
															"large": 3,
														},
													}
												]
											},
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "PeselComponent",
														"id": "test1",
														"infoText": "PESEL",
														"defaultText": "PESEL", //TODO samo się ustawia
														"size": {
															"large": 3,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Urząd skarbowy",
														"defaultText": "Urząd skarbowy",
														"size": {
															"large": 8,
														},
													}
													
												]
											}
										]
									},
									{
										"type": "PanelComponent",
										"id": "panel4",
										"size": {
											"large": 10,
										},
										"children": [
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "TextBox",
														"id": "test1",
														"infoText" : "Imię",
														"defaultText": "Imię",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Nazwisko",
														"defaultText": "Nazwisko",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Stopień pokrewieństwa",
														"defaultText": "Stopień pokrewieństwa",
														"size": {
															"large": 3,
														},
													}
												]
											},
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "PeselComponent",
														"id": "test1",
														"infoText": "PESEL",
														"defaultText": "PESEL", //TODO samo się ustawia
														"size": {
															"large": 3,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Urząd skarbowy",
														"defaultText": "Urząd skarbowy",
														"size": {
															"large": 8,
														},
													}
													
												]
											}
										]
									},
									{
										"type": "PanelComponent",
										"id": "panel4",
										"size": {
											"large": 10,
										},
										"children": [
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "TextBox",
														"id": "test1",
														"infoText" : "Imię",
														"defaultText": "Imię",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Nazwisko",
														"defaultText": "Nazwisko",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Stopień pokrewieństwa",
														"defaultText": "Stopień pokrewieństwa",
														"size": {
															"large": 3,
														},
													}
												]
											},
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "PeselComponent",
														"id": "test1",
														"infoText": "PESEL",
														"defaultText": "PESEL", //TODO samo się ustawia
														"size": {
															"large": 3,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Urząd skarbowy",
														"defaultText": "Urząd skarbowy",
														"size": {
															"large": 8,
														},
													}
													
												]
											}
										]
									},
									{
										"type": "PanelComponent",
										"id": "panel4",
										"size": {
											"large": 10,
										},
										"children": [
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "TextBox",
														"id": "test1",
														"infoText" : "Imię",
														"defaultText": "Imię",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Nazwisko",
														"defaultText": "Nazwisko",
														"size": {
															"large": 4,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Stopień pokrewieństwa",
														"defaultText": "Stopień pokrewieństwa",
														"size": {
															"large": 3,
														},
													}
												]
											},
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "PeselComponent",
														"id": "test1",
														"infoText": "PESEL",
														"defaultText": "PESEL", //TODO samo się ustawia
														"size": {
															"large": 3,
														},
													},
													{
														"type": "TextBox",
														"id": "test2",
														"infoText" : "Urząd skarbowy",
														"defaultText": "Urząd skarbowy",
														"size": {
															"large": 8,
														},
													}
													
												]
											}
										]
									},
								]
							},
							{
								"type": "PanelComponent",
								"id": "panel3",
								"size": {
									"large": 10,
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
					}
				]
			}
		]
	}

	/*{
		"components":
		[
			{
				"type": "PanelComponent",
				"id": "panel3",
				"size": {
					"large": 10,
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
	}*/
;
export const LAYOUT = JSON.stringify(layout_dict);
