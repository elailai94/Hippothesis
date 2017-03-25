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
  selectedRecipe: 0
};

export default function NavigationReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.navigation.SELECT_RECIPE:
      return selectRecipe(state, action);

    default:
      return state;
  }
}

// Select a new recipe to show on the screen
function selectRecipe(state = initialState, action) {
  return {
    ...state,
    selectedRecipe: action.payload.id
  };
}
