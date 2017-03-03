import { inject, bindable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class IngredientsListCustomElement {

    constructor(EventAggregator) {
        this.ea = EventAggregator;
        this.ingredients = [
            {
                'name': 'ananas',
                'type': 'fruit',
                'pref': null
            },
            {
                'name': 'banaan',
                'type': 'fruit',
                'pref': null
            },
            {
                'name': 'gemengd_fruit',
                'type': 'fruit',
                'pref': null
            },
            {
                'name': 'artisjokken',
                'type': 'groente',
                'pref': null
            },
            {
                'name': 'asperges',
                'type': 'groente',
                'pref': null
            },
            {
                'name': 'broccoli',
                'type': 'groente',
                'pref': null
            },
            {
                'name': 'champignons',
                'type': 'groente',
                'pref': null
            },
            {
                'name': 'kappertjes',
                'type': 'groente',
                'pref': null
            },
            {
                'name': 'knoflook',
                'type': 'groente',
                'pref': null
            },
            {
                'name': 'olijven',
                'type': 'groente',
                'pref': null
            },
            {
                'name': 'paprika',
                'type': 'groente',
                'pref': null
            },
            {
                'name': 'spaanse_pepers',
                'type': 'groente',
                'pref': null
            },
            {
                'name': 'rucola',
                'type': 'groente',
                'pref': null
            },
            {
                'name': 'cherry_tomaatjes',
                'type': 'groente',
                'pref': null
            },
            {
                'name': 'tomaten',
                'type': 'groente',
                'pref': null
            },
            {
                'name': 'verse_basilicum',
                'type': 'groente',
                'pref': null
            },
            {
                'name': 'verse_knoflook',
                'type': 'groente',
                'pref': null
            },
            {
                'name': 'verse_peterselie',
                'type': 'groente',
                'pref': null
            },
            {
                'name': 'groene_pesto',
                'type': 'groente',
                'pref': null
            },
            {
                'name': 'gegrilde_aubergine',
                'type': 'groente',
                'pref': null
            },
            {
                'name': 'pijnboompitjes',
                'type': 'groente',
                'pref': null
            },
            {
                'name': 'rode_ui',
                'type': 'groente',
                'pref': null
            },
            {
                'name': 'spinazie',
                'type': 'groente',
                'pref': null
            },
            {
                'name': 'uien',
                'type': 'groente',
                'pref': null
            },
            {
                'name': 'brie',
                'type': 'kaas',
                'pref': null
            },
            {
                'name': 'gorgonzola',
                'type': 'kaas',
                'pref': null
            },
            {
                'name': 'kaas',
                'type': 'kaas',
                'pref': null
            },
            {
                'name': 'mozzarella',
                'type': 'kaas',
                'pref': null
            },
            {
                'name': 'parmezaanse_kaas',
                'type': 'kaas',
                'pref': null
            },
            {
                'name': 'room',
                'type': 'kaas',
                'pref': null
            },
            {
                'name': 'ansjovis',
                'type': 'vis',
                'pref': null
            },
            {
                'name': 'garnalen',
                'type': 'vis',
                'pref': null
            },
            {
                'name': 'inktvis',
                'type': 'vis',
                'pref': null
            },
            {
                'name': 'mosselen',
                'type': 'vis',
                'pref': null
            },
            {
                'name': 'paling',
                'type': 'vis',
                'pref': null
            },
            {
                'name': 'tonijn',
                'type': 'vis',
                'pref': null
            },
            {
                'name': 'zeevruchten',
                'type': 'vis',
                'pref': null
            },
            {
                'name': 'zalm',
                'type': 'vis',
                'pref': null
            },
            {
                'name': 'gepelde_gambas',
                'type': 'vis',
                'pref': null
            },
            {
                'name': 'rode_zalm_snippers',
                'type': 'vis',
                'pref': null
            },
            {
                'name': 'bolognesesaus',
                'type': 'vlees',
                'pref': null
            },
            {
                'name': 'ei',
                'type': 'vlees',
                'pref': null
            },
            {
                'name': 'gehaktsaus',
                'type': 'vlees',
                'pref': null
            },
            {
                'name': 'ham',
                'type': 'vlees',
                'pref': null
            },
            {
                'name': 'kipfilet',
                'type': 'vlees',
                'pref': null
            },
            {
                'name': 'ossenhaas',
                'type': 'vlees',
                'pref': null
            },
            {
                'name': 'rosbief',
                'type': 'vlees',
                'pref': null
            },
            {
                'name': 'salami',
                'type': 'vlees',
                'pref': null
            },
            {
                'name': 'spek',
                'type': 'vlees',
                'pref': null
            },
            {
                'name': 'varkensfilet',
                'type': 'vlees',
                'pref': null
            },
            {
                'name': 'parmaham',
                'type': 'vlees',
                'pref': null
            }
        ];
    }

    likeIngredient(ingredient) {
        ingredient['pref'] = true;
        this.ea.publish('setPreference', ingredient);
    }

    dislikeIngredient(ingredient) {
        ingredient['pref'] = false;
        this.ea.publish('setPreference', ingredient);
    }
}
