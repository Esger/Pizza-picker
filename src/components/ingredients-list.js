import {
    bindable
} from 'aurelia-framework';

export class IngredientsListCustomElement {
    // @bindable ingredients;
    constructor() {
        this.ingredients = [
            {
                'name': 'ananas',
                'type': 'fruit',
                'pref': 0
            },
            {
                'name': 'banaan',
                'type': 'fruit',
                'pref': 0
            },
            {
                'name': 'gemengd_fruit',
                'type': 'fruit',
                'pref': 0
            },
            {
                'name': 'artisjokken',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'asperges',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'broccoli',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'champignons',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'kappertjes',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'knoflook',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'olijven',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'paprika',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'spaanse_pepers',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'rucola',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'cherry_tomaatjes',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'tomaten',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'verse_basilicum',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'verse_knoflook',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'verse_peterselie',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'groene_pesto',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'gegrilde_aubergine',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'pijnboompitjes',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'rode_ui',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'spinazie',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'uien',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'brie',
                'type': 'kaas',
                'pref': 0
            },
            {
                'name': 'gorgonzola',
                'type': 'kaas',
                'pref': 0
            },
            {
                'name': 'kaas',
                'type': 'kaas',
                'pref': 0
            },
            {
                'name': 'mozzarella',
                'type': 'kaas',
                'pref': 0
            },
            {
                'name': 'parmezaanse_kaas',
                'type': 'kaas',
                'pref': 0
            },
            {
                'name': 'room',
                'type': 'kaas',
                'pref': 0
            },
            {
                'name': 'ansjovis',
                'type': 'vis',
                'pref': 0
            },
            {
                'name': 'garnalen',
                'type': 'vis',
                'pref': 0
            },
            {
                'name': 'inktvis',
                'type': 'vis',
                'pref': 0
            },
            {
                'name': 'mosselen',
                'type': 'vis',
                'pref': 0
            },
            {
                'name': 'paling',
                'type': 'vis',
                'pref': 0
            },
            {
                'name': 'tonijn',
                'type': 'vis',
                'pref': 0
            },
            {
                'name': 'zeevruchten',
                'type': 'vis',
                'pref': 0
            },
            {
                'name': 'zalm',
                'type': 'vis',
                'pref': 0
            },
            {
                'name': 'gepelde_gambas',
                'type': 'vis',
                'pref': 0
            },
            {
                'name': 'rode_zalm_snippers',
                'type': 'vis',
                'pref': 0
            },
            {
                'name': 'bolognesesaus',
                'type': 'vlees',
                'pref': 0
            },
            {
                'name': 'ei',
                'type': 'vlees',
                'pref': 0
            },
            {
                'name': 'gehaktsaus',
                'type': 'vlees',
                'pref': 0
            },
            {
                'name': 'ham',
                'type': 'vlees',
                'pref': 0
            },
            {
                'name': 'kipfilet',
                'type': 'vlees',
                'pref': 0
            },
            {
                'name': 'ossenhaas',
                'type': 'vlees',
                'pref': 0
            },
            {
                'name': 'rosbief',
                'type': 'vlees',
                'pref': 0
            },
            {
                'name': 'salami',
                'type': 'vlees',
                'pref': 0
            },
            {
                'name': 'spek',
                'type': 'vlees',
                'pref': 0
            },
            {
                'name': 'varkensfilet',
                'type': 'vlees',
                'pref': 0
            },
            {
                'name': 'parmaham',
                'type': 'vlees',
                'pref': 0
            }
        ];
    }

    likeIngredient(ingredient) {
        ingredient['pref'] ++;
    }

    dislikeIngredient(ingredient) {
        ingredient['pref'] --;
    }
}
