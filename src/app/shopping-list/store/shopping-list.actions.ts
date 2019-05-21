import { Action } from '@ngrx/store';
import { IIngredient } from 'src/app/shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  constructor(public payload: IIngredient) { }
}

export class AddIngredients implements Action {
  readonly type = ADD_INGREDIENTS;
  constructor(public payload: IIngredient[]) { }
}

export type ShoppingListActions = AddIngredient | AddIngredients;
