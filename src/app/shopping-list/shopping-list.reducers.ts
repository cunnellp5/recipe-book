import { Action } from '@ngrx/store';
import { IIngredient } from '../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

const initialState = {
  ingredients: [
    new IIngredient('apples', 5, false),
    new IIngredient('bananas', 11, false)
  ]
};

export function shoppingListReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action]
      }

  }
  return state;
}