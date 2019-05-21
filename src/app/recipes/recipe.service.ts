import { IRecipe } from './recipe.model';
import { IIngredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class RecipeService {
  recipesChanged = new Subject<IRecipe[]>();

  private recipes: IRecipe[] = [
    new IRecipe(
      'A test recipe',
      'This is simplay a test',
      'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_960_720.jpg',
      [
        new IIngredient('poop', 1, false),
        new IIngredient('stuff', 2, false)
      ]
    ),
    // tslint:disable-next-line:max-line-length
    new IRecipe(
      'Another test recipe',
      'This is simplay a tickls',
      'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_960_720.jpg',
      [
        new IIngredient('junk', 2, false),
        new IIngredient('garbage', 2, false)
      ]
    )
  ];

  constructor() { }

  setRecipes(recipes: IRecipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return [...this.recipes];
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: IRecipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: IRecipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
