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

// Add a new recipe to recipes
export function addRecipeStore(id, data) {
  console.log ("action performed");
  return {
    type: ActionTypes.recipesStore.ADD_RECIPE_TO_STORE,
    payload: {
      id,
      data
    }
  };
}

// Add new recipes to recipes
export function addRecipesStore(json) {
  return {
    type: ActionTypes.recipesStore.ADD_RECIPES_TO_STORE,
    payload: {
      recipes: json.map((recipe) => {
        const { id } = recipe;
        return {
          [ id ] : recipe
        };
      })
    }
  };
}
