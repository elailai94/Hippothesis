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
      return addIngredientToInventoryList(state, action);
    
    case ActionTypes.inventoryList.REMOVE_INGREDIENT:
      return removeIngredientFromInventoryList(state, action);
    
    case ActionTypes.inventoryList.EDIT_INGREDIENT:
      return editIngredientInInventoryList(state, action);
    
    case ActionTypes.inventoryList.MARK_INGREDIENT_AS_USED:
      return markIngredientAsUsedInIngredientList(state, action);
    
    case ActionTypes.inventoryList.MARK_INGREDIENT_AS_NOT_USED:
      return markIngredientAsNotUsedInIngredientList(state, action);
    
    // SHOPPING LIST ACTIONS
    case ActionTypes.shoppingList.ADD_INGREDIENT:
      return addIngredientToShoppingList(state, action);
    
    case ActionTypes.shoppingList.REMOVE_INGREDIENT:
      return removeIngredientFromShoppingList(state, action);
    
    case ActionTypes.shoppingList.EDIT_INGREDIENT:
      return editIngredientInShoppingList(state, action);
    
    case ActionTypes.shoppingList.MARK_INGREDIENT_AS_BOUGHT:
      return markIngredientAsBoughtInShoppingList(state, action);
    
    case ActionTypes.shoppingList.MARK_INGREDIENT_AS_NOT_BOUGHT:
      return markIngredientAsNotBoughtInShoppingList(state, action);
    
    default:
      return state;
  }
}

// Add a new ingredient to the inventory list
function addIngredientToInventoryList(state = initialState, action) {
  return state.concat({
    id: state.reduce((maxID, ingredient) =>
      Math.max(ingredient.id, maxID), 0
    ) + 1,
    used: false,
    bought: true,
    inShoppingList: false,
    name: action.payload.name,
  });
}

// Remove an ingredient from the inventory list
function removeIngredientFromInventoryList(state = initialState, action) {
  return state.filter((ingredient) => {
    return ingredient.id !== action.payload.id;
  });
}

// Edit an ingredient in the inventory list
function editIngredientInInventoryList(state = initialState, action) {
  return state.map((ingredient) => {
    if (ingredient.id === action.payload.id) {
      return { ...ingredient, name: action.payload.name };
    } else {
      return ingredient;
    }
  });
}

// Mark an ingredient as used in the inventory list
function markIngredientAsUsedInIngredientList(state = initialState, action) {
  return state.map((ingredient) => {
    if (ingredient.id === action.payload.id) {
      return { ...ingredient, used: true };
    } else {
      return ingredient;
    }
  });
}

// Mark an ingredient as not used in the shopping list
function markIngredientAsNotUsedInIngredientList(state = initialState, action) {
  return state.map((ingredient) => {
    if (ingredient.id === action.payload.id) {
      return { ...ingredient, used: false };
    } else {
      return ingredient;
    }
  });
}

// Add a new ingredient to the shopping list
function addIngredientToShoppingList(state = initialState, action) {
  return state.concat({
    id: state.reduce((maxID, ingredient) =>
      Math.max(ingredient.id, maxID), 0
    ) + 1,
    bought: false,
    used: false,
    inShoppingList: true,
  });
}

// Remove an ingredient from the shopping list
function removeIngredientFromShoppingList(state = initialState, action) {
  return state.map((ingredient) => {
    if (ingredient.id === action.payload.id) {
      return { ...ingredient, inShoppingList: false };
    } else {
      return ingredient;
    }
  });
}

// Edit an ingredient in the shopping list
function editIngredientInShoppingList(state = initialState, action) {
  return state.map((ingredient) => {
    if (ingredient.id === action.payload.id) {
      return { ...ingredient, name: action.payload.name };
    } else {
      return ingredient;
    }
  });
}

// Mark an ingredient as bought in the shopping list
function markIngredientAsBoughtInShoppingList(state = initialState, action) {
  return state.map((ingredient) => {
    if (ingredient.id === action.payload.id) {
      return { ...ingredient, bought: true };
    } else {
      return ingredient;
    }
  });
}

// Mark an ingredient as not bought in the shopping list
function markIngredientAsNotBoughtInShoppingList(state = initialState, action) {
  return state.map((ingredient) => {
    if (ingredient.id === action.payload.id) {
      return { ...ingredient, bought: false };
    } else {
      return ingredient;
    }
  });
}