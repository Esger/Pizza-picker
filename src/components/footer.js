import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { PizzaService } from 'services/pizza-service';

@inject(EventAggregator, PizzaService)
export class FooterCustomElement {
  constructor(eventAggregator, pizzaService) {
    this._eventAggregator = eventAggregator;
    this._pizzaService = pizzaService;
    this.footerText = 'Eet smakelijk.';
    this.footerText2 = 'Met dank aan pizzeria ';
    this.footerLink = 'ashWare';
    this.pizzeria = '';
  }

  attached() {
    this._pizzasReadySubscription = this._eventAggregator.subscribe('pizzasReady', _ => {
      this.pizzeria = this._pizzaService.getPizzeria();
    });
  }

  detached() {
    this._pizzasReadySubscription.dispose();
  }
}
