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

/*
 * Return the next state given the current state and an action to
 * handle
 */
export default function navigationReducer(state = 'search', action) {
	switch (action.type) {
    case ActionTypes.navigation.SWITCH_TAB:
      return switchTab(state, action);
    default:
      return state; 
  }
}

// Switches to a new tab in the navigation bar
function switchTab(state, action) {
  return action.name;
}
