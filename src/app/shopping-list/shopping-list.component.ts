import { Component, OnInit } from '@angular/core';
import { IIngredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IIngredient[];

  constructor(private _shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this._shoppingListService.getIngredients();
    this._shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients: IIngredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

}
