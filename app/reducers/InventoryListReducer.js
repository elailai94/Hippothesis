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
export default function InventoryListReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.inventoryList.ADD_INGREDIENT:
      return addIngredient(state, action);
    
    case ActionTypes.inventoryList.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    
    case ActionTypes.inventoryList.EDIT_INGREDIENT:
      return editIngredient(state, action);
    
    case ActionTypes.inventoryList.MARK_INGREDIENT_AS_USED:
      return markIngredientAsUsed(state, action);
    
    case ActionTypes.inventoryList.MARK_INGREDIENT_AS_NOT_USED:
      return markIngredientAsNotUsed(state, action);
    
    default:
      return state;
  }
}

// Add a new ingredient to the inventory list
function addIngredient(state = initialState, action) {
  return [
    ...state,
    {
      id: action.payload.id,
      name: action.payload.name,
      used: false
    }
  ];
}

// Remove an ingredient from the inventory list
function removeIngredient(state = initialState, action) {
  return state.filter((ingredient) => {
    return ingredient.id !== action.payload.id;
  });
}

// Edit an ingredient in the inventory list
function editIngredient(state = initialState, action) {
  return state.map((ingredient) => {
    if (ingredient.id === action.payload.id) {
      return { ...ingredient, name: action.payload.name };
    } else {
      return ingredient;
    }
  });
}

// Mark an ingredient as used in the inventory list
function markIngredientAsUsed(state = initialState, action) {
  return state.map((ingredient) => {
    if (ingredient.id === action.payload.id) {
      return { ...ingredient, used: true };
    } else {
      return ingredient;
    }
  });
}

// Mark an ingredient as not used in the shopping list
function markIngredientAsNotUsed(state = initialState, action) {
  return state.map((ingredient) => {
    if (ingredient.id === action.payload.id) {
      return { ...ingredient, used: false };
    } else {
      return ingredient;
    }
  });
}
