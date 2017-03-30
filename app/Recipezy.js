/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet
} from 'react-native';
import { Container } from 'native-base';
import { Provider } from 'react-redux';

import Store from './store/Store';
import AppNavigatorView from './views/AppNavigatorView';

export default class Recipezy extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <Provider store={Store}>
          <AppNavigatorView />
        </Provider>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
