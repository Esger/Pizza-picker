import { inject, bindable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { PizzaService } from 'services/pizza-service';

@inject(EventAggregator,PizzaService)
export class PizzaListCustomElement {

  constructor(eventAggregator,pizzaService) {
    this._eventAggregator = eventAggregator;
    this._pizzaService = pizzaService;
    this.showList = true;
    this.pizzas = [];
    this.pizzasReady = false;
  }
  
  attached() {
    this.updatePreferenceSubscription = this._eventAggregator.subscribe('updatePreference', ingredient => {
      this._updatePreferences(ingredient);
    });
    this.pizzasReadySubscription = this._eventAggregator.subscribe('pizzasReady', _ => {
      this.pizzas = this._pizzaService.getPizzas();
      this.pizzasReady = true;
    });
  }

  detached() {
    this.updatePreferenceSubscription.dispose();
    this.pizzasReadySubscription.dispose();
  }

  _updatePreferences(ingredient) {
    this.showList = !this.showList;
    for (let pizza of this.pizzas) {
      if (pizza.ingredienten.includes(ingredient.name)) {
        pizza.sortingWeight += ingredient.delta;
      }
    }
    setTimeout(() => {
      this.showList = !this.showList;
    }, 0);
  }

}
