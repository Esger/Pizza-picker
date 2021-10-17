import { inject, bindable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { PizzaService } from 'services/pizza-service';

@inject(EventAggregator, PizzaService)
export class IngredientsListCustomElement {

  constructor(eventAggregator, pizzaService) {
    this._eventAggregator = eventAggregator;
    this._pizzaService = pizzaService;
    this.toppingsTitle = 'Toppings';
    this.reset = 'Reset';
    this.toppings = [];
    this.toppingsReady = false;
  }

  attached() {
    this.pizzasReadySubscription = this._eventAggregator.subscribe('pizzasReady', _ => {
      this.toppings = this._pizzaService.getToppings();
      this.toppingsReady = true;
    });
  }

  detached() {
    this.pizzasReadySubscription.dispose();
  }

  likeTopping(topping) {
    let newValue;
    const oldValue = topping.pref;
    switch (topping.pref) {
      case -1: newValue = 1; break;
      case 0: newValue = 1; break;
      case 1: newValue = 0; break;
      default: break;
    }
    topping.pref = newValue;
    topping.delta = newValue - oldValue;
    this._eventAggregator.publish('updatePreference', topping);
  }

  dislikeTopping(topping) {
    let newValue;
    const oldValue = topping.pref;
    switch (topping.pref) {
      case -1: newValue = 0; break;
      case 0: newValue = -1; break;
      case 1: newValue = -1; break;
      default: break;
    }
    topping.pref = newValue;
    topping.delta = newValue - oldValue;
    this._eventAggregator.publish('updatePreference', topping);
  }
  
  resetToppings() {
    this.toppings.forEach(topping => topping.pref = 0);
    this._eventAggregator.publish('updatePreference');
  }

}
