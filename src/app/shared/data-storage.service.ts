import {
  HttpClient,
  // HttpHeaders,
  HttpParams,
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
    const token = this.authService.getToken();
    // const headers = new HttpHeaders().set('Authorization', 'Bearer sometoken');

    // return this.httpClient.put(
    //   'https://recipe-book-ba3e8.firebaseio.com/recipes.json' + token,
    //   this._recipeService.getRecipes(), {
    //     observe: 'body',
    //     params: new HttpParams().set('auth', token)
    //     // headers: headers
    //   }
    // );

    const req = new HttpRequest(
      'PUT',
      'https://recipe-book-ba3e8.firebaseio.com/recipes.json',
      this._recipeService.getRecipes(),
      { reportProgress: true }
    );
    return this.httpClient.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this.httpClient.get<IRecipe[]>('https://recipe-book-ba3e8.firebaseio.com/recipes.json?auth=' + token, {
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
