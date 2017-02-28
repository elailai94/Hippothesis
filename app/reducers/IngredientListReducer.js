/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

'use strict';

import ActionTypes from '../constants/ActionTypes';

/*
 * Return the next state given the current state and an action to
 * handle
 */
export default function IngredientListReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.ingredientList.ADD_INGREDIENT:
      return addIngredient(state, action);
    
    case ActionTypes.ingredientList.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    
    case ActionTypes.ingredientList.EDIT_INGREDIENT:
      return editIngredient(state, action);
    
    default:
      return state;
  }
}

// Add a new ingredient to the search list
function addIngredient(state, action) {
  return [
    ...state,
    {
      id: state.reduce((maxID, ingredient) =>
        Math.max(ingredient.id, maxID), 0
      ) + 1,
      name: action.payload.name
    }
  ];
}

// Remove an ingredient from the search list
function removeIngredient(state, action) {
  return state.filter((ingredient) => 
    ingredient.id !== action.payload.id
  );
}

// Edit an ingredient in the search list
function editIngredient(state, action) {
  return state.map((ingredient) => 
    ingredient.id === action.payload.id ?
    { ...ingredient, name: action.payload.name } :
    ingredient
  );
}
