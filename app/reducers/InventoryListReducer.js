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

// Case reducer for inventory list
function addIngredientToInventoryList(state = initialState, action) {
  return state.concat({
    id: state.reduce((maxID, ingredient) =>
      Math.max(ingredient.id, maxID), 0
    ) + 1,
    name: action.payload.name,
    used: false
  });
}

// Case reducer for inventory list
function removeIngredientFromInventoryList(state = initialState, action) {
  return state.filter((ingredient) => {
    return ingredient.id !== action.payload.id;
  });
}

// Case reducer for inventory list
function editIngredientInInventoryList(state = initialState, action) {
  return state.map((ingredient) => {
    if (ingredient.id === action.payload.id) {
      return { ...ingredient, name: action.payload.name };
    } else {
      return ingredient;
    }
  });
}

// Case reducer for inventory list
function markIngredientAsUsedInInventoryList(state = initialState, action) {
  return state.map((ingredient) => {
    if (ingredient.id === action.payload.id) {
      return { ...ingredient, used: true };
    } else {
      return ingredient;
    }
  });
}

// Case reducer for inventory list
function markIngredientAsNotUsedInInventoryList(state = initialState, action) {
  return state.map((ingredient) => {
    if (ingredient.id === action.payload.id) {
      return { ...ingredient, used: false };
    } else {
      return ingredient;
    }
  });
}

// Root reducer for inventory list
export default function InventoryListReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.inventoryList.ADD_INGREDIENT:
      return addIngredientToInventoryList(state, action);
    
    case ActionTypes.inventoryList.REMOVE_INGREDIENT:
      return removeIngredientFromInventoryList(state, action);
    
    case ActionTypes.inventoryList.EDIT_INGREDIENT:
      return editIngredientInInventoryList(state, action);
    
    case ActionTypes.inventoryList.MARK_INGREDIENT_AS_USED:
      return markIngredientAsUsedInInventoryList(state, action);
    
    case ActionTypes.inventoryList.MARK_INGREDIENT_AS_NOT_USED:
      return markIngredientAsNotUsedInInventoryList(state, action);
    
    default:
      return state;
  }
}
