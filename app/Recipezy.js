/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Store from './store/Store';
import AppNavigatorView from './views/AppNavigatorView';

export default class Recipezy extends Component {
  render() {
    return (
      <Provider store={Store}>
        <AppNavigatorView />
      </Provider>
    );
  }
}
