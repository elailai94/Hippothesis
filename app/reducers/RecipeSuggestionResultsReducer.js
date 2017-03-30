/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import ActionTypes from '../constants/ActionTypes';

const initialState = {
  status: 'success',
  resultsList: []
};

// Case reducer for recipe suggestion results
function suggestRecipesRequest(state = initialState, action) {
  return {
    ...state,
    status: action.payload.status
  };
}

// Case reducer for recipe suggestion results
function suggestRecipesSuccess(state = initialState, action) {
  return {
    status: action.payload.status,
    resultsList: action.payload.resultsList
  };
}

// Case reducer for recipe suggestion results
function suggestRecipesFailure(state = initialState, action) {
  return {
    ...state,
    status: action.payload.status
  };
}

// Root reducer for recipe search results
export default function RecipeSuggestionResultsReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.recipeSuggestionResults.SUGGEST_RECIPES_REQUEST:
      return suggestRecipesRequest(state, action);

    case ActionTypes.recipeSuggestionResults.SUGGEST_RECIPES_SUCCESS:
      return suggestRecipesSuccess(state, action);

    case ActionTypes.recipeSuggestionResults.SUGGEST_RECIPES_FAILURE:
      return suggestRecipesFailure(state, action);

    default:
      return state;
  }
}
