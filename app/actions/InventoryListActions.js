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
import { addIngredientToIngredients } from './IngredientsActions';

// Add a new ingredient to the inventory list
export function addIngredientToInventoryList(id, name) {
  //return (dispatch) => {
  //  dispatch(addIngredient(id));
  return addIngredient(id);
  //  dispatch(addIngredientToIngredients(id, name));
  //};
}

function addIngredient(id) {
  return {
    type: ActionTypes.inventoryList.ADD_INGREDIENT,
    payload: {
      id
    }
  };
}

// Remove an ingredient from the inventory list
export function removeIngredientFromInventoryList(id) {
  return {
    type: ActionTypes.inventoryList.REMOVE_INGREDIENT,
    payload: {
      id
    }
  };
}

// Edit an ingredient in the inventory list
export function editIngredientInInventoryList(oldID, newID) {
  return {
    type: ActionTypes.inventoryList.EDIT_INGREDIENT,
    payload: {
      oldID,
      newID
    }
  };
}

// Mark an ingredient as used in the inventory list
export function markIngredientAsUsedInInventoryList(id) {
  return {
    type: ActionTypes.inventoryList.MARK_INGREDIENT_AS_USED,
    payload: {
      id
    }
  };
}

// Mark an ingredient as not used in the inventory list
export function markIngredientAsNotUsedInInventoryList(id) {
  return {
    type: ActionTypes.inventoryList.MARK_INGREDIENT_AS_NOT_USED,
    payload: {
      id
    }
  };
}
