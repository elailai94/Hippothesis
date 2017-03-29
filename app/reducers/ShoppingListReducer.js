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

// Case reducer for shopping list
function addIngredientToShoppingList(state = initialState, action) {
  return state.concat({
    id: state.reduce((maxID, ingredient) =>
      Math.max(ingredient.id, maxID), 0
    ) + 1,
    name: action.payload.name,
    bought: false
  });
}

// Case reducer for shopping list
function removeIngredientFromShoppingList(state = initialState, action) {
  return state.filter((ingredient) =>
    ingredient.id !== action.payload.id
  );
}

// Case reducer for shopping list
function editIngredientInShoppingList(state = initialState, action) {
  return state.map((ingredient) => {
    if (ingredient.id === action.payload.id) {
      return { ...ingredient, name: action.payload.name };
    } else {
      return ingredient;
    }
  });
}

// Case reducer for shopping list
function markIngredientAsBoughtInShoppingList(state = initialState, action) {
  return state.map((ingredient) => {
    if (ingredient.id === action.payload.id) {
      return { ...ingredient, bought: true };
    } else {
      return ingredient;
    }
  });
}

// Case reducer for shopping list
function markIngredientAsNotBoughtInShoppingList(state = initialState, action) {
  return state.map((ingredient) => {
    if (ingredient.id === action.payload.id) {
      return { ...ingredient, bought: false };
    } else {
      return ingredient;
    }
  });
}

// Root reducer for shopping list
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
