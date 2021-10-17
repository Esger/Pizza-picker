import { inject, bindable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { PizzaService } from 'services/pizza-service';

@inject(EventAggregator, PizzaService)
export class IngredientsListCustomElement {

  constructor(eventAggregator, pizzaService) {
    this._eventAggregator = eventAggregator;
    this._pizzaService = pizzaService;
    this.ingredients = [];
    this.toppingsReady = false;
  }

  attached() {
    this.pizzasReadySubscription = this._eventAggregator.subscribe('pizzasReady', _ => {
      this.ingredients = this._pizzaService.getToppings();
      this.toppingsReady = true;
    });
  }

  detached() {
    this.pizzasReadySubscription.dispose();
  }

  likeIngredient(ingredient) {
    let newValue;
    const oldValue = ingredient.pref;
    switch (ingredient.pref) {
      case -1: newValue = 1; break;
      case 0: newValue = 1; break;
      case 1: newValue = 0; break;
      default: break;
    }
    ingredient.pref = newValue;
    ingredient.delta = newValue - oldValue;
    this._eventAggregator.publish('updatePreference', ingredient);
  }

  dislikeIngredient(ingredient) {
    let newValue;
    const oldValue = ingredient.pref;
    switch (ingredient.pref) {
      case -1: newValue = 0; break;
      case 0: newValue = -1; break;
      case 1: newValue = -1; break;
      default: break;
    }
    ingredient.pref = newValue;
    ingredient.delta = newValue - oldValue;
    this._eventAggregator.publish('updatePreference', ingredient);
  }

}
