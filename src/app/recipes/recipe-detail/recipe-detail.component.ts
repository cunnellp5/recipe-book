import { IIngredient } from './../../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: IRecipe;
  id: number;

  constructor(
    private _recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<{ shoppingList: { ingredients: IIngredient[] } }>
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this._recipeService.getRecipeById(this.id);
        }
      );
  }

  addToShoppingList() {
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
  }

  onEditRecipe() {
    this.router.navigate([`edit`], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    this._recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
