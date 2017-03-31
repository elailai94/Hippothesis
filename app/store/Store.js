/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import {
  AsyncStorage
} from 'react-native';
import {
  compose,
  createStore,
  applyMiddleware
} from 'redux';
import {
  persistStore, 
  autoRehydrate
} from 'redux-persist';
import createCompressor from 'redux-persist-transform-compress';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import RootReducer from '../reducers/RootReducer';

const Store = null;
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  Store = createStore(
    RootReducer, 
    undefined,
    compose(
      applyMiddleware(thunk, logger),
      autoRehydrate() 
    )
  );
} else {
  Store = createStore(
    RootReducer, 
    undefined, 
    compose(
      applyMiddleware(thunk), 
      autoRehydrate()
    )
  );
}

// Begin periodically persisting the store
persistStore(
  Store,
  {
    whitelist: ['shoppingList', 'inventoryList', 'filters', 'recipesStore'],
    storage: AsyncStorage,
    transforms: [createCompressor()]
  }
);

export default Store;
