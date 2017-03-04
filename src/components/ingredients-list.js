import { inject, bindable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class IngredientsListCustomElement {

    constructor(eventAggregator) {
        this.ea = eventAggregator;
        this.ingredients = [
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
                'name': 'parmezaanse kaas',
                'type': 'kaas',
                'pref': 0
            },
            {
                'name': 'room',
                'type': 'kaas',
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
                'name': 'gepelde gambas',
                'type': 'vis',
                'pref': 0
            },
            {
                'name': 'rode zalm snippers',
                'type': 'vis',
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
                'name': 'spaanse pepers',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'rucola',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'cherry tomaatjes',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'tomaten',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'verse basilicum',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'verse knoflook',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'verse peterselie',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'groene pesto',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'gegrilde aubergine',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'pijnboompitjes',
                'type': 'groente',
                'pref': 0
            },
            {
                'name': 'rode ui',
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
            }
        ];
    }

    likeIngredient(ingredient, i) {
        ingredient.pref = (ingredient.pref === -1)? 0 : 1;
        this.ea.publish('upPreference', ingredient);
    }

    dislikeIngredient(ingredient, i) {
        ingredient.pref = (ingredient.pref === 1)? 0 : -1;
        this.ea.publish('downPreference', ingredient);
    }
}
