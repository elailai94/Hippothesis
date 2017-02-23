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
import ShoppingListActions from './actions/ShoppingListActions';
import ShoppingListReducer from './reducers/ShoppingListReducer';
import Spoonacular from './utilities/Spoonacular';

let store = createStore(ShoppingListReducer.reduce);

export default class Recipezy extends Component {
  render() {
    
    console.log(store.getState());

    let unsubscribe = store.subscribe(() =>
      {console.log(store.getState());}
    );

    store.dispatch(ShoppingListActions.addIngredient('apples'));
    store.dispatch(ShoppingListActions.addIngredient('bacon'));
    store.dispatch(ShoppingListActions.removeIngredient(0));
    store.dispatch(ShoppingListActions.editIngredient(0, 'carrots'));
    store.dispatch(ShoppingListActions.markIngredientAsBought(0));
    store.dispatch(ShoppingListActions.markIngredientAsNotBought(0));

    unsubscribe();

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Recipezy!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
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
