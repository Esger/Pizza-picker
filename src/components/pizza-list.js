import { inject, bindable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class PizzaListCustomElement {

    constructor(EventAggregator) {
        this.ea = EventAggregator;
        this.showList = true;
        this.ea.subscribe('setPreference', response => {
            this.updatePreferences(response);
        });
        this.pizzas = [
            {
                'naam': 'Napolitana',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '6.00',
                'nummer': 2,
                'sortingWeight': 0,
                'ingredienten': 'ansjovis, kappertjes, tomaten, kaas'
            }, {
                'naam': 'Salame',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '6.00',
                'nummer': 3,
                'sortingWeight': 0,
                'ingredienten': 'salami, tomaten, kaas'
            }, {
                'naam': 'Prosciutto',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '6.00',
                'nummer': 4,
                'sortingWeight': 0,
                'ingredienten': 'ham, tomaten, kaas'
            }, {
                'naam': 'Funghi',
                'vegetarisch': true,
                'pikant': false,
                'prijs': '6.00',
                'nummer': 5,
                'sortingWeight': 0,
                'ingredienten': 'champignons, tomaten, kaas'
            }, {
                'naam': 'Quattro Stagioni',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '6.50',
                'nummer': 6,
                'sortingWeight': 0,
                'ingredienten': 'ham, salami, ansjovis, champignons, kappertjes, olijven, tomaten, kaas'
            }, {
                'naam': 'Mista',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.50',
                'nummer': 7,
                'sortingWeight': 0,
                'ingredienten': 'ham, salami, garnalen, zalm, champignons, tomaten, kaas'
            }, {
                'naam': 'Tonno',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '7.00',
                'nummer': 8,
                'sortingWeight': 0,
                'ingredienten': 'tonijn, tomaten, uien, kaas'
            }, {
                'naam': 'Peperoni',
                'vegetarisch': true,
                'pikant': false,
                'prijs': '7.00',
                'nummer': 9,
                'sortingWeight': 0,
                'ingredienten': 'champignons, paprika, spaanse pepers, tomaten, uien, kaas'
            }, {
                'naam': 'Capricciosa',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '7.50',
                'nummer': 10,
                'sortingWeight': 0,
                'ingredienten': 'ham, salami, garnalen, zalm, paprika, tomaten, kaas'
            }, {
                'naam': 'Calzone',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '7.00',
                'nummer': 11,
                'sortingWeight': 0,
                'ingredienten': 'ham, salami, tomaten, kaas'
            }, {
                'naam': 'Capricciosa Speciale',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '9.75',
                'nummer': 12,
                'sortingWeight': 0,
                'ingredienten': 'ham, salami, garnalen, zalm, champignons, olijven, paprika, tomaten, uien, kaas'
            }, {
                'naam': 'Francescana',
                'vegetarisch': true,
                'pikant': false,
                'prijs': '7.00',
                'nummer': 13,
                'sortingWeight': 0,
                'ingredienten': 'artisjokken, champignons, tomaten, uien, kaas'
            }, {
                'naam': 'Stella Marina',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '7.00',
                'nummer': 14,
                'sortingWeight': 0,
                'ingredienten': 'garnalen, zalm, tomaten, kaas'
            }, {
                'naam': 'Adriatica',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '7.50',
                'nummer': 15,
                'sortingWeight': 0,
                'ingredienten': 'ansjovis, garnalen, tonijn, tomaten, kaas'
            }, {
                'naam': 'Campanera',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '7.00',
                'nummer': 16,
                'sortingWeight': 0,
                'ingredienten': 'ham, asperges, champignons, tomaten, uien, kaas'
            }, {
                'naam': 'Campagnola',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '7.00',
                'nummer': 17,
                'sortingWeight': 0,
                'ingredienten': 'ham, champignons, paprika, tomaten, uien, kaas'
            }, {
                'naam': 'Vulcano',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '6.75',
                'nummer': 18,
                'sortingWeight': 0,
                'ingredienten': 'ham, champignons, tomaten, kaas'
            }, {
                'naam': 'Vesuvio',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '6.75',
                'nummer': 19,
                'sortingWeight': 0,
                'ingredienten': 'salami, champignons, tomaten, kaas'
            }, {
                'naam': 'Carbonara',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '7.50',
                'nummer': 20,
                'sortingWeight': 0,
                'ingredienten': 'ham, rosbief, salami, spek, tomaten, kaas'
            }, {
                'naam': 'Frutti di mare',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.25',
                'nummer': 21,
                'sortingWeight': 0,
                'ingredienten': 'zeevruchten, tomaten, kaas'
            }, {
                'naam': 'Santa Lucia',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '7.50',
                'nummer': 22,
                'sortingWeight': 0,
                'ingredienten': 'ham, salami, ansjovis, artisjokken, spaanse pepers, tomaten, kaas'
            }, {
                'naam': 'Marinara',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '7.50',
                'nummer': 23,
                'sortingWeight': 0,
                'ingredienten': 'ansjovis, garnalen, zalm, tomaten, kaas'
            }, {
                'naam': 'Montanara',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '7.00',
                'nummer': 24,
                'sortingWeight': 0,
                'ingredienten': 'ham, salami, champignons, tomaten, kaas'
            }, {
                'naam': 'Cipolle',
                'vegetarisch': true,
                'pikant': false,
                'prijs': '6.75',
                'nummer': 25,
                'sortingWeight': 0,
                'ingredienten': 'champignons, tomaten, uien, kaas'
            }, {
                'naam': 'Sardagnola',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.00',
                'nummer': 26,
                'sortingWeight': 0,
                'ingredienten': 'salami, ansjovis, champignons, olijven, paprika, tomaten, uien, kaas'
            }, {
                'naam': 'Funghi alla Marinera',
                'vegetarisch': false,
                'pikant': true,
                'prijs': '8.50',
                'nummer': 27,
                'sortingWeight': 0,
                'ingredienten': 'garnalen, mosselen, zalm, champignons, tomaten, kaas'
            }, {
                'naam': 'Paesana',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.00',
                'nummer': 28,
                'sortingWeight': 0,
                'ingredienten': 'ham, salami, spek, champignons, tomaten, uien, kaas'
            }, {
                'naam': 'Svedese',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '7.00',
                'nummer': 29,
                'sortingWeight': 0,
                'ingredienten': 'ei, ham, tomaten, uien, kaas'
            }, {
                'naam': 'Bolognese',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '7.00',
                'nummer': 30,
                'sortingWeight': 0,
                'ingredienten': 'gehaktsaus, tomaten, kaas, parmezaanse kaas'
            }, {
                'naam': 'Americana',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.00',
                'nummer': 32,
                'sortingWeight': 0,
                'ingredienten': 'gehaktsaus, spek, champignons, paprika, tomaten, uien, kaas, parmezaanse kaas'
            }, {
                'naam': 'Quattro Stagioni Speciale',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.00',
                'nummer': 33,
                'sortingWeight': 0,
                'ingredienten': 'ham, salami, artisjokken, champignons, kappertjes, paprika, tomaten, kaas'
            }, {
                'naam': 'Paesana alla Gorgonzola',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '9.00',
                'nummer': 34,
                'sortingWeight': 0,
                'ingredienten': 'ham, salami, spek, champignons, tomaten, uien, gorgonzola, kaas'
            }, {
                'naam': 'Mafiosa',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '9.25',
                'nummer': 35,
                'sortingWeight': 0,
                'ingredienten': 'gehaktsaus, ham, champignons, olijven, paprika, tomaten, gorgonzola, kaas, parmezaanse kaas'
            }, {
                'naam': 'Quattro Formaggi',
                'vegetarisch': true,
                'pikant': false,
                'prijs': '8.00',
                'nummer': 36,
                'sortingWeight': 0,
                'ingredienten': 'tomaten, brie, gorgonzola, kaas, mozzarella'
            }, {
                'naam': 'Vegetariana',
                'vegetarisch': true,
                'pikant': false,
                'prijs': '8.00',
                'nummer': 37,
                'sortingWeight': 0,
                'ingredienten': 'artisjokken, asperges, champignons, olijven, paprika, tomaten, uien, brie, kaas'
            }, {
                'naam': 'San Francesco',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '7.50',
                'nummer': 38,
                'sortingWeight': 0,
                'ingredienten': 'salami, artisjokken, asperges, olijven, tomaten, kaas'
            }, {
                'naam': 'Dinamite',
                'vegetarisch': false,
                'pikant': true,
                'prijs': '8.00',
                'nummer': 39,
                'sortingWeight': 0,
                'ingredienten': 'ham, tonijn, asperges, champignons, knoflook, paprika, tomaten, kaas'
            }, {
                'naam': 'Carbonara Speciale',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.50',
                'nummer': 40,
                'sortingWeight': 0,
                'ingredienten': 'ei, ham, rosbief, salami, spek, tomaten, uien, kaas'
            }, {
                'naam': 'Santa Lucia Speciale',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.50',
                'nummer': 41,
                'sortingWeight': 0,
                'ingredienten': 'ham, salami, artisjokken, asperges, champignons, spaanse pepers, tomaten, uien, kaas'
            }, {
                'naam': 'Dell Amore',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '9.25',
                'nummer': 42,
                'sortingWeight': 0,
                'ingredienten': 'ham, ossenhaas, champignons, paprika, tomaten, ananas, gorgonzola, kaas'
            }, {
                'naam': 'Del Re',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '9.75',
                'nummer': 43,
                'sortingWeight': 0,
                'ingredienten': 'ham, ossenhaas, salami, spek, varkensfilet, champignons, paprika, tomaten, ananas, brie, kaas'
            }, {
                'naam': 'Parigina',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.50',
                'nummer': 44,
                'sortingWeight': 0,
                'ingredienten': 'gehaktsaus, asperges, tomaten, brie, kaas'
            }, {
                'naam': 'Pizza Gorgonzola',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.50',
                'nummer': 45,
                'sortingWeight': 0,
                'ingredienten': 'ham, salami, artisjokken, asperges, tomaten, uien, gorgonzola, kaas'
            }, {
                'naam': 'Al Capone',
                'vegetarisch': false,
                'pikant': true,
                'prijs': '9.50',
                'nummer': 46,
                'sortingWeight': 0,
                'ingredienten': 'ossenhaas, salami, asperges, champignons, paprika, tomaten, gorgonzola, kaas, parmezaanse kaas'
            }, {
                'naam': 'Napoli',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '9.75',
                'nummer': 47,
                'sortingWeight': 0,
                'ingredienten': 'ossenhaas, varkensfilet, asperges, champignons, paprika, tomaten, ananas, gorgonzola, kaas, mozzarella'
            }, {
                'naam': 'Tutti Frutti',
                'vegetarisch': true,
                'pikant': false,
                'prijs': '7.00',
                'nummer': 48,
                'sortingWeight': 0,
                'ingredienten': 'tomaten, gemengd fruit, kaas'
            }, {
                'naam': 'Hawaiana',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '7.50',
                'nummer': 49,
                'sortingWeight': 0,
                'ingredienten': 'ham, tomaten, ananas, kaas, mozzarella'
            }, {
                'naam': 'Tropicale',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.00',
                'nummer': 50,
                'sortingWeight': 0,
                'ingredienten': 'garnalen, tomaten, ananas, kaas, mozzarella'
            }, {
                'naam': 'Hawaiana speciale',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.75',
                'nummer': 51,
                'sortingWeight': 0,
                'ingredienten': 'ham, kipfilet, asperges, champignons, paprika, tomaten, ananas, banaan, kaas'
            }, {
                'naam': 'Tutti Frutti speciale',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.50',
                'nummer': 52,
                'sortingWeight': 0,
                'ingredienten': 'ham, tomaten, banaan, gemengd fruit, gorgonzola, kaas'
            }, {
                'naam': 'Gran Canaria',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.50',
                'nummer': 53,
                'sortingWeight': 0,
                'ingredienten': 'paling, tomaten, ananas, kaas, mozzarella'
            }, {
                'naam': 'Portoricana',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.75',
                'nummer': 54,
                'sortingWeight': 0,
                'ingredienten': 'inktvis, tomaten, ananas, banaan, gemengd fruit, kaas, mozzarella'
            }, {
                'naam': 'Capri',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.75',
                'nummer': 55,
                'sortingWeight': 0,
                'ingredienten': 'salami, garnalen, inktvis, paprika, tomaten, gorgonzola, kaas'
            }, {
                'naam': 'Nadia',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.75',
                'nummer': 56,
                'sortingWeight': 0,
                'ingredienten': 'rosbief, broccoli, champignons, spaanse pepers, tomaten, gorgonzola, kaas, mozzarella'
            }, {
                'naam': 'Anguille',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.50',
                'nummer': 57,
                'sortingWeight': 0,
                'ingredienten': 'paling, zalm, tomaten, uien, kaas'
            }, {
                'naam': 'Bel Fiore',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.00',
                'nummer': 58,
                'sortingWeight': 0,
                'ingredienten': 'salami, broccoli, tomaten, kaas, mozzarella'
            }, {
                'naam': 'Angelo',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.00',
                'nummer': 59,
                'sortingWeight': 0,
                'ingredienten': 'kipfilet, broccoli, champignons, paprika, tomaten, kaas'
            }, {
                'naam': 'Calzone frutti di mare speciale',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '10.00',
                'nummer': 60,
                'sortingWeight': 0,
                'ingredienten': 'garnalen, mosselen, paling, tonijn, zalm, tomaten, gorgonzola, kaas'
            }, {
                'naam': 'Calzone speciale',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '9.00',
                'nummer': 61,
                'sortingWeight': 0,
                'ingredienten': 'ham, salami, spek, varkensfilet, champignons, paprika, spaanse pepers, tomaten, kaas'
            }, {
                'naam': 'Del cacciatore',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '9.50',
                'nummer': 62,
                'sortingWeight': 0,
                'ingredienten': 'ham, ossenhaas, rosbief, salami, varkensfilet, champignons, tomaten, uien, kaas'
            }, {
                'naam': 'Del Padrino',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '9.25',
                'nummer': 63,
                'sortingWeight': 0,
                'ingredienten': 'bolognesesaus, ham, artisjokken, champignons, paprika, tomaten, gorgonzola, kaas, mozzarella'
            }, {
                'naam': 'Mammamia',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.50',
                'nummer': 64,
                'sortingWeight': 0,
                'ingredienten': 'ham, broccoli, paprika, tomaten, gorgonzola, kaas'
            }, {
                'naam': 'Frutti di mare speciale',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '9.75',
                'nummer': 65,
                'sortingWeight': 0,
                'ingredienten': 'ansjovis, garnalen, inktvis, mosselen, paling, tonijn, zalm, tomaten, kaas'
            }, {
                'naam': 'Don Luigi',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.75',
                'nummer': 66,
                'sortingWeight': 0,
                'ingredienten': 'ham, salami, spek, broccoli, spaanse pepers, tomaten, uien, kaas, mozzarella'
            }, {
                'naam': 'Mario',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.00',
                'nummer': 67,
                'sortingWeight': 0,
                'ingredienten': 'kipfilet, broccoli, spaanse pepers, tomaten, ananas, kaas'
            }, {
                'naam': 'Vegetariana speciale',
                'vegetarisch': true,
                'pikant': false,
                'prijs': '8.75',
                'nummer': 68,
                'sortingWeight': 0,
                'ingredienten': 'artisjokken, asperges, champignons, olijven, paprika, tomaten, uien, ananas, gorgonzola, kaas'
            }, {
                'naam': 'Dello studente',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.50',
                'nummer': 70,
                'sortingWeight': 0,
                'ingredienten': 'ham, kipfilet, rosbief, broccoli, champignons, tomaten, uien, kaas'
            }, {
                'naam': 'Pescatore',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.50',
                'nummer': 71,
                'sortingWeight': 0,
                'ingredienten': 'inktvis, tonijn, paprika, tomaten, uien, kaas'
            }, {
                'naam': 'San Ignazio',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.75',
                'nummer': 72,
                'sortingWeight': 0,
                'ingredienten': 'ham, artisjokken, broccoli, olijven, paprika, tomaten, gorgonzola, kaas, mozzarella'
            }, {
                'naam': 'Fabrizio',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.50',
                'nummer': 73,
                'sortingWeight': 0,
                'ingredienten': 'rosbief, broccoli, tomaten, uien, gorgonzola, kaas'
            }, {
                'naam': 'Olandese',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.50',
                'nummer': 74,
                'sortingWeight': 0,
                'ingredienten': 'ei, rosbief, spek, asperges, tomaten, uien, kaas'
            }, {
                'naam': 'San Giorgio',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.50',
                'nummer': 75,
                'sortingWeight': 0,
                'ingredienten': 'ham, broccoli, olijven, tomaten, uien, gorgonzola, kaas'
            }, {
                'naam': 'San Genaro',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '8.50',
                'nummer': 76,
                'sortingWeight': 0,
                'ingredienten': 'ham, salami, tonijn, champignons, olijven, paprika, tomaten, kaas'
            }, {
                'naam': 'Paella all Italiana',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '10.25',
                'nummer': 77,
                'sortingWeight': 0,
                'ingredienten': 'ham, kipfilet, garnalen, inktvis, mosselen, paling, zalm, paprika, spaanse pepers, tomaten, uien, kaas'
            }, {
                'naam': 'Del Capitano',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '9.25',
                'nummer': 78,
                'sortingWeight': 0,
                'ingredienten': 'garnalen, paling, tonijn, broccoli, spaanse pepers, tomaten, uien, kaas'
            }, {
                'naam': 'Del vagabondo',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '9.75',
                'nummer': 79,
                'sortingWeight': 0,
                'ingredienten': 'gehaktsaus, artisjokken, asperges, paprika, tomaten, brie, gorgonzola, kaas, mozzarella, parmezaanse kaas'
            }, {
                'naam': 'Napoli speciale',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '10.50',
                'nummer': 80,
                'sortingWeight': 0,
                'ingredienten': 'kipfilet, ossenhaas, salami, varkensfilet, asperges, champignons, paprika, tomaten, gorgonzola, kaas, parmezaanse kaas'
            }, {
                'naam': 'San Marco',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '9.25',
                'nummer': 69,
                'sortingWeight': 0,
                'ingredienten': 'gehaktsaus, tonijn, asperges, champignons, spaanse pepers, tomaten, uien, gorgonzola, kaas'
            }, {
                'naam': 'Crudo',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '10.00',
                'nummer': 81,
                'sortingWeight': 0,
                'ingredienten': 'tomaten, mozzarella, parmezaanse kaas, parmaham, rucola'
            }, {
                'naam': 'Campania',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '10.50',
                'nummer': 82,
                'sortingWeight': 0,
                'ingredienten': 'tomaten, mozzarella, parmaham, cherry tomaatjes, verse basilicum, verse knoflook'
            }, {
                'naam': 'Caprese',
                'vegetarisch': true,
                'pikant': false,
                'prijs': '9.00',
                'nummer': 83,
                'sortingWeight': 0,
                'ingredienten': 'tomaten, mozzarella, cherry tomaatjes, verse basilicum, verse knoflook'
            }, {
                'naam': 'Al pesto',
                'vegetarisch': true,
                'pikant': false,
                'prijs': '10.00',
                'nummer': 84,
                'sortingWeight': 0,
                'ingredienten': 'tomaten, mozzarella, rucola, cherry tomaatjes, verse basilicum, groene pesto, pijnboompitjes'
            }, {
                'naam': 'Contadina',
                'vegetarisch': true,
                'pikant': false,
                'prijs': '10.00',
                'nummer': 85,
                'sortingWeight': 0,
                'ingredienten': 'tomaten, mozzarella, verse knoflook, gegrilde aubergine, rode ui'
            }, {
                'naam': 'Spinacina',
                'vegetarisch': true,
                'pikant': false,
                'prijs': '10.00',
                'nummer': 86,
                'sortingWeight': 0,
                'ingredienten': 'olijven, tomaten, mozzarella, parmezaanse kaas, verse knoflook, pijnboompitjes, spinazie'
            }, {
                'naam': 'Neptuno',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '13.00',
                'nummer': 87,
                'sortingWeight': 0,
                'ingredienten': 'tonijn, tomaten, mozzarella, verse peterselie, verse knoflook, gepelde gambas, rode zalm snippers'
            }, {
                'naam': 'Panna et salmone',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '11.00',
                'nummer': 88,
                'sortingWeight': 0,
                'ingredienten': 'tomaten, mozzarella, verse peterselie, verse knoflook, rode zalm snippers, room'
            }, {
                'naam': 'Panna et gamberoni',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '12.50',
                'nummer': 89,
                'sortingWeight': 0,
                'ingredienten': 'tomaten, mozzarella, verse peterselie, verse knoflook, gepelde gambas, room'
            }, {
                'naam': 'Pizzadoc',
                'vegetarisch': false,
                'pikant': false,
                'prijs': '11.00',
                'nummer': 90,
                'sortingWeight': 0,
                'ingredienten': 'tomaten, kaas, mozzarella, parmaham, rucola, cherry tomaatjes'
            }
        ];
    }
    this.updatePreferences(ingredient){
        this.showList = !this.showList;
        for (let pizza of this.pizzas) {
            if (pizza.ingredienten.includes(ingredient.name)) {
                ingredient.pref += ingredient.sortingWeight;
            }
        }
        setTimeout(() => {
            this.showList = !this.showList;
        }, 0);
    };

    this.resetPizzas() {
        for (let pizza in this.pizzas) {
            if (object.let(pizza)) {
                pizza.sortingWeight = 0;
            }
        }
        this.ea.publish('setPreference', pizza);
    };

}
