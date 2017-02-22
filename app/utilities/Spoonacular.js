/* @flow */

'use strict';

import qs from 'qs';
import settings from '../configurations/settings';

export default class Spoonacular {
   // 
   getHeaders() {
      return {
         'Accept': 'application/json',
         'X-Mashape-Key': settings.spoonacular.API_KEY
      };
   }

   // 
   callEndpoint(path, parameters) {
      const endpoint = settings.spoonacular.API_BASE_URL + path + '?' + qs.stringify(parameters);
      return fetch(endpoint, {
         headers: this.getHeaders()
      })
      .then((response) => {return response.json();})
      .catch((error) => {console.log(error);});
   }

   // Autocompletes a search for an ingredient
   autocompleteIngredientSearch(parameters) {
      return this.callEndpoint(
         settings.spoonacular.AUTOCOMPLETE_INGREDIENT_SEARCH_PATH,
         parameters
      );
   }

   // Autocompletes a partial input to possible recipe name
   autocompleteRecipeSearch(parameters) {
      return this.callEndpoint(
         settings.spoonacular.AUTOCOMPLETE_RECIPE_SEARCH_PATH,
         parameters
      );
   }

   /* 
    * Searches through hundreds of thousands of recipes using advanced
    * filtering and ranking
    * NOTE: Since this method combines three other functionalities, each
    * request counts as 3 requests. If you set addRecipeInformation in
    * parameters to true, half a request is added for each recipe
    * returned as it saves you the get recipe information calls
    */
   complexRecipeSearch(parameters) {
      return this.callEndpoint(
         settings.spoonacular.COMPLEX_RECIPE_SEARCH_PATH,
         parameters
      );
   }

   // Gets information about a recipe
   getRecipeInformation(id, parameters) {
      const path = settings.spoonacular.GET_RECIPE_INFORMATION_PATH
         .replace('{id}', id);
      return this.callEndpoint(path, parameters);
   }

   // Find recipes which are similar to the given one
   findSimilarRecipes(id) {
      const path = settings.spoonacular.FIND_SIMILAR_RECIPES_PATH
         .replace('{id}', id);
      return this.callEndpoint(path, {});
   }

   /*
    * Generates a meal plan with three meals per day (breakfast, lunch
    * and dinner)
    */
   generateMealPlan(parameters) {
      return this.callEndpoint(
         settings.spoonacular.GENERATE_MEAL_PLAN_PATH,
         parameters
      );
   }
}