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

const initialState = []

export default function shoppingList(state=initialState, action) {
  switch (action.type) {
    case ActionTypes.shoppingList.ADD_INGREDIENT:
      return [
        ...state,
        {
          ingredient: action.ingredient,
          bought: false
        }
      ];
    case ActionTypes.shoppingList.REMOVE_INGREDIENT:
      return state.filter((todo, index) => 
        index !== action.index
      );
    default:
      return state;
  }
}
