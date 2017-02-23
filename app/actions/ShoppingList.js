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

export function addIngredient(ingredient) {
	return {
    type: ActionTypes.shoppingList.ADD_INGREDIENT,
    ingredient
  }
}

export function removeIngredient(index) {
  return {
    type: ActionTypes.shoppingList.REMOVE_INGREDIENT,
    index
  }
}

export function editIngredient(index, ingredient) {
  return {
    type: ActionTypes.shoppingList.EDIT_INGREDIENT,
    index,
    ingredient
  }
}

export function boughtIngredient(index) {
  return {
    type: ActionTypes.shoppingList.BOUGHT_INGREDIENT,
    index
  }
}
