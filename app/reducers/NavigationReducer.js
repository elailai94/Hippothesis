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

const initialState = {
  selectedTab: 'search',
  selectedRecipe: 0,
  searchView: 'search',
};

/*
 * Return the next state given the current state and an action to
 * handle
 */
export default function NavigationReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.navigation.SELECT_TAB:
      return selectTab(state, action);
    
    case ActionTypes.navigation.SELECT_RECIPE:
      return selectRecipe(state, action);

    case ActionTypes.navigation.SET_SEARCHVIEW:
      return setSearchView(state, action);

    default:
      return state;
  }
}

// Select a new tab in the navigation bar
function selectTab(state = initialState, action) {
  return {
    ...state,
    selectedTab: action.payload.name
  };
}

// Select a new recipe to show on the screen
function selectRecipe(state = initialState, action) {
  return {
    ...state,
    selectedRecipe: action.payload.id
  };
}

// set a new search view
function setSearchView(state = initalState, action) {
  return {
    ...state,
    searchView: action.payload.name
  }
}
