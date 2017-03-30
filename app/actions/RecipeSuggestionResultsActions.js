/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import ActionTypes from '../constants/ActionTypes';
import { getRandomRecipes } from '../utilities/Spoonacular';

// Update the suggestion status to be in progress
function suggestRecipesRequest() {
  return {
    type: ActionTypes.recipeSuggestionResults.SUGGEST_RECIPES_REQUEST,
    payload: {
      status: 'in progress'
    }
  };
}

/*
 * Update the suggestion status to be success and the results list to the
 * new results list
 */
function suggestRecipesSuccess(json) {
  return {
    type: ActionTypes.recipeSuggestionResults.SUGGEST_RECIPES_SUCCESS,
    payload: {
      status: 'success',
      resultsList: json
    }
  };
}

// Update the suggestion status to be failure
function suggestRecipesFailure(error) {
  return {
    type: ActionTypes.recipeSuggestionResults.SUGGEST_RECIPES_FAILURE,
    payload: {
      status: 'failure',
      error
    }
  };
}

/*
 * Suggest recipes that fit the parameters and obtain suggestion
 * results
 */
export function suggestRecipes(parameters) {
  return (dispatch) => {
    dispatch(suggestRecipesRequest());

    return getRandomRecipes(parameters)
      .then((normalizedJSON) =>
      	dispatch(suggestRecipesSuccess(normalizedJSON))
      )
      .catch((error) =>
      	dispatch(suggestRecipesFailure(error))
      );
  };
}
