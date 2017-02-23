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

export default class ShoppingListReducer {
  /*
   * Return the next state given the current state and an action to
   * handle
   */
  static reduce(state = [], action) {
    switch (action.type) {
      case ActionTypes.shoppingList.ADD_INGREDIENT:
        return [
          ...state,
          {
            ingredient: action.ingredient,
            bought: false
          }
        ];
      case ActionTypes.shoppingList.REMOVE_INGREDIENT:
        return state.filter((ingredient, index) => 
          index !== action.index
        );
      case ActionTypes.shoppingList.EDIT_INGREDIENT:
        return state.map((ingredient, index) => 
          index === action.index ?
          { ...ingredient, ingredient: action.ingredient } :
          ingredient
        );
    case ActionTypes.shoppingList.MARK_INGREDIENT_AS_BOUGHT:
      return state.map((ingredient, index) =>
        index === action.index ?
        { ...ingredient, bought: true } :
        ingredient
      );
    case ActionTypes.shoppingList.MARK_INGREDIENT_AS_NOT_BOUGHT:
      return state.map((ingredient, index) =>
        index === action.index ?
        { ...ingredient, bought: false } :
        ingredient
      );
    default:
      return state;
    }
  }
}
