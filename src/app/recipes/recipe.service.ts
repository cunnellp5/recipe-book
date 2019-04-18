import { IRecipe } from './recipe.model';
import { Output, EventEmitter, Injectable } from '@angular/core';
import { IIngredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  @Output() recipeSelected = new EventEmitter<IRecipe>();

  private recipes: IRecipe[] = [
    new IRecipe(
      'A test recipe',
      'This is simplay a test',
      'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_960_720.jpg',
      [
        new IIngredient('poop', 1),
        new IIngredient('stuff', 2)
      ]
    ),
    // tslint:disable-next-line:max-line-length
    new IRecipe(
      'Another test recipe',
      'This is simplay a tickls',
      'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_960_720.jpg',
      [
        new IIngredient('junk', 2),
        new IIngredient('garbage', 2)
      ]
    )
  ];

  constructor(private _slService: ShoppingListService) {}

  getRecipes() {
    return [...this.recipes];
  }

  addIngredientsToShoppingList(ingredients: IIngredient[]) {
    this._slService.addIngredients(ingredients);
  }
}
