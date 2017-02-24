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

// Switches to a new tab in the navigation bar
export function switchTab(name) {
	return {
    type: ActionTypes.navigation.SWITCH_TAB,
    payload: {
      name
    }
  };
}
