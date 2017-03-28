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

// Add a new ingredient to the inventory list
export function addIngredient(name) {
  return {
    type: ActionTypes.inventoryList.ADD_INGREDIENT,
    payload: {
      name
    }
  };
}

// Remove an ingredient from the inventory list
export function removeIngredient(id) {
  return {
    type: ActionTypes.inventoryList.REMOVE_INGREDIENT,
    payload: {
      id
    }
  };
}

// Edit an ingredient in the inventory list
export function editIngredient(id, name) {
  return {
    type: ActionTypes.inventoryList.EDIT_INGREDIENT,
    payload: {
      id,
      name
    }
  };
}

// Mark an ingredient as used in the inventory list
export function markIngredientAsUsed(id) {
  return {
    type: ActionTypes.inventoryList.MARK_INGREDIENT_AS_USED,
    payload: {
      id
    }
  };
}

// Mark an ingredient as not used in the inventory list
export function markIngredientAsNotUsed(id) {
  return {
    type: ActionTypes.inventoryList.MARK_INGREDIENT_AS_NOT_USED,
    payload: {
      id
    }
  };
}
