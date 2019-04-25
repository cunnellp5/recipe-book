import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Response } from '@angular/http';
import { IRecipe } from '../recipes/recipe.model';

@Injectable()

export class DataStorageService {
  constructor(
    private http: Http,
    private _recipeService: RecipeService
  ) { }

  storeRecipes() {
    return this.http.put(
      'https://recipe-book-ba3e8.firebaseio.com/recipes.json',
      this._recipeService.getRecipes()
    );
  }

  getRecipes() {
    return this.http.get('https://recipe-book-ba3e8.firebaseio.com/recipes.json')
      .subscribe(
        (response: Response) => {
          const recipes: IRecipe[] = response.json();
          this._recipeService.setRecipes(recipes);
        }
      );
  }
}
