import { IIngredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<IIngredient[]>();

  private ingredients: IIngredient[] = [
    new IIngredient('apples', 5),
    new IIngredient('bananas', 11)
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient(ingredient: IIngredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next([...this.ingredients]);
  }

  addIngredients(ingredients: IIngredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next([...this.ingredients]);
  }
}
