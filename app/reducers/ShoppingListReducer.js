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

/*
 * Return the next state given the current state and an action to
 * handle
 */
export default function ShoppingListReducer(state = initialState, action) {
  switch (action.type) {
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

// Add a new ingredient to the shopping list
function addIngredientToShoppingList(state = initialState, action) {
  return state.concat({
    id: action.payload.id,
    bought: false
  });
}

// Remove an ingredient from the shopping list
function removeIngredientFromShoppingList(state = initialState, action) {
  return state.filter((ingredient) => {
    return ingredient.id !== action.payload.id;
  });
}

// Edit an ingredient in the shopping list
function editIngredientInShoppingList(state = initialState, action) {
  return state.map((ingredient) => {
    if (ingredient.id === action.payload.oldID) {
      return { ...ingredient, id: action.payload.newID };
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
