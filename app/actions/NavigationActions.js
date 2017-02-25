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

// Select a new tab in the navigation bar
export function selectTab(name) {
	return {
    type: ActionTypes.navigation.SELECT_TAB,
    payload: {
      name
    }
  };
}
