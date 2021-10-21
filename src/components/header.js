import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class HeaderCustomElement {
  constructor(eventAggregator) {
    this._eventAggregator = eventAggregator;
    this.title = 'Pizza Picker';
    this.pizzerias = [
      {
        name: 'Napoli',
        fileName: 'napoli.json'
      },
      {
        name: 'La Trattoria',
        fileName: 'la-trattoria.json'
      }
    ];
    this.selectedPizzeria = this.pizzerias[0];
  }

  attached() {
    this.loadPizzeria()
  }

  loadPizzeria() {
    this._eventAggregator.publish('loadPizzeria', this.selectedPizzeria);
  }
}
