import { AuthService } from './../../auth/auth.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IRecipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: IRecipe[];
  subscription$: Subscription;
  authenticated: boolean;

  constructor(
    private _recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
    protected authService: AuthService
  ) { }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  ngOnInit() {
    this.subscription$ = this._recipeService.recipesChanged
      .subscribe(
        (recipes: IRecipe[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this._recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
