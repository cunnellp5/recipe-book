import { IIngredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<IIngredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: IIngredient[] = [
    new IIngredient('apples', 5),
    new IIngredient('bananas', 11)
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: IIngredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next([...this.ingredients]);
  }

  addIngredients(ingredients: IIngredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next([...this.ingredients]);
  }

  updateIngredient(index: number, newIngredient: IIngredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
