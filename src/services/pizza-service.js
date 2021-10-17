import { EventAggregator } from 'aurelia-event-aggregator';
import { inject, bindable } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@inject(EventAggregator)
export class PizzaService {

  constructor(eventAggregator) {
    this._eventAggregator = eventAggregator;
    this._fetchPizzas();
    this.timeOutHandle = undefined;
  }

  _fetchPizzas() {
    const httpClient = new HttpClient();
    const fileName = '/assets/napoli.json';
    httpClient.fetch(fileName)
      .then(response => {
        return response.json();
      })
      .then(pizzas => {
        this._pizzas = pizzas;
        this._eventAggregator.publish('pizzasReady');
      });
    // .catch('oops');
  }

  getPizzas() {
    return this._pizzas;
  }

  // getColors() {
  //     const fileName = '/data/colors.json';
  //     return this.client.get(fileName)
  //         .then(data => {
  //             const response = JSON.parse(data.response);
  //             return response;
  //         });
  // }

  // getPizzas() {
  //   let solutions;
  //   if (localStorage.getItem("pizzas-napoli")) {
  //     solutions = JSON.parse(localStorage.getItem("pizzas-napoli"));
  //   } else {
  //     solutions = {};
  //     let boardTypes = this.bs.boardTypes;
  //     for (let type in boardTypes) {
  //       if (boardTypes.hasOwnProperty(type)) {
  //         solutions[type] = [];
  //       }
  //     }
  //   }
  //   return solutions;
  // }

  // saveToLocalStorage() {
  //   this.pizzas[this.bs.boardType] = this.sortSolutions(this.pizzas[this.bs.boardType]);
  //   localStorage.setItem("pentominos2", JSON.stringify(this.pizzas));
  //   clearTimeout(this.timeOutHandle);
  // }
}
