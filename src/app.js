export class App {
    constructor() {
        this.title = 'Pizzas.';
        this.subtitle = 'De beste pizzas!';
        this.footerText = 'Eet smakelijk.';
        this.ingredientsTitle = '...met verse spullen';
        // this.ingredients = {};
        this.ingredients = {
            'fruit': [
                'ananas',
                'banaan',
                'gemengd_fruit'
            ],
            'groente': [
                'artisjokken',
                'asperges',
                'broccoli',
                'champignons',
                'kappertjes',
                'knoflook',
                'olijven',
                'paprika',
                'spaanse_pepers',
                'rucola',
                'cherry_tomaatjes',
                'tomaten',
                'verse_basilicum',
                'verse_knoflook',
                'verse_peterselie',
                'groene_pesto',
                'gegrilde_aubergine',
                'pijnboompitjes',
                'rode_ui',
                'spinazie',
                'uien'
            ],
            'kaas': [
                'brie',
                'gorgonzola',
                'kaas',
                'mozzarella',
                'parmezaanse_kaas',
                'room'
            ],
            'vis': [
                'ansjovis',
                'garnalen',
                'inktvis',
                'mosselen',
                'paling',
                'tonijn',
                'zeevruchten',
                'zalm',
                'gepelde_gambas',
                'rode_zalm_snippers'
            ],
            'vlees': [
                'bolognesesaus',
                'ei',
                'gehaktsaus',
                'ham',
                'kipfilet',
                'ossenhaas',
                'rosbief',
                'salami',
                'spek',
                'varkensfilet',
                'parmaham'
            ]
        };
        // this.ingredients.fruit = ;
        // this.ingredients.groente = ;
        // this.ingredients.kaas = ;
        // this.ingredients.vis = ;
        // this.ingredients.vlees = ;

        this.pizzas = [{
            'naam': 'Napolitana',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '6.00',
            'nummer': '2',
            'sortingWeight': 0,
            'ingredienten'
            'sortingWeight': 0,
            'ingredienten': 'ansjovis, kappertjes, tomaten, kaas'
        }, {
            'naam': 'Salame',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '6.00',
            'nummer': '3',
            'sortingWeight': 0,
            'ingredienten': 'salami, tomaten, kaas'
        }, {
            'naam': 'Prosciutto',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '6.00',
            'nummer': '4',
            'sortingWeight': 0,
            'ingredienten': 'ham, tomaten, kaas'
        }, {
            'naam': 'Funghi',
            'vegetarisch': true,
            'pikant': false,
            'prijs': '6.00',
            'nummer': '5',
            'sortingWeight': 0,
            'ingredienten': 'champignons, tomaten, kaas'
        }, {
            'naam': 'Quattro_Stagioni',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '6.50',
            'nummer': '6',
            'sortingWeight': 0,
            'ingredienten': 'ham, salami, ansjovis, champignons, kappertjes, olijven, tomaten, kaas'
        }, {
            'naam': 'Mista',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.50',
            'nummer': '7',
            'sortingWeight': 0,
            'ingredienten': 'ham, salami, garnalen, zalm, champignons, tomaten, kaas'
        }, {
            'naam': 'Tonno',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '7.00',
            'nummer': '8',
            'sortingWeight': 0,
            'ingredienten': 'tonijn, tomaten, uien, kaas'
        }, {
            'naam': 'Peperoni',
            'vegetarisch': true,
            'pikant': false,
            'prijs': '7.00',
            'nummer': '9',
            'sortingWeight': 0,
            'ingredienten': 'champignons, paprika, spaanse_pepers, tomaten, uien, kaas'
        }, {
            'naam': 'Capricciosa',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '7.50',
            'nummer': '10',
            'sortingWeight': 0,
            'ingredienten': 'ham, salami, garnalen, zalm, paprika, tomaten, kaas'
        }, {
            'naam': 'Calzone',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '7.00',
            'nummer': '11',
            'sortingWeight': 0,
            'ingredienten': 'ham, salami, tomaten, kaas'
        }, {
            'naam': 'Capricciosa_Speciale',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '9.75',
            'nummer': '12',
            'sortingWeight': 0,
            'ingredienten': 'ham, salami, garnalen, zalm, champignons, olijven, paprika, tomaten, uien, kaas'
        }, {
            'naam': 'Francescana',
            'vegetarisch': true,
            'pikant': false,
            'prijs': '7.00',
            'nummer': '13',
            'sortingWeight': 0,
            'ingredienten': 'artisjokken, champignons, tomaten, uien, kaas'
        }, {
            'naam': 'Stella_Marina',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '7.00',
            'nummer': '14',
            'sortingWeight': 0,
            'ingredienten': 'garnalen, zalm, tomaten, kaas'
        }, {
            'naam': 'Adriatica',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '7.50',
            'nummer': '15',
            'sortingWeight': 0,
            'ingredienten': 'ansjovis, garnalen, tonijn, tomaten, kaas'
        }, {
            'naam': 'Campanera',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '7.00',
            'nummer': '16',
            'sortingWeight': 0,
            'ingredienten': 'ham, asperges, champignons, tomaten, uien, kaas'
        }, {
            'naam': 'Campagnola',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '7.00',
            'nummer': '17',
            'sortingWeight': 0,
            'ingredienten': 'ham, champignons, paprika, tomaten, uien, kaas'
        }, {
            'naam': 'Vulcano',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '6.75',
            'nummer': '18',
            'sortingWeight': 0,
            'ingredienten': 'ham, champignons, tomaten, kaas'
        }, {
            'naam': 'Vesuvio',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '6.75',
            'nummer': '19',
            'sortingWeight': 0,
            'ingredienten': 'salami, champignons, tomaten, kaas'
        }, {
            'naam': 'Carbonara',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '7.50',
            'nummer': '20',
            'sortingWeight': 0,
            'ingredienten': 'ham, rosbief, salami, spek, tomaten, kaas'
        }, {
            'naam': 'Frutti_di_mare',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.25',
            'nummer': '21',
            'sortingWeight': 0,
            'ingredienten': 'zeevruchten, tomaten, kaas'
        }, {
            'naam': 'Santa_Lucia',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '7.50',
            'nummer': '22',
            'sortingWeight': 0,
            'ingredienten': 'ham, salami, ansjovis, artisjokken, spaanse_pepers, tomaten, kaas'
        }, {
            'naam': 'Marinara',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '7.50',
            'nummer': '23',
            'sortingWeight': 0,
            'ingredienten': 'ansjovis, garnalen, zalm, tomaten, kaas'
        }, {
            'naam': 'Montanara',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '7.00',
            'nummer': '24',
            'sortingWeight': 0,
            'ingredienten': 'ham, salami, champignons, tomaten, kaas'
        }, {
            'naam': 'Cipolle',
            'vegetarisch': true,
            'pikant': false,
            'prijs': '6.75',
            'nummer': '25',
            'sortingWeight': 0,
            'ingredienten': 'champignons, tomaten, uien, kaas'
        }, {
            'naam': 'Sardagnola',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.00',
            'nummer': '26',
            'sortingWeight': 0,
            'ingredienten': 'salami, ansjovis, champignons, olijven, paprika, tomaten, uien, kaas'
        }, {
            'naam': 'Funghi_alla_Marinera',
            'vegetarisch': false,
            'pikant': true,
            'prijs': '8.50',
            'nummer': '27',
            'sortingWeight': 0,
            'ingredienten': 'garnalen, mosselen, zalm, champignons, tomaten, kaas'
        }, {
            'naam': 'Paesana',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.00',
            'nummer': '28',
            'sortingWeight': 0,
            'ingredienten': 'ham, salami, spek, champignons, tomaten, uien, kaas'
        }, {
            'naam': 'Svedese',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '7.00',
            'nummer': '29',
            'sortingWeight': 0,
            'ingredienten': 'ei, ham, tomaten, uien, kaas'
        }, {
            'naam': 'Bolognese',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '7.00',
            'nummer': '30',
            'sortingWeight': 0,
            'ingredienten': 'gehaktsaus, tomaten, kaas, parmezaanse_kaas'
        }, {
            'naam': 'Americana',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.00',
            'nummer': '32',
            'sortingWeight': 0,
            'ingredienten': 'gehaktsaus, spek, champignons, paprika, tomaten, uien, kaas, parmezaanse_kaas'
        }, {
            'naam': 'Quattro_Stagioni_Speciale',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.00',
            'nummer': '33',
            'sortingWeight': 0,
            'ingredienten': 'ham, salami, artisjokken, champignons, kappertjes, paprika, tomaten, kaas'
        }, {
            'naam': 'Paesana_alla_Gorgonzola',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '9.00',
            'nummer': '34',
            'sortingWeight': 0,
            'ingredienten': 'ham, salami, spek, champignons, tomaten, uien, gorgonzola, kaas'
        }, {
            'naam': 'Mafiosa',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '9.25',
            'nummer': '35',
            'sortingWeight': 0,
            'ingredienten': 'gehaktsaus, ham, champignons, olijven, paprika, tomaten, gorgonzola, kaas, parmezaanse_kaas'
        }, {
            'naam': 'Quattro_Formaggi',
            'vegetarisch': true,
            'pikant': false,
            'prijs': '8.00',
            'nummer': '36',
            'sortingWeight': 0,
            'ingredienten': 'tomaten, brie, gorgonzola, kaas, mozzarella'
        }, {
            'naam': 'Vegetariana',
            'vegetarisch': true,
            'pikant': false,
            'prijs': '8.00',
            'nummer': '37',
            'sortingWeight': 0,
            'ingredienten': 'artisjokken, asperges, champignons, olijven, paprika, tomaten, uien, brie, kaas'
        }, {
            'naam': 'San_Francesco',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '7.50',
            'nummer': '38',
            'sortingWeight': 0,
            'ingredienten': 'salami, artisjokken, asperges, olijven, tomaten, kaas'
        }, {
            'naam': 'Dinamite',
            'vegetarisch': false,
            'pikant': true,
            'prijs': '8.00',
            'nummer': '39',
            'sortingWeight': 0,
            'ingredienten': 'ham, tonijn, asperges, champignons, knoflook, paprika, tomaten, kaas'
        }, {
            'naam': 'Carbonara_Speciale',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.50',
            'nummer': '40',
            'sortingWeight': 0,
            'ingredienten': 'ei, ham, rosbief, salami, spek, tomaten, uien, kaas'
        }, {
            'naam': 'Santa_Lucia_Speciale',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.50',
            'nummer': '41',
            'sortingWeight': 0,
            'ingredienten': 'ham, salami, artisjokken, asperges, champignons, spaanse_pepers, tomaten, uien, kaas'
        }, {
            'naam': 'Dell&rsquo;_Amore',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '9.25',
            'nummer': '42',
            'sortingWeight': 0,
            'ingredienten': 'ham, ossenhaas, champignons, paprika, tomaten, ananas, gorgonzola, kaas'
        }, {
            'naam': 'Del_Re',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '9.75',
            'nummer': '43',
            'sortingWeight': 0,
            'ingredienten': 'ham, ossenhaas, salami, spek, varkensfilet, champignons, paprika, tomaten, ananas, brie, kaas'
        }, {
            'naam': 'Parigina',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.50',
            'nummer': '44',
            'sortingWeight': 0,
            'ingredienten': 'gehaktsaus, asperges, tomaten, brie, kaas'
        }, {
            'naam': 'Pizza_Gorgonzola',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.50',
            'nummer': '45',
            'sortingWeight': 0,
            'ingredienten': 'ham, salami, artisjokken, asperges, tomaten, uien, gorgonzola, kaas'
        }, {
            'naam': 'Al_Capone',
            'vegetarisch': false,
            'pikant': true,
            'prijs': '9.50',
            'nummer': '46',
            'sortingWeight': 0,
            'ingredienten': 'ossenhaas, salami, asperges, champignons, paprika, tomaten, gorgonzola, kaas, parmezaanse_kaas'
        }, {
            'naam': 'Napoli',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '9.75',
            'nummer': '47',
            'sortingWeight': 0,
            'ingredienten': 'ossenhaas, varkensfilet, asperges, champignons, paprika, tomaten, ananas, gorgonzola, kaas, mozzarella'
        }, {
            'naam': 'Tutti_Frutti',
            'vegetarisch': true,
            'pikant': false,
            'prijs': '7.00',
            'nummer': '48',
            'sortingWeight': 0,
            'ingredienten': 'tomaten, gemengd_fruit, kaas'
        }, {
            'naam': 'Hawaiana',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '7.50',
            'nummer': '49',
            'sortingWeight': 0,
            'ingredienten': 'ham, tomaten, ananas, kaas, mozzarella'
        }, {
            'naam': 'Tropicale',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.00',
            'nummer': '50',
            'sortingWeight': 0,
            'ingredienten': 'garnalen, tomaten, ananas, kaas, mozzarella'
        }, {
            'naam': 'Hawaiana_speciale',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.75',
            'nummer': '51',
            'sortingWeight': 0,
            'ingredienten': 'ham, kipfilet, asperges, champignons, paprika, tomaten, ananas, banaan, kaas'
        }, {
            'naam': 'Tutti_Frutti_speciale',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.50',
            'nummer': '52',
            'sortingWeight': 0,
            'ingredienten': 'ham, tomaten, banaan, gemengd_fruit, gorgonzola, kaas'
        }, {
            'naam': 'Gran_Canaria',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.50',
            'nummer': '53',
            'sortingWeight': 0,
            'ingredienten': 'paling, tomaten, ananas, kaas, mozzarella'
        }, {
            'naam': 'Portoricana',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.75',
            'nummer': '54',
            'sortingWeight': 0,
            'ingredienten': 'inktvis, tomaten, ananas, banaan, gemengd_fruit, kaas, mozzarella'
        }, {
            'naam': 'Capri',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.75',
            'nummer': '55',
            'sortingWeight': 0,
            'ingredienten': 'salami, garnalen, inktvis, paprika, tomaten, gorgonzola, kaas'
        }, {
            'naam': 'Nadia',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.75',
            'nummer': '56',
            'sortingWeight': 0,
            'ingredienten': 'rosbief, broccoli, champignons, spaanse_pepers, tomaten, gorgonzola, kaas, mozzarella'
        }, {
            'naam': 'Anguille',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.50',
            'nummer': '57',
            'sortingWeight': 0,
            'ingredienten': 'paling, zalm, tomaten, uien, kaas'
        }, {
            'naam': 'Bel_Fiore',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.00',
            'nummer': '58',
            'sortingWeight': 0,
            'ingredienten': 'salami, broccoli, tomaten, kaas, mozzarella'
        }, {
            'naam': 'Angelo',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.00',
            'nummer': '59',
            'sortingWeight': 0,
            'ingredienten': 'kipfilet, broccoli, champignons, paprika, tomaten, kaas'
        }, {
            'naam': 'Calzone_frutti_di_mare_speciale',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '10.00',
            'nummer': '60',
            'sortingWeight': 0,
            'ingredienten': 'garnalen, mosselen, paling, tonijn, zalm, tomaten, gorgonzola, kaas'
        }, {
            'naam': 'Calzone_speciale',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '9.00',
            'nummer': '61',
            'sortingWeight': 0,
            'ingredienten': 'ham, salami, spek, varkensfilet, champignons, paprika, spaanse_pepers, tomaten, kaas'
        }, {
            'naam': 'Del_cacciatore',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '9.50',
            'nummer': '62',
            'sortingWeight': 0,
            'ingredienten': 'ham, ossenhaas, rosbief, salami, varkensfilet, champignons, tomaten, uien, kaas'
        }, {
            'naam': 'Del_Padrino',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '9.25',
            'nummer': '63',
            'sortingWeight': 0,
            'ingredienten': 'bolognesesaus, ham, artisjokken, champignons, paprika, tomaten, gorgonzola, kaas, mozzarella'
        }, {
            'naam': 'Mammamia',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.50',
            'nummer': '64',
            'sortingWeight': 0,
            'ingredienten': 'ham, broccoli, paprika, tomaten, gorgonzola, kaas'
        }, {
            'naam': 'Frutti_di_mare_speciale',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '9.75',
            'nummer': '65',
            'sortingWeight': 0,
            'ingredienten': 'ansjovis, garnalen, inktvis, mosselen, paling, tonijn, zalm, tomaten, kaas'
        }, {
            'naam': 'Don_Luigi',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.75',
            'nummer': '66',
            'sortingWeight': 0,
            'ingredienten': 'ham, salami, spek, broccoli, spaanse_pepers, tomaten, uien, kaas, mozzarella'
        }, {
            'naam': 'Mario',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.00',
            'nummer': '67',
            'sortingWeight': 0,
            'ingredienten': 'kipfilet, broccoli, spaanse_pepers, tomaten, ananas, kaas'
        }, {
            'naam': 'Vegetariana_speciale',
            'vegetarisch': true,
            'pikant': false,
            'prijs': '8.75',
            'nummer': '68',
            'sortingWeight': 0,
            'ingredienten': 'artisjokken, asperges, champignons, olijven, paprika, tomaten, uien, ananas, gorgonzola, kaas'
        }, {
            'naam': 'Dello_studente',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.50',
            'nummer': '70',
            'sortingWeight': 0,
            'ingredienten': 'ham, kipfilet, rosbief, broccoli, champignons, tomaten, uien, kaas'
        }, {
            'naam': 'Pescatore',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.50',
            'nummer': '71',
            'sortingWeight': 0,
            'ingredienten': 'inktvis, tonijn, paprika, tomaten, uien, kaas'
        }, {
            'naam': 'San_Ignazio',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.75',
            'nummer': '72',
            'sortingWeight': 0,
            'ingredienten': 'ham, artisjokken, broccoli, olijven, paprika, tomaten, gorgonzola, kaas, mozzarella'
        }, {
            'naam': 'Fabrizio',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.50',
            'nummer': '73',
            'sortingWeight': 0,
            'ingredienten': 'rosbief, broccoli, tomaten, uien, gorgonzola, kaas'
        }, {
            'naam': 'Olandese',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.50',
            'nummer': '74',
            'sortingWeight': 0,
            'ingredienten': 'ei, rosbief, spek, asperges, tomaten, uien, kaas'
        }, {
            'naam': 'San_Giorgio',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.50',
            'nummer': '75',
            'sortingWeight': 0,
            'ingredienten': 'ham, broccoli, olijven, tomaten, uien, gorgonzola, kaas'
        }, {
            'naam': 'San_Genaro',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '8.50',
            'nummer': '76',
            'sortingWeight': 0,
            'ingredienten': 'ham, salami, tonijn, champignons, olijven, paprika, tomaten, kaas'
        }, {
            'naam': 'Paella_all_Italiana',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '10.25',
            'nummer': '77',
            'sortingWeight': 0,
            'ingredienten': 'ham, kipfilet, garnalen, inktvis, mosselen, paling, zalm, paprika, spaanse_pepers, tomaten, uien, kaas'
        }, {
            'naam': 'Del_Capitano',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '9.25',
            'nummer': '78',
            'sortingWeight': 0,
            'ingredienten': 'garnalen, paling, tonijn, broccoli, spaanse_pepers, tomaten, uien, kaas'
        }, {
            'naam': 'Del_vagabondo',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '9.75',
            'nummer': '79',
            'sortingWeight': 0,
            'ingredienten': 'gehaktsaus, artisjokken, asperges, paprika, tomaten, brie, gorgonzola, kaas, mozzarella, parmezaanse_kaas'
        }, {
            'naam': 'Napoli_speciale',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '10.50',
            'nummer': '80',
            'sortingWeight': 0,
            'ingredienten': 'kipfilet, ossenhaas, salami, varkensfilet, asperges, champignons, paprika, tomaten, gorgonzola, kaas, parmezaanse_kaas'
        }, {
            'naam': 'San_Marco',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '9.25',
            'nummer': '69',
            'sortingWeight': 0,
            'ingredienten': 'gehaktsaus, tonijn, asperges, champignons, spaanse_pepers, tomaten, uien, gorgonzola, kaas'
        }, {
            'naam': 'Crudo',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '10.00',
            'nummer': '81',
            'sortingWeight': 0,
            'ingredienten': 'tomaten, mozzarella, parmezaanse_kaas, parmaham, rucola'
        }, {
            'naam': 'Campania',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '10.50',
            'nummer': '82',
            'sortingWeight': 0,
            'ingredienten': 'tomaten, mozzarella, parmaham, cherry_tomaatjes, verse_basilicum, verse_knoflook'
        }, {
            'naam': 'Caprese',
            'vegetarisch': true,
            'pikant': false,
            'prijs': '9.00',
            'nummer': '83',
            'sortingWeight': 0,
            'ingredienten': 'tomaten, mozzarella, cherry_tomaatjes, verse_basilicum, verse_knoflook'
        }, {
            'naam': 'Al pesto',
            'vegetarisch': true,
            'pikant': false,
            'prijs': '10.00',
            'nummer': '84',
            'sortingWeight': 0,
            'ingredienten': 'tomaten, mozzarella, rucola, cherry_tomaatjes, verse_basilicum, groene_pesto, pijnboompitjes'
        }, {
            'naam': 'Contadina',
            'vegetarisch': true,
            'pikant': false,
            'prijs': '10.00',
            'nummer': '85',
            'sortingWeight': 0,
            'ingredienten': 'tomaten, mozzarella, verse_knoflook, gegrilde_aubergine, rode_ui'
        }, {
            'naam': 'Spinacina',
            'vegetarisch': true,
            'pikant': false,
            'prijs': '10.00',
            'nummer': '86',
            'sortingWeight': 0,
            'ingredienten': 'olijven, tomaten, mozzarella, parmezaanse_kaas, verse_knoflook, pijnboompitjes, spinazie'
        }, {
            'naam': 'Neptuno',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '13.00',
            'nummer': '87',
            'sortingWeight': 0,
            'ingredienten': 'tonijn, tomaten, mozzarella, verse_peterselie, verse_knoflook, gepelde_gambas, rode_zalm_snippers'
        }, {
            'naam': 'Panna et salmone',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '11.00',
            'nummer': '88',
            'sortingWeight': 0,
            'ingredienten': 'tomaten, mozzarella, verse_peterselie, verse_knoflook, rode_zalm_snippers, room'
        }, {
            'naam': 'Panna et gamberoni',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '12.50',
            'nummer': '89',
            'sortingWeight': 0,
            'ingredienten': 'tomaten, mozzarella, verse_peterselie, verse_knoflook, gepelde_gambas, room'
        }, {
            'naam': 'Pizzadoc',
            'vegetarisch': false,
            'pikant': false,
            'prijs': '11.00',
            'nummer': '90',
            'sortingWeight': 0,
            'ingredienten': 'tomaten, kaas, mozzarella, parmaham, rucola, cherry_tomaatjes'
        }];
    }
}
