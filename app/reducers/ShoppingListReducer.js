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
export default function shoppingListReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.shoppingList.ADD_INGREDIENT:
      return addIngredient(state, action);
    
    case ActionTypes.shoppingList.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    
    case ActionTypes.shoppingList.EDIT_INGREDIENT:
      return editIngredient(state, action);
    
    case ActionTypes.shoppingList.MARK_INGREDIENT_AS_BOUGHT:
      return markIngredientAsBought(state, action);
    
    case ActionTypes.shoppingList.MARK_INGREDIENT_AS_NOT_BOUGHT:
      return markIngredientAsNotBought(state, action);
    
    default:
      return state;
  }
}

// Add a new ingredient to the shopping list
function addIngredient(state, action) {
  return [
    ...state,
    {
      id: state.reduce((maxID, ingredient) =>
        Math.max(ingredient.id, maxID), 0
      ) + 1,
      name: action.payload.name,
      bought: false
    }
  ];
}

// Remove an ingredient from the shopping list
function removeIngredient(state, action) {
  return state.filter((ingredient) => 
    ingredient.id !== action.payload.id
  );
}

// Edit an ingredient in the shopping list
function editIngredient(state, action) {
  return state.map((ingredient) => 
    ingredient.id === action.payload.id ?
    { ...ingredient, name: action.payload.name } :
    ingredient
  );
}

// Mark an ingredient as bought in the shopping list
function markIngredientAsBought(state, action) {
  return state.map((ingredient) =>
    ingredient.id === action.payload.id ?
    { ...ingredient, bought: true } :
    ingredient
  );
}

// Mark an ingredient as not bought in the shopping list
function markIngredientAsNotBought(state, action) {
  return state.map((ingredient) =>
    ingredient.id === action.payload.id ?
    { ...ingredient, bought: false } :
    ingredient
  );
}
