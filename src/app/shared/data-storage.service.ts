import { AuthService } from './../auth/auth.service';
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
    private _recipeService: RecipeService,
    private authService: AuthService
  ) { }

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put(
      'https://recipe-book-ba3e8.firebaseio.com/recipes.json?auth=' + token,
      this._recipeService.getRecipes()
    );
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this.http.get('https://recipe-book-ba3e8.firebaseio.com/recipes.json?auth=' + token)
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
