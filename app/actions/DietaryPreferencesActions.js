/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import ActionTypes from '../constants/ActionTypes';

// Add an allergy to the dietary preferences
export function addAllergy(name) {
  return {
    type: ActionTypes.dietaryPreferences.ADD_ALLERGY,
    payload: {
      name
    }
  }
}

// Remove an allergy from the dietary preferences
export function removeAllergy(name) {
  return {
    type: ActionTypes.dietaryPreferences.REMOVE_ALLERGY,
    payload: {
      name
    }
  }
}

// Add a cuisine to the dietary preferences
export function addCuisine(name) {
  return {
    type: ActionTypes.dietaryPreferences.ADD_CUISINE,
    payload: {
      name
    }
  }
}

// Remove a cuisine from the dietary preferences
export function removeCuisine(name) {
  return {
    type: ActionTypes.dietaryPreferences.REMOVE_CUISINE,
    payload: {
      name
    }
  }
}

// Add a diet to the dietary preferences
export function addDiet(name) {
  return {
    type: ActionTypes.dietaryPreferences.ADD_DIET,
    payload: {
      name
    }
  }
}

// Remove a diet from the dietary preferences
export function removeDiet(name) {
  return {
    type: ActionTypes.dietaryPreferences.REMOVE_DIET,
    payload: {
      name
    }
  }
}

// Add a disliked ingredient to the dietary preferences
export function addDislikedIngredient(name) {
  return {
    type: ActionTypes.dietaryPreferences.ADD_DISLIKED_INGREDIENT,
    payload: {
      name
    }
  }
}

// Remove a disliked ingredient from the dietary preferences
export function removeDislikedIngredient(name) {
  return {
    type: ActionTypes.dietaryPreferences.REMOVE_DISLIKED_INGREDIENT,
    payload: {
      name
    }
  }
}
