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

export default class ShoppingListActions {
  // Add a new ingredient to the shopping list
  static addIngredient(ingredient) {
    return {
      type: ActionTypes.shoppingList.ADD_INGREDIENT,
      ingredient
    };
  }

  // Remove an ingredient from the shopping list
  static removeIngredient(index) {
    return {
      type: ActionTypes.shoppingList.REMOVE_INGREDIENT,
      index
    };
  }

  // Edit an ingredient in the shopping list
  static editIngredient(index, ingredient) {
    return {
      type: ActionTypes.shoppingList.EDIT_INGREDIENT,
      index,
      ingredient
    };
  }

  // Mark an ingredient as bought in the shopping list
  static markIngredientAsBought(index) {
    return {
      type: ActionTypes.shoppingList.MARK_INGREDIENT_AS_BOUGHT,
      index
    };
  }

  // Mark an ingredient as not bought in the shopping list
  static markIngredientAsNotBought(index) {
    return {
      type: ActionTypes.shoppingList.MARK_INGREDIENT_AS_NOT_BOUGHT,
      index
    };
  }
}
