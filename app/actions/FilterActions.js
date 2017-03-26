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

// Update Allergies filter
export function updateAllergies(name) {
  return {
    type: ActionTypes.filters.UPDATE_ALLERGIES,
    payload: {
      name
    }
  };
}

// Update Cuisines filter
export function updateCuisines(name) {
  return {
    type: ActionTypes.filters.UPDATE_CUISINES,
    payload: {
      name
    }
  };
}

// Update Diets filter
export function updateDiets(name) {
  return {
    type: ActionTypes.filters.UPDATE_DIETS,
    payload: {
      name
    }
  };
}

// Update Nutrition filter
export function updateNutrition(name) {
  return {
    type: ActionTypes.filters.UPDATE_NUTRITION,
    payload: {
      name
    }
  };
}

// Update Types filter
export function updateTypes(name) {
  return {
    type: ActionTypes.filters.UPDATE_TYPES,
    payload: {
      name
    }
  };
}

