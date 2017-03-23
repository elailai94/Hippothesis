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
import AppNavigator from '../components/appnavigator/AppNavigator';

const initialState = {
  selectedTab: 'search',
  selectedRecipe: 0,
  searchView: 'search',
};

/*
// Slice reducer for the app navigator
function appNavigatorReducer(state, action) => {
  return AppNavigator.router.getStateForAction(action, state);
}

// Slice reducer for the home navigator
function homeNavigatorReducer(state, action) {
  return HomeNavigator.router.getStateForAction(action, state);
}

// Slice reducer for the search navigator
function searchNavigatorReducer(state, action) {
  return SearchNavigator.router.getStateForAction(action, state);
}

// Slice reducer for the lists navigator
function listsNavigatorReducer(state, action) {
  return ListsNavigator.router.getStateForAction(action, state);
}

// Slice reducer for the profile navigator
function profileNavigatorReducer(state, action) {
  return profileNavigator.router.getStateForAction(action, state);
}

// Root reducer for navigation
const NavigationReducer = combineReducers({
  appNavigator: appNavigatorReducer,
  homeNavigator: homeNavigatorReducer,
  searchNavigator: searchNavigatorReducer,
  listsNavigator: listsNavigatorReducer,
  profileNavigator: profileNavigatorReducer
});

export default NavigationReducer;
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
function setSearchView(state = initialState, action) {
  return {
    ...state,
    searchView: action.payload.name
  }
}
