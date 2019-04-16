import { Component, OnInit } from '@angular/core';
import { IRecipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ RecipeService ]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: IRecipe;
  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
    this._recipeService.recipeSelected
      .subscribe(
        (recipe: IRecipe) => {
          this.selectedRecipe = recipe;
        }
      );
  }

}
