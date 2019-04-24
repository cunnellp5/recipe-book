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

  onEditItem(id: number) {
    this._shoppingListService.startedEditing.next(id);
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
