export class App {
    constructor() {
        this.title = 'Pizza Picker';
        this.subtitle = 'De beste pizzas!';
        this.ingredientsTitle = 'Kies je beleg...';
    }

    reset() {
        this.ingredientsViewModel.resetIngredients();
        this.pizzasViewModel.resetPizzas();
    }
}
