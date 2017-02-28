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

const initialState = {};

/*
 * Return the next state given the current state and an action to
 * handle
 */
export default function IngredientsReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ingredients.ADD_INGREDIENT:
      return addIngredientToIngredients(state, action);

    default:
      return state;
  }
}

// Add a new ingredient to ingredients
function addIngredientToIngredients(state = initialState, action) {
  const { payload } = action;
  const { id, name } = payload;
  const newIngredient = { name: name };

  return {
    ...state,
    [ id ] : newIngredient
  }
}
