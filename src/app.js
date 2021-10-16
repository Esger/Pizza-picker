export class App {
    constructor() {
        this.title = 'Pizza Picker';
        this.subtitle = 'Pizzas';
        this.ingredientsTitle = 'Toppings';
    }

    reset() {
        this.ingredientsViewModel.resetIngredients();
        this.pizzasViewModel.resetPizzas();
    }
}
