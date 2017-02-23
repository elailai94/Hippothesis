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

export default class Spoonacular {
  // Autocompletes a search for an ingredient
  static autocompleteIngredientSearch(parameters) {
    return this.callEndpoint(
      Settings.spoonacular.AUTOCOMPLETE_INGREDIENT_SEARCH_PATH,
      parameters
    );
  }

  // Autocompletes a partial input to possible recipe name
  static autocompleteRecipeSearch(parameters) {
    return this.callEndpoint(
      Settings.spoonacular.AUTOCOMPLETE_RECIPE_SEARCH_PATH,
      parameters
    );
  }

  /* 
   * Searches through hundreds of thousands of recipes using advanced
   * filtering and ranking
   * NOTE: Since this method combines three other functionalities, each
   * request counts as 3 requests. If you set addRecipeInformation
   * in parameters to true, half a request is added for each recipe
   * returned as it saves you the get recipe information calls
   */
  static complexRecipeSearch(parameters) {
    return this.callEndpoint(
      Settings.spoonacular.COMPLEX_RECIPE_SEARCH_PATH,
      parameters
    );
  }

  // Gets information about a recipe
  static getRecipeInformation(id, parameters) {
    const path = Settings.spoonacular.GET_RECIPE_INFORMATION_PATH
      .replace('{id}', id);
    return this.callEndpoint(path, parameters);
  }

  // Find recipes which are similar to the given one
  static findSimilarRecipes(id) {
    const path = Settings.spoonacular.FIND_SIMILAR_RECIPES_PATH
         .replace('{id}', id);
    return this.callEndpoint(path, {});
  }

  /*
   * Generates a meal plan with three meals per day (breakfast, lunch
   * and dinner)
   */
  static generateMealPlan(parameters) {
    return this.callEndpoint(
      Settings.spoonacular.GENERATE_MEAL_PLAN_PATH,
      parameters
    );
  }

  // Calls the endpoint
  static callEndpoint(path, parameters) {
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

  // Gets the headers for a request
  static getHeaders() {
    return {
      'Accept': 'application/json',
      'X-Mashape-Key': Settings.spoonacular.API_KEY
    };
  }
}
