import { IRecipe } from './recipe.model';
import { Output, EventEmitter } from '@angular/core';


export class RecipeService {
  @Output() recipeSelected = new EventEmitter<IRecipe>();

  private recipes: IRecipe[] = [
    new IRecipe('A test recipe', 'This is simplay a test', 'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_960_720.jpg'),
    // tslint:disable-next-line:max-line-length
    new IRecipe('Another test recipe', 'This is simplay a test', 'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_960_720.jpg')
  ];

  getRecipes() {
    return [...this.recipes];
  }
}
