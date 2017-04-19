/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import {
  AsyncStorage,
} from 'react-native';
import {
  compose,
  createStore,
  applyMiddleware,
} from 'redux';
import {
  persistStore,
  autoRehydrate,
} from 'redux-persist';
import createCompressor from 'redux-persist-transform-compress';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import RootReducer from '../reducers/RootReducer';

let Store;
const rehydrator = autoRehydrate();
const compressor = createCompressor();

if (__DEV__) {
  const logger = createLogger();

  Store = createStore(
    RootReducer,
    undefined,
    compose(
      applyMiddleware(thunk, logger),
      rehydrator,
    ),
  );
} else {
  Store = createStore(
    RootReducer,
    undefined,
    compose(
      applyMiddleware(thunk),
      rehydrator,
    ),
  );
}

// Begin periodically persisting the store
persistStore(
  Store,
  {
    whitelist: [
      'filters',
      'recipesStore',
      'shoppingList',
      'inventoryList',
      'dietaryPreferences',
    ],
    storage: AsyncStorage,
    transforms: [compressor],
  },
);

export default Store;
