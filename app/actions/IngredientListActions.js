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

// Add a new ingredient to the search list
export function addIngredient(name) {
  return {
    type: ActionTypes.ingredientList.ADD_INGREDIENT,
    payload: {
      name
    }
  };
}

// Remove an ingredient from the search list
export function removeIngredient(id) {
  return {
    type: ActionTypes.ingredientList.REMOVE_INGREDIENT,
    payload: {
      id
    }
  };
}

// Edit an ingredient in the search list
export function editIngredient(id, name) {
  return {
    type: ActionTypes.ingredientList.EDIT_INGREDIENT,
    payload: {
      id,
      name
    }
  };
}