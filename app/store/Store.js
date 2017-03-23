/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import RootReducer from '../reducers/RootReducer';

const Store = null;
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  Store = createStore(RootReducer, applyMiddleware(thunk, logger));
} else {
  Store = createStore(RootReducer, applyMiddleware(thunk));
}

export default Store;
