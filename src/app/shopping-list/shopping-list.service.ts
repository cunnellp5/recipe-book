import { IIngredient } from '../shared/ingredient.model';
import { EventEmitter } from 'events';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<IIngredient[]>();

  private ingredients: IIngredient[] = [
    new IIngredient('apples', 5),
    new IIngredient('bananas', 11)
  ];

  getIngredients() {
    return [...this.ingredients];
  }
  addIngredient(ingredient: IIngredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit([...this.ingredients]);
  }
}
