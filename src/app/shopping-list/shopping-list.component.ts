import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IIngredient } from '../shared/ingredient.model';
import * as fromShoppingList from './store/shopping-list.reducers';
import * as ShoppingListActions from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ ingredients: IIngredient[] }>;
  checked = false;
  completeGroceryListMessage: boolean;

  constructor(
    private store: Store<fromShoppingList.AppState>
  ) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }

  onEditItem(event, id: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(id));
    // this._shoppingListService.checkTheBox(id);
    // this._shoppingListService.startedEditing.next(id);
    // this.completeGroceryListMessage = this.ingredients.every((ingredient) => ingredient.checked);
  }

}
