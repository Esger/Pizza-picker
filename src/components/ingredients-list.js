import {
    bindable
} from 'aurelia-framework';

export class IngredientsListCustomElement {
    // @bindable ingredients;
    constructor() {
        this.ingredients = {
            'fruit': {
                'ananas' : 0,
                'banaan' : 0,
                'gemengd_fruit' : 0
            },
            'groente': {
                'artisjokken' : 0,
                'asperges' : 0,
                'broccoli' : 0,
                'champignons' : 0,
                'kappertjes' : 0,
                'knoflook' : 0,
                'olijven' : 0,
                'paprika' : 0,
                'spaanse_pepers' : 0,
                'rucola' : 0,
                'cherry_tomaatjes' : 0,
                'tomaten' : 0,
                'verse_basilicum' : 0,
                'verse_knoflook' : 0,
                'verse_peterselie' : 0,
                'groene_pesto' : 0,
                'gegrilde_aubergine' : 0,
                'pijnboompitjes' : 0,
                'rode_ui' : 0,
                'spinazie' : 0,
                'uien' : 0
            },
            'kaas': {
                'brie' : 0,
                'gorgonzola' : 0,
                'kaas' : 0,
                'mozzarella' : 0,
                'parmezaanse_kaas' : 0,
                'room' : 0
            },
            'vis': {
                'ansjovis' : 0,
                'garnalen' : 0,
                'inktvis' : 0,
                'mosselen' : 0,
                'paling' : 0,
                'tonijn' : 0,
                'zeevruchten' : 0,
                'zalm' : 0,
                'gepelde_gambas' : 0,
                'rode_zalm_snippers' : 0
            },
            'vlees': {
                'bolognesesaus' : 0,
                'ei' : 0,
                'gehaktsaus' : 0,
                'ham' : 0,
                'kipfilet' : 0,
                'ossenhaas' : 0,
                'rosbief' : 0,
                'salami' : 0,
                'spek' : 0,
                'varkensfilet' : 0,
                'parmaham' : 0
            }
        }
    }

    likeIngredient(ingredientType, ingredient) {
        let val = parseInt(this.ingredients[ingredientType][ingredient])
        this.ingredients[ingredientType][ingredient] = val + 1;
        console.log('yo', this.ingredients[ingredientType][ingredient]);
    }
}
