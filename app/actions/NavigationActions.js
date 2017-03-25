/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import ActionTypes from '../constants/ActionTypes';

// Select a new recipe to show on the screen
export function selectRecipe(id) {
	return {
		type: ActionTypes.navigation.SELECT_RECIPE,
		payload: {
			id
		}
	};
}

export function setSearchView(name) {
	return {
    type: ActionTypes.navigation.SET_SEARCHVIEW,
    payload: {
      name
    }
  };
}
