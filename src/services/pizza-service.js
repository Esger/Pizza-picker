import { EventAggregator } from 'aurelia-event-aggregator';
import { inject, bindable } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@inject(EventAggregator)
export class PizzaService {

  constructor(eventAggregator) {
    this._eventAggregator = eventAggregator;
    this._fetchPizzas();
  }

  _fetchPizzas() {
    const httpClient = new HttpClient();
    const fileName = '/assets/napoli.json';
    httpClient.fetch(fileName)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this._pizzas = data.pizzas;
        this._toppings = data.toppings;
        this._eventAggregator.publish('pizzasReady');
      });
  }

  getPizzas() {
    return this._pizzas;
  }

  getToppings() {
    return this._toppings;
  }

}
