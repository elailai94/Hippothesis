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

// Case reducer for recipe search results
function searchRecipesRequest(state = initialState, action) {
  return {
    ...state,
    status: action.payload.status
  };
}

// Case reducer for recipe search results
function searchRecipesSuccess(state = initialState, action) {
  return {
    status: action.payload.status,
    resultsList: action.payload.resultsList
  };
}

// Case reducer for recipe search results
function searchRecipesFailure(state = initialState, action) {
  return {
    ...state,
    status: action.payload.status
  };
}

// Root reducer for recipe search results
export default function RecipeSearchResultsReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.recipeSearchResults.SEARCH_RECIPES_REQUEST:
      return searchRecipesRequest(state, action);

    case ActionTypes.recipeSearchResults.SEARCH_RECIPES_SUCCESS:
      return searchRecipesSuccess(state, action);

    case ActionTypes.recipeSearchResults.SEARCH_RECIPES_FAILURE:
      return searchRecipesFailure(state, action);

    default:
      return state;
  }
}
