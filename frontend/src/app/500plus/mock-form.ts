const layout_dict =
{
	"send-url": "/api/write/plus500-send/",
	"fill-url": "/plus500-fill/",
	"components": [
		{
			"type": "Form",
			"id": "500main",
			"form_action": "/api/write/plus500-send/",
			"method": "get",
			"children": [
				{
					"type": "PanelComponent",
					"collapsible": true,
					"hidable": true,
					"size": {
						"large": 12
					},
					"title": "Wniosek o ustalenie prawa do świadczenia wychowawczego",
					"children": [
						{
							"type": "PanelComponent",
							"size": {
								"large": 12
							},
							"children": [
								{
									"type": "RowComponent",
									"id": "row1",
									"children": [
										{
											"type": "TextBox",
											"id": "wnioskodawca_imie",
											"infoText": "Imię",
											"defaultText": "Imię",
											"size": {
												"large": 5
											}
										},
										{
											"type": "TextBox",
											"id": "wnioskodawca_nazwisko",
											"infoText": "Nazwisko",
											"defaultText": "Nazwisko",
											"size": {
												"large": 6
											}
										}
									]
								},
								{
									"type": "RowComponent",
									"id": "row1",
									"children": [
										{
											"type": "PeselComponent",
											"id": "wnioskodawca_pesel",
											"defaultText": "PESEL",
											"size": {
												"large": 5
											}
										},
										{
											"type": "TextBox",
											"id": "wnioskodawca_stan_cyw",
											"infoText": "Stan cywilny",
											"defaultText": "Stan cywilny",
											"size": {
												"large": 3
											}
										},
										{
											"type": "TextBox",
											"id": "wnioskodawca_obywatelstwo",
											"infoText": "Obywatelstwo",
											"defaultText": "Obywatelstwo",
											"size": {
												"large": 4
											}
										}
									]
								},
								{
									"type": "RowComponent",
									"id": "row1",
									"children": [
										{
											"type": "TextBox",
											"id": "wnioskodawca_miasto",
											"infoText": "Miejscowość",
											"defaultText": "Miejscowość",
											"size": {
												"large": 8
											}
										},
										{
											"type": "Zipcode",
											"id": "wnioskodawca_zipcode",
											"defaultText": "Kod Pocztowy",
											"size": {
												"large": 3
											}
										}
									]
								},
								{
									"type": "RowComponent",
									"id": "row1",
									"children": [
										{
											"type": "TextBox",
											"id": "wnioskodawca_ulica",
											"infoText": "Ulica",
											"defaultText": "Ulica",
											"size": {
												"large": 5
											}
										},
										{
											"type": "TextBox",
											"id": "wnioskodawca_nr_domu",
											"infoText": "Numer Domu",
											"defaultText": "Numer Domu",
											"size": {
												"large": 3
											}
										},
										{
											"type": "TextBox",
											"id": "wnioskodawca_nr_mieszk",
											"infoText": "Numer mieszkania",
											"defaultText": "Numer mieszkania",
											"size": {
												"large": 3
											}
										}
									]
								}
							]
						},
						{
							"type": "PanelComponent",
							"id": "panel1",
							"size": {
								"large": 10
							},
							"title": "2. Ustalenie prawa do świadczenia wychowawczego na pierwsze dziecko.",
							"children": [
								{
									"type": "LabelComponent",
									"id": "test2",
									"text": "Świadczenie wychowawcze przysługuje na pierwsze dziecko jeżeli dochód rodziny w przeliczeniu na osobę nie przekracza kwoty 800,00 zł. Jeżeli członkiem rodziny jest dziecko niepełnosprawne, świadczenie wychowawcze na pierwsze dziecko przysługuje jeżeli dochód rodziny w przeliczeniu na osobę nie przekracza kwoty 1 200,00 zł. Pierwsze dziecko oznacza jedyne lub najstarsze dziecko w rodzinie w wieku do ukończenia\n\t\t18. roku życia; w przypadku dzieci urodzonych tego samego dnia, miesiąca i roku, będących\n\t\tnajstarszymi dziećmi w rodzinie w wieku do ukończenia 18. roku życia (czyli w przypadku wieloraczków) pierwsze dziecko oznacza jedno z tych dzieci wskazane przez\n\t\tosobę ubiegającą się.\n\t\tNiepełnosprawne dziecko oznacza dziecko legitymujące się orzeczeniem o niepełnosprawności\n\t\tokreślonym w przepisach o rehabilitacji zawodowej i społecznej oraz zatrudnianiu osób\n\t\tniepełnosprawnych albo orzeczeniem o umiarkowanym lub znacznym stopniu niepełnosprawności.",
									"size": {
										"large": 10
									}
								}
							]
						},
						{
							"type": "PanelComponent",
							"id": "panel2",
							"size": {
								"large": 10
							},
							"collapsible": true,
							"title": "3. Ustalenie prawa do świadczenia wychowawczego na kolejne dziecko/dzieci w wieku poniżej\n\t\t18. roku życia, inne niż pierwsze dziecko.",
							"children": [
								{
									"type": "LabelComponent",
									"id": "test3",
									"text": "Wnoszę o ustalenie prawa do świadczenia wychowawczego na następujące dzieci/dziecko\n\t\tzamieszkujące ze mną oraz pozostające na moim utrzymaniu (świadczenie wychowawcze na drugie\n\t\ti kolejne dziecko przysługuje do dnia ukończenia przez dziecko 18. roku życia i przysługuje niezależnie\n\t\tod osiągniętego dochodu):",
									"size": {
										"large": 12,
										"medium": 12
									}
								},
								{
									"type": "DynamicList",
									"id": "kolejneDzieci",
									"replicableElement": 
									{
										"type": "PanelComponent",
										"id": "panel3",
										"title": "Dziecko",
										"size": {
											"large": 12
										},
										"children": [
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "TextBox",
														"id": "dziecko1_imie",
														"infoText": "Imię",
														"defaultText": "Imię",
														"size": {
															"large": 4
														}
													},
													{
														"type": "TextBox",
														"id": "dziecko1_nazwisko",
														"infoText": "Nazwisko",
														"defaultText": "Nazwisko",
														"size": {
															"large": 4
														}
													},
													{
														"type": "TextBox",
														"id": "dziecko1_plec",
														"infoText": "Płeć",
														"defaultText": "Płeć",
														"size": {
															"large": 3
														}
													}
												]
											},
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "PeselComponent",
														"id": "dziecko1_pesel",
														"infoText": "PESEL",
														"defaultText": "PESEL",
														"size": {
															"large": 2
														}
													},
													{
														"type": "TextBox",
														"id": "dziecko1_stan_cyw",
														"infoText": "Stan cywilny",
														"defaultText": "Stan cywilny",
														"size": {
															"large": 3
														}
													},
													{
														"type": "TextBox",
														"id": "dziecko1_obywat",
														"infoText": "Obywatelstwo",
														"defaultText": "Obywatelstwo",
														"size": {
															"large": 3
														}
													},
													{
														"type": "TextBox",
														"id": "dziecko1_data_ur",
														"infoText": "Data urodzenia",
														"defaultText": "Data urodzenia",
														"size": {
															"large": 3
														}
													}
												]
											}
										]
									}
										
								}

							]
						},
						{
							"type": "PanelComponent",
							"id": "panel3",
							"size": {
								"large": 10
							},
							"title": "4. Dane członków rodziny",
							"collapsible": true,
							"children": [
								{
									"type": "LabelComponent",
									"id": "test2",
									"text": "Rodzina oznacza odpowiednio: małżonków, rodziców dzieci, opiekuna faktycznego dziecka\n\t\t(opiekun faktyczny dziecka to osoba faktycznie opiekującą się dzieckiem, jeżeli wystąpiła z wnioskiem\n\t\tdo sądu opiekuńczego o przysposobienie dziecka) oraz zamieszkujące wspólnie z tymi osobami,\n\t\tpozostające na ich utrzymaniu dzieci w wieku do ukończenia 25. roku życia, a także dzieci, które\n\t\tukończyły 25. rok życia, legitymujące się orzeczeniem o znacznym stopniu niepełnosprawności,\n\t\tjeżeli w związku z tą niepełnosprawnością przysługuje świadczenie pielęgnacyjne lub specjalny\n\t\tzasiłek opiekuńczy albo zasiłek dla opiekuna, o którym mowa w ustawie z dnia 4 kwietnia 2014 r.\n\t\to ustaleniu i wypłacie zasiłków dla opiekunów (Dz. U. z 2016 r. poz. 162). Do członków rodziny nie\n\t\tzalicza się dziecka pozostającego pod opieką opiekuna prawnego, dziecka pozostającego w\n\t\tzwiązku małżeńskim, a także pełnoletniego dziecka posiadającego własne dziecko.\n\t\tW przypadku gdy dziecko, zgodnie z orzeczeniem sądu, jest pod opieką naprzemienną obydwojga\n\t\trodziców rozwiedzionych, żyjących w separacji lub żyjących w rozłączeniu, dziecko zalicza się\n\t\tjednocześnie do członków rodzin obydwojga rodziców.\n\t\tOsoba samotnie wychowująca dziecko (oznacza to pannę, kawalera, wdowę, wdowca, osobę\n\t\tpozostającą w separacji orzeczonej prawomocnym wyrokiem sądu, osobę rozwiedzioną, chyba że\n\t\twychowuje wspólnie co najmniej jedno dziecko z jego rodzicem) nie wpisuje do składu rodziny\n\t\tdrugiego z rodziców dziecka.",
									"size": {
										"large": 10
									}
								},
								{
									"type": "LabelComponent",
									"id": "test2",
									"text": "W skład mojej rodziny zgodnie z ww. definicją wchodzą (zgodnie z ww. definicją należy wpisać\n\t\twszystkich członków rodziny osoby ubiegającej się o świadczenie wychowawcze, w tym dzieci\n\t\twskazane w tabeli A i B):",
									"size": {
										"large": 10
									}
								},
								{
									"type": "DynamicList",
									"id": "czlonkowieRodziny",
									"replicableElement": 
									{
										"type": "PanelComponent",
										"id": "panel4",
										"size": {
											"large": 10
										},
										"children": [
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "TextBox",
														"id": "czlonek_imie",
														"infoText": "Imię",
														"defaultText": "Imię",
														"size": {
															"large": 4
														}
													},
													{
														"type": "TextBox",
														"id": "czlonek_nazwisko",
														"infoText": "Nazwisko",
														"defaultText": "Nazwisko",
														"size": {
															"large": 4
														}
													},
													{
														"type": "TextBox",
														"id": "czlonek_stopien_pokr",
														"infoText": "Stopień pokrewieństwa",
														"defaultText": "Stopień pokrewieństwa",
														"size": {
															"large": 3
														}
													}
												]
											},
											{
												"type": "RowComponent",
												"id": "row1",
												"children": [
													{
														"type": "PeselComponent",
														"id": "czlonek_pesel",
														"infoText": "PESEL",
														"defaultText": "PESEL",
														"size": {
															"large": 3
														}
													},
													{
														"type": "TextBox",
														"id": "czlonek_urzad_sk",
														"infoText": "Urząd skarbowy",
														"defaultText": "Urząd skarbowy",
														"size": {
															"large": 8
														}
													}
												]
											}
										]
									}
								}
							]
						},
						{
							"type": "PanelComponent",
							"id": "panel3",
							"title": "5. Oświadczenie o niepełnosprawności",
							"size": {
								"large": 10
							},
							"children": [
								{
									"type": "LabelComponent",
									"id": "test2",
									"size": {
										"large": 10
									},
									"text": "Oświadczam, że orzeczeniem o niepełnosprawności lub orzeczeniem o umiarkowanym lub\n\t\tznacznym stopniu niepełnosprawności legitymuje się następujące dziecko wchodzące w skład\n\t\trodziny (wypełnić tylko w przypadku ubiegania się o świadczenie wychowawcze na pierwsze dziecko\n\t\tjeśli członkiem rodziny jest dziecko legitymujące się ww. orzeczeniem):"
								},
								{
									"type": "RowComponent",
									"id": "row1",
									"children": [
										{
											"type": "TextBox",
											"id": "test1",
											"infoText": "Imię i nazwisko dziecka",
											"defaultText": "Imię i nazwisko dziecka",
											"size": {
												"large": 10
											}
										}
									]
								}
							]
						}
					]
				}
			]
		}
	]
};

export const LAYOUT = JSON.stringify(layout_dict);

const zwolnienie = 
{
	"components":
	[
		{
			"type": "RepeatableComponent",

			"children": [
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
};



const filled_form = {
	"wnioskodawca_imie": "Jan",
	"wnioskodawca_nazwisko": "Kowalski",
	"wnioskodawca_pesel": "99000000101",
	"wnioskodawca_stan_cyw": "Wdowiec",
	"wnioskodawca_obywatelstwo": "Polskie",
	"wnioskodawca_miasto": "Pcim",
	"wnioskodawca_zipcode": "00-007",
	"wnioskodawca_ulica": "Zwyczajna",
	"wnioskodawca_nr_domu": "1",
	"wnioskodawca_nr_mieszk": "23",
}

export const VALUES = JSON.stringify(filled_form);