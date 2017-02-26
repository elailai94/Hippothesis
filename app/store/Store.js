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

import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import RootReducer from '../reducers/RootReducer';

const Store = createStore(RootReducer, applyMiddleware(thunk));

export default Store;
