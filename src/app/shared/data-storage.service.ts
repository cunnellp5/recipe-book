import {
  HttpClient,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { RecipeService } from '../recipes/recipe.service';
import { IRecipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private _recipeService: RecipeService,
    private authService: AuthService
  ) { }

  storeRecipes() {
    const req = new HttpRequest(
      'PUT',
      'https://recipe-book-ba3e8.firebaseio.com/recipes.json',
      this._recipeService.getRecipes(),
      { reportProgress: true }
    );
    return this.httpClient.request(req);
  }

  getRecipes() {
    return this.httpClient.get<IRecipe[]>('https://recipe-book-ba3e8.firebaseio.com/recipes.json?auth=', {
      observe: 'body',
      responseType: 'json'
    })
      .pipe(
        map(
          (recipes) => {
            for (const recipe of recipes) {
              if (!recipe['ingredients']) {
                recipe['ingredients'] = [];
              }
            }
            console.log(recipes);
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
