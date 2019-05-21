import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IIngredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import * as fromShoppingList from './store/shopping-list.reducers';

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
    private _shoppingListService: ShoppingListService,
    private store: Store<fromShoppingList.AppState>
  ) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }

  onEditItem(event, id: number) {
    this._shoppingListService.checkTheBox(id);
    this._shoppingListService.startedEditing.next(id);
    // this.completeGroceryListMessage = this.ingredients.every((ingredient) => ingredient.checked);
  }

}
