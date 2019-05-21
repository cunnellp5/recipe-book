import { IIngredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<IIngredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: IIngredient[] = [
    new IIngredient('apples', 5, false),
    new IIngredient('bananas', 11, false)
  ];

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: IIngredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  checkTheBox(index: number) {
    this.ingredients[index].checked = !this.ingredients[index].checked;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
