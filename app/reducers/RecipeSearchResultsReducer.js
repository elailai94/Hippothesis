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

const initialState = {
  status: 'success',
  resultsList: []
};

/*
 * Return the next state given the current state and an action to
 * handle
 */
export default function RecipeSearchResultsReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.recipeSearchResults.SEARCH_RECIPES_REQUEST:
      return searchRecipesRequest(state, action);

    case ActionTypes.recipeSearchResults.SEARCH_RECIPES_SUCCESS:
      return searchRecipesSuccess(state, action);

    case ActionTypes.recipeSearchResults.SEARCH_RECIPES_FAILURE:
      return searchRecipesFailure(state, aciton);

    default:
      return state;
  }
}

// Update the search status to be in progress
function searchRecipesRequest(state = initialState, action) {
  return {
    ...state,
    status: action.payload.status
  };
}

// Update the search status to be success
function searchRecipesSuccess(state = initialState, action) {
  return {
    status: action.payload.status,
    resultsList: action.payload.resultsList
  };
}

// Update the search status to be failure
function searchRecipesFailure(state = initialState, action) {
  return {
    ...state,
    status: action.payload.status
  };
}
