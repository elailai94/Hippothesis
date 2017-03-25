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
import { complexRecipeSearch } from '../utilities/Spoonacular';
import { addRecipes } from './RecipesActions';

/*
 * Search through recipes that fit the parameters and obtain search
 * results
 */
export function searchRecipes(parameters) {
  return (dispatch) => {
    dispatch(searchRecipesRequest());

    return complexRecipeSearch(parameters)
      .then((json) => {
        dispatch(searchRecipesSuccess(json));
        dispatch(addRecipes(json));
      })
      .catch((error) => dispatch(searchRecipesFailure(error)));
  };
}

// Update the search status to be in progress
function searchRecipesRequest() {
  return {
    type: ActionTypes.recipeSearchResults.SEARCH_RECIPES_REQUEST,
    payload: {
      status: 'in progress'
    }
  };
}

/*
 * Update the search status to be success and the results list to the
 * new results list
 */
function searchRecipesSuccess(json) {
  return {
    type: ActionTypes.recipeSearchResults.SEARCH_RECIPES_SUCCESS,
    payload: {
      status: 'success',
      resultsList: json.results.map((result) => result.id)
    }
  };
}

// Update the search status to be failure
function searchRecipesFailure(error) {
  return {
    type: ActionTypes.recipeSearchResults.SEARCH_RECIPES_FAILURE,
    payload: {
      status: 'failure',
      error
    }
  };
}
