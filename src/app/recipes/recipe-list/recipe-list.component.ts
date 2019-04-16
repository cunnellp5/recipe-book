import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IRecipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<IRecipe>();
  recipes: IRecipe[] = [
    new IRecipe('A test recipe', 'This is simplay a test', 'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_960_720.jpg'),
    new IRecipe('Another test recipe', 'This is simplay a test', 'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: IRecipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
