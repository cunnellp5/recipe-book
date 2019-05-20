import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { IIngredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingListState: Observable<{ ingredients: IIngredient[] }>;
  checked = false;
  completeGroceryListMessage: boolean;
  private subscription$: Subscription;

  constructor(private _shoppingListService: ShoppingListService, private store: Store<{ shoppingList: { ingredients: IIngredient[] } }>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
    // this.subscription$ = this._shoppingListService.ingredientsChanged
    //   .subscribe(
    //     (ingredients: IIngredient[]) => {
    //       this.ingredients = ingredients;
    //     }
    //   );
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
