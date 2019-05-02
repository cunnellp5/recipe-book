import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Response } from '@angular/http';
import { IRecipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
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
      .pipe(
        map(
          (response: Response) => {
            const recipes: IRecipe[] = response.json();
            for (const recipe of recipes) {
              if (!recipe['ingredients']) {
                recipe['ingredients'] = [];
              }
            }
            return recipes;
          }
        )
      )
      .subscribe(
        (recipes: IRecipe[]) => {
          this._recipeService.setRecipes(recipes);
        }
      );
  }
}
