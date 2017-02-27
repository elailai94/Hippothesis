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

const initialState = [];

/*
 * Return the next state given the current state and an action to
 * handle
 */
export default function ShoppingListReducer(state = initialState, action) {
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
function addIngredient(state = initialState, action) {
  return [
    ...state,
    {
      id: action.payload.id,
      name: action.payload.name,
      bought: false
    }
  ];
}

// Remove an ingredient from the shopping list
function removeIngredient(state = initialState, action) {
  return state.filter((ingredient) => {
    return ingredient.id !== action.payload.id;
  });
}

// Edit an ingredient in the shopping list
function editIngredient(state = initialState, action) {
  return state.map((ingredient) => {
    if (ingredient.id === action.payload.id) {
      return { ...ingredient, name: action.payload.name };
    } else {
      return ingredient;
    }
  });
}

// Mark an ingredient as bought in the shopping list
function markIngredientAsBought(state = initialState, action) {
  return state.map((ingredient) => {
    if (ingredient.id === action.payload.id) {
      return { ...ingredient, bought: true };
    } else {
      return ingredient;
    }
  });
}

// Mark an ingredient as not bought in the shopping list
function markIngredientAsNotBought(state = initialState, action) {
  return state.map((ingredient) => {
    if (ingredient.id === action.payload.id) {
      return { ...ingredient, bought: true };
    } else {
      return ingredient;
    }
  });
}
