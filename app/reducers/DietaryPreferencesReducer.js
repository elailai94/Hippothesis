/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { combineReducers } from 'redux';

import ActionTypes from '../constants/ActionTypes';

const initialState = {
  allergies: [],
  cuisines: [],
  diets: [],
  dislikedIngredients: [],
}

// Case reducer for adding an allergy
function addAllergy(state = initialState.allergies, action) {
  return state.concat(action.payload.name);
}

// Case reducer for removing an allergy
function removeAllergy(state = initialState.allergies, action) {
  return state.filter((name) =>
    name !== action.payload.name
  );
}

// Case reducer for removing all allergies
function removeAllAllergies(state = initialState.allergies, action) {
  return initialState.allergies;
}

// Slice reducer for allergies
function allergiesReducer(state = initialState.allergies, action) {
  switch (action.type) {
    case ActionTypes.dietaryPreferences.ADD_ALLERGY:
      return addAllergy(state, action);

    case ActionTypes.dietaryPreferences.REMOVE_ALLERGY:
      return removeAllergy(state, action);

    case ActionTypes.dietaryPreferences.REMOVE_ALL_ALLERGIES:
      return removeAllAllergies(state, action);

    default:
      return state;
  }
}

// Case reducer for adding a cuisine
function addCuisine(state = initialState.cuisines, action) {
  return state.concat(action.payload.name);
}

// Case reducer for removing a cuisine
function removeCuisine(state = initialState.cuisines, action) {
  return state.filter((name) =>
    name !== action.payload.name
  );
}

// Case reducer for removing all cuisines
function removeAllCuisines(state = initialState.cuisines, action) {
  return initialState.cuisines;
}

// Slice reducer for cuisines
function cuisinesReducer(state = initialState.cuisines, action) {
  switch (action.type) {
    case ActionTypes.dietaryPreferences.ADD_CUISINE:
      return addCuisine(state, action);

    case ActionTypes.dietaryPreferences.REMOVE_CUISINE:
      return removeCuisine(state, action);

    case ActionTypes.dietaryPreferences.REMOVE_ALL_CUISINES:
      return removeAllCuisines(state, action);

    default:
      return state;
  }
}

// Case reducer for adding a diet
function addDiet(state = initialState.diets, action) {
  return state.concat(action.payload.name);
}

// Case reducer for removing a diet
function removeDiet(state = initialState.diets, action) {
  return state.filter((name) =>
    name !== action.payload.name
  );
}

// Case reducer for removing all diets
function removeAllDiets(state = initialState.diets, action) {
  return initialState.diets;
}

// Slice reducer for diets
function dietsReducer(state = initialState.diets, action) {
  switch (action.type) {
    case ActionTypes.dietaryPreferences.ADD_DIET:
      return addDiet(state, action);

    case ActionTypes.dietaryPreferences.REMOVE_DIET:
      return removeDiet(state, action);

    case ActionTypes.dietaryPreferences.REMOVE_ALL_DIETS:
      return removeAllDiets(state, action);

    default:
      return state;
  }
}

// Case reducer for adding a disliked ingredient
function addDislikedIngredient(state = initialState.dislikedIngredients,
  action) {
  return state.concat(action.payload.name);
}

// Case reducer for removing a disliked ingredient
function removeDislikedIngredient(state = initialState.dislikedIngredients,
  action) {
  return state.filter((name) =>
    name !== action.payload.name
  );
}

// Case reducer for removing all disliked ingredients
function removeAllDislikedIngredients(state = initialState.dislikedIngredients,
  action) {
  return initialState.dislikedIngredients;
}

// Slice reducer for dislikedIngredients
function dislikedIngredientsReducer(state = initialState.dislikedIngredients,
  action) {
  switch (action.type) {
    case ActionTypes.dietaryPreferences.ADD_DISLIKED_INGREDIENTS:
      return addDislikedIngredients(state, action);

    case ActionTypes.dietaryPreferences.REMOVE_DISLIKED_INGREDIENTS:
      return removeDislikedIngredients(state, action);

    case ActionTypes.dietaryPreferences.REMOVE_ALL_DISLIKED_INGREDIENTS:
      return removeAllDislikedIngredients(state, action);

    default:
      return state;
  }
}

// Root reducer for dietary preferences
const DietaryPreferencesReducer = combineReducers({
  allergies: allergiesReducer,
  cuisines: cuisinesReducer,
  diets: dietsReducer,
  dislikedIngredients: dislikedIngredientsReducer,
});

export default DietaryPreferencesReducer;
