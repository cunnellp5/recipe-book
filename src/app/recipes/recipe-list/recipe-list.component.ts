import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: IRecipe[];

  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this._recipeService.getRecipes();
  }

}
