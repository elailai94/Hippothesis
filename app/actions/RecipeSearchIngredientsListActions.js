/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import ActionTypes from '../constants/ActionTypes';

// Add a new ingredient to the recipe search ingredients list
export function addIngredientToRecipeSearchIngredientsList(name) {
  return {
    type: ActionTypes.recipeSearchIngredientsList.ADD_INGREDIENT,
    payload: {
      name
    }
  };
}

// Remove an ingredient from the recipe search ingredients list
export function removeIngredientFromRecipeSearchIngredientsList(id) {
  return {
    type: ActionTypes.recipeSearchIngredientsList.REMOVE_INGREDIENT,
    payload: {
      id
    }
  };
}

// Edit an ingredient in the recipe search ingredients list
export function editIngredientInRecipeSearchIngredientsList(id, name) {
  return {
    type: ActionTypes.recipeSearchIngredientsList.EDIT_INGREDIENT,
    payload: {
      id,
      name
    }
  };
}
