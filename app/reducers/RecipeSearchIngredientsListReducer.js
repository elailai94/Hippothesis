/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import ActionTypes from '../constants/ActionTypes';

const initialState = [];

// Case reducer for recipe search ingredients list
function addIngredientToRecipeSearchIngredientsList(state = initialState, action) {
  return state.concat({
    id: state.reduce((maxID, ingredient) =>
      Math.max(ingredient.id, maxID), 0
    ) + 1,
    name: action.payload.name,
    bought: false
  });
}

// Case reducer for recipe search ingredients list
function removeIngredientFromRecipeSearchIngredientsList(state = initialState, action) {
  return state.filter((ingredient) => 
    ingredient.id !== action.payload.id
  );
}

// Case reducer for recipe search ingredients list
function editIngredientInRecipeSearchIngredientsList(state = initialState, action) {
  return state.map((ingredient) => {
    if (ingredient.id === action.payload.id) {
      return { ...ingredient, name: action.payload.name };
    } else {
      return ingredient;
    }
  });;
}

// Root reducer for recipe search ingredients list
export default function IngredientListReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.recipeSearchIngredientsList.ADD_INGREDIENT:
      return addIngredientToRecipeSearchIngredientsList(state, action);
    
    case ActionTypes.recipeSearchIngredientsList.REMOVE_INGREDIENT:
      return removeIngredientFromRecipeSearchIngredientsList(state, action);
    
    case ActionTypes.recipeSearchIngredientsList.EDIT_INGREDIENT:
      return editIngredientInRecipeSearchIngredientsList(state, action);
    
    default:
      return state;
  }
}
