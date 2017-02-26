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

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import {
  addRecipe
} from './actions/RecipesActions';
import RootReducer from './reducers/RootReducer';
import NavigationBar from './components/navigationbar/NavigationBar';

const store = createStore(RootReducer);

export default class Recipezy extends Component {
  render() {
    
    console.log(store.getState());

    let unsubscribe = store.subscribe(() =>
      {console.log(store.getState());}
    );

    store.dispatch(addRecipe(1, {
      image: 'http://spoonacular...',
      aggregateLikes: 227,
      title: 'Ranch Burgers',
      instructions: ['Step 1', 'Step 2']
    }));

    unsubscribe();

    return (
      <Provider store={store}>
        <NavigationBar />
      </Provider>
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
