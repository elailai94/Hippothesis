/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import qs from 'qs';

import Settings from '../constants/Settings';
import {
  extractEquipments,
  extractUsedAndMissedIngredients,
  extractExtendedIngredients,
  extractInstructions
} from './Extract';

// Get the headers for a request
function getHeaders() {
  return {
    'Accept': 'application/json',
    'X-Mashape-Key': Settings.spoonacular.API_KEY
  };
}

// Call the endpoint
function callEndpoint(path, parameters) {
  let queryStrings = qs.stringify(parameters, { skipNulls: true });
  queryStrings = queryStrings === '' ? queryStrings : `?${queryStrings}`;
  const endpoint = `${Settings.spoonacular.BASE_URL}${path}${queryStrings}`;

  return fetch(endpoint, {
    headers: getHeaders()
  })
  .then((response) => response.json());
}

/*
 * Autocomplete a search for an ingredient
 * NOTE: The format of parameters is as follows:
 * {
 *   metaInformation: true, // Optional
 *   number: 10,            // Optional
 *   query: 'apple'         // Required
 * }
 */
export function autocompleteIngredientSearch(parameters) {
  return callEndpoint(
    Settings.spoonacular.AUTOCOMPLETE_INGREDIENT_SEARCH_PATH,
    parameters
  );
}

/*
 * Autocomplete a partial input to possible recipe name
 * NOTE: The format of parameters is as follows:
 * {
 *   number: 10,      // Optional
 *   query: 'chicken' // Required
 * }
 */
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
 * NOTE: The format of parameters is as follows:
 * {
 *   addRecipeInformation: true,            // Optional
 *   cuisine: 'american',                   // Optional
 *   diet: 'vegetarian',                    // Optional
 *   excludeIngredients: 'onions, carrots', // Optional
 *   fillIngredients: false,                // Optional
 *   includeIngredients: 'lettuce, tomato', // Optional
 *   instructionsRequired: true,            // Optional
 *   intolerances: 'peanut, shellfish',     // Optional
 *   limitLicense: false,                   // Required
 *   maxCalories: 1500,                     // Optional
 *   maxCarbs: 100,                         // Optional
 *   maxFat: 100,                           // Optional
 *   maxProtein: 100,                       // Optional
 *   minCalories: 150,                      // Optional
 *   minCarbs: 5,                           // Optional
 *   minFat: 5,                             // Optional
 *   minProtein: 5,                         // Optional
 *   number: 10,                            // Required
 *   offset: 0,                             // Required
 *   query: 'burger',                       // Required
 *   ranking: 1,                            // Required
 *   type: 'main course'                    // Optional
 * }
 */
export function complexRecipeSearch(parameters) {
  return callEndpoint(
    Settings.spoonacular.COMPLEX_RECIPE_SEARCH_PATH,
    parameters
  )
  .then((json) => {
    return json.results.map((result) => {
      const normalizedResult = {
        ...result,
        equipments: extractEquipments(result),
        ingredients: extractUsedAndMissedIngredients(result),
        instructions: extractInstructions(result)
      };

      delete normalizedResult.analyzedInstructions;
      delete normalizedResult.usedIngredients;
      delete normalizedResult.missedIngredients;

      return normalizedResult;
    });
  });
}

/*
 * Get information about a recipe
 * NOTE: The format of parameters is as follows:
 * {
 *   includeNutrition: false // Optional
 * }
 */
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
 * Find random (popular) recipes
 * NOTE: The format of parameters is as follows:
 * {
 *   limitLicense: false,        // Optional
 *   number: 5,                  // Optional
 *   tags: 'vegetarian, dessert' // Optional
 * }
 */
export function getRandomRecipes(parameters) {
  return callEndpoint(
    Settings.spoonacular.GET_RANDOM_RECIPES_SEARCH_PATH,
    parameters
  );
}

/*
 * Generate a meal plan with three meals per day (breakfast, lunch
 * and dinner)
 * NOTE: The format of parameters is as follows:
 * {
 *   diet: 'vegetarian',         // Optional
 *   exclude: 'onions, carrots', // Optional
 *   targetCalories: 2000,       // Optional
 *   timeFrame: 'week'           // Optional
 * }
 */
export function generateMealPlan(parameters) {
  return callEndpoint(
    Settings.spoonacular.GENERATE_MEAL_PLAN_PATH,
    parameters
  );
}
