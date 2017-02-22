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

import types from './types';

export function addIngredient(ingredient) {
	return {
    type: types.shoppingList.ADD_INGREDIENT,
    ingredient
  }
}

export function removeIngredient(index) {
  return {
    type: types.shoppingList.REMOVE_INGREDIENT,
    index
  }
}

export function editIngredient(index, ingredient) {
  return {
    type: types.shoppingList.EDIT_INGREDIENT,
    index,
    ingredient
  }
}

export function boughtIngredient(index) {
  return {
    type: types.shoppingList.BOUGHT_INGREDIENT,
    index
  }
}
