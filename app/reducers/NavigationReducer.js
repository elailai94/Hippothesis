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
  selectedRecipe: 0,
  searchView: 'search'
};

export default function NavigationReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.navigation.SELECT_RECIPE:
      return selectRecipe(state, action);

    case ActionTypes.navigation.SET_SEARCHVIEW:
      return setSearchView(state, action);

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

// set a new search view
function setSearchView(state = initialState, action) {
  return {
    ...state,
    searchView: action.payload.name
  }
}
