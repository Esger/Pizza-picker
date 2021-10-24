import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { HttpClient } from 'aurelia-fetch-client';

@inject(EventAggregator)
export class PizzaService {

  constructor(eventAggregator) {
    this._eventAggregator = eventAggregator;
    this._fetchPizzas();
    this._eventAggregator.subscribe('loadPizzeria', pizzeria => {
      this._pizzeria = pizzeria;
      this._fetchPizzas(pizzeria.fileName);
    });
  }

  _fetchPizzas(fileName = 'rossini.json') {
    const httpClient = new HttpClient();
    httpClient.fetch('assets/json/' + fileName)
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

  getPizzeria() {
    return this._pizzeria.name;
  }
}
