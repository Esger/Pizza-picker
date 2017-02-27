import {
    inject,
    bindable
} from 'aurelia-framework';

export class PizzaListCustomElement {
    @bindable pizzas;
    constructor() {}
}
