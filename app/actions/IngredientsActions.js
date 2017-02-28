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

// Add a new ingredient to ingredients
export function addIngredientToIngredients(id, name) {
	return {
    type: ActionTypes.ingredients.ADD_INGREDIENT,
    payload: {
      id,
      name
    }
  };
}

// Add new ingredients to ingredients
export function addIngredientsToIngredients(json) {
  return {
    type: ActionTypes.ingredients.ADD_INGREDIENTS,
    payload: {
      ingredients: json
    }
  };
}
