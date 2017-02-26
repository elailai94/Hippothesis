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

/*
 * Return the next state given the current state and an action to
 * handle
 */
export default function recipesReducer(state = {}, action) {
	switch(action.type) {
    case ActionTypes.recipes.ADD_RECIPE:
      return addRecipe(state, action);

    default:
      return state;
  }
}

// Add a new recipe to recipes
function addRecipe(state, action) {
  /*
  const { payload } = action;
  const { id, data } = payload;
  const newRecipe = { ...data };

  return {
    ...state,
    [id] : newRecipe
  };
  */
  return state;
}
