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
export default function RecipesReducer(state = initialState, action) {
	switch (action.type) {
    case ActionTypes.recipes.ADD_RECIPE:
      return addRecipe(state, action);

    case ActionTypes.recipes.ADD_RECIPES:
      return addRecipes(state, action);

    default:
      return state;
  }
}

// Add a new recipe to recipes
function addRecipe(state = initialState, action) {
  const { payload } = action;
  const { id, data } = payload;
  const newRecipe = { ...data };

  return {
    ...state,
    [id] : newRecipe
  };
}

// Add new recipes to recipes
function addRecipes(state = initialState, action) {
  return {
    ...state,
    ...(action.payload.recipes)
  };
}
