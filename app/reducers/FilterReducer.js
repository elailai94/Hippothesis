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
	allergies: 'None',
	cuisines: 'None',
	diets: 'None',
	nutrition: '2500 Calories',
	types: 'None'
};

/*
 * Return the next state given the current state and an action to
 * handle
 */
export default function FilterReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.filters.UPDATE_ALLERGIES:
      return updateAllergiesFilter(state, action);
    case ActionTypes.filters.UPDATE_CUISINES:
      return updateCuisinesFilter(state, action);
    case ActionTypes.filters.UPDATE_DIETS:
      return updateDietsFilter(state, action);
    case ActionTypes.filters.UPDATE_NUTRITION:
      return updateNutritionFilter(state, action);
    case ActionTypes.filters.UPDATE_TYPES:
      return updateTypesFilter(state, action);
    default:
      return state;
  }
}

// Update the filter
function updateAllergiesFilter(state, action) {
  
	console.log("updateAllergiesFilter: ", action.payload.name);		
  return {
  	...state,
  	allergies: action.payload.name
  };
}

// Update the filter
function updateCuisinesFilter(state, action) {
  
	console.log("updateCuisinesFilter: ", action.payload.name);		
  return {
  	...state,
  	cuisines: action.payload.name
  };
}

// Update the filter
function updateDietsFilter(state, action) {
  
	console.log("updateDietsFilter: ", action.payload.name);		
  return {
  	...state,
  	diets: action.payload.name
  };
}

// Update the filter
function updateNutritionFilter(state, action) {
  
	console.log("updateNutritionFilter: ", action.payload.name);		
  return {
  	...state,
  	nutrition: action.payload.name
  };
}

// Update the filter
function updateTypesFilter(state, action) {
  
	console.log("updateTypesFilter: ", action.payload.name);		
  return {
  	...state,
  	types: action.payload.name
  };
}
