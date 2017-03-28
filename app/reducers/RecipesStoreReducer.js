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

// Case reducer for recipes
function addRecipeStore(state = initialState, action) {
  const { payload } = action;
  const { id, data } = payload;
  const newRecipe = { ...data };

  return {
    ...state,
    [id] : newRecipe
  };
}

// Case reducer for recipes
function addRecipesStore(state = initialState, action) {
  return {
    ...state,
    ...(action.payload.recipes)
  };
}

// Root reducer for recipes
export default function RecipesReducer(state = initialState, action) {
	switch (action.type) {
    case ActionTypes.recipesStore.ADD_RECIPE_TO_STORE:
      return addRecipeStore(state, action);

    case ActionTypes.recipesStore.ADD_RECIPES_TO_STORE:
      return addRecipesStore(state, action);

    default:
      return state;
  }
}
