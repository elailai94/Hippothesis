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

import qs from 'qs';
import Settings from '../constants/Settings';

// Autocomplete a search for an ingredient
export function autocompleteIngredientSearch(parameters) {
  return callEndpoint(
    Settings.spoonacular.AUTOCOMPLETE_INGREDIENT_SEARCH_PATH,
    parameters
  );
}

// Autocomplete a partial input to possible recipe name
export function autocompleteRecipeSearch(parameters) {
  return callEndpoint(
    Settings.spoonacular.AUTOCOMPLETE_RECIPE_SEARCH_PATH,
    parameters
  );
}

/* 
 * Search through hundreds of thousands of recipes using advanced
 * filtering and ranking
 * NOTE: Since this method combines three other functionalities, each
 * request counts as 3 requests. If you set addRecipeInformation
 * in parameters to true, half a request is added for each recipe
 * returned as it saves you the get recipe information calls
 */
export function complexRecipeSearch(parameters) {
  return callEndpoint(
    Settings.spoonacular.COMPLEX_RECIPE_SEARCH_PATH,
    parameters
  );
}

// Get information about a recipe
export function getRecipeInformation(id, parameters) {
  const path = Settings.spoonacular.GET_RECIPE_INFORMATION_PATH
    .replace('{id}', id);
  return callEndpoint(path, parameters);
}

// Find recipes which are similar to the given one
export function findSimilarRecipes(id) {
  const path = Settings.spoonacular.FIND_SIMILAR_RECIPES_PATH
    .replace('{id}', id);
  return callEndpoint(path, {});
}

/*
 * Generate a meal plan with three meals per day (breakfast, lunch
 * and dinner)
 */
export function generateMealPlan(parameters) {
  return callEndpoint(
    Settings.spoonacular.GENERATE_MEAL_PLAN_PATH,
    parameters
  );
}

// Call the endpoint
export function callEndpoint(path, parameters) {
  let queryStrings = qs.stringify(parameters, { skipNulls: true });
  queryStrings = queryStrings === '' ? queryStrings : `?${queryStrings}`; 
  const endpoint = `${Settings.spoonacular.BASE_URL}${path}${queryStrings}`;

  return fetch(endpoint, {
    headers: this.getHeaders()
  })
  .then((response) => {
    return response.json();
  })
  .then((responseJSON) => {
    console.log(JSON.stringify(responseJSON));
  })
  .catch((error) => {
    console.log(error);
  });
}

// Get the headers for a request
export function getHeaders() {
  return {
    'Accept': 'application/json',
    'X-Mashape-Key': Settings.spoonacular.API_KEY
  };
}
