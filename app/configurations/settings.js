/* @flow */

'use strict';

export const settings = {
   spoonacular: {
      API_BASE_URL: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com',
      API_KEY: 'jVDiaXvfpsmshdrtFO7JHibo7Hrtp16UelPjsnBE4Bfzl0CV5u',
      AUTOCOMPLETE_INGREDIENT_SEARCH_PATH: '/food/ingredients/autocomplete',
      AUTOCOMPLETE_RECIPE_SEARCH_PATH: '/recipes/autocomplete',
      COMPLEX_RECIPE_SEARCH_PATH: '/recipes/searchComplex',
      GET_RECIPE_INFORMATION_PATH: 'recipes/{id}/information',
      FIND_SIMILAR_RECIPES_PATH: 'recipes/{id}/similar',
      GENERATE_MEAL_PLAN_PATH: 'recipes/mealplans/generate'
   }
};

export default settings;