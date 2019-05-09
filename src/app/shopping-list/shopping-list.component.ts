import { Component, OnInit, OnDestroy } from '@angular/core';
import { IIngredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: IIngredient[];
  checked = false;
  completeGroceryListMessage: boolean;
  private subscription$: Subscription;

  constructor(private _shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this._shoppingListService.getIngredients();
    this.subscription$ = this._shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients: IIngredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  onEditItem(event, id: number) {
    this._shoppingListService.checkTheBox(id);
    this._shoppingListService.startedEditing.next(id);
    this.completeGroceryListMessage = this.ingredients.every((ingredient) => ingredient.checked);
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
