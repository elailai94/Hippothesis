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

import {
  addIngredient, removeIngredient, editIngredient, boughtIngredient
} from './actions/ShoppingList';

import shoppingList from './reducers/shoppingList';
import Spoonacular from './utilities/Spoonacular';

let store = createStore(shoppingList);



export default class Recipezy extends Component {
  render() {
    
    console.log(store.getState());

    let unsubscribe = store.subscribe(() =>
      {console.log(store.getState());}
    );

    store.dispatch(addIngredient('apples'));
    store.dispatch(addIngredient('bacon'));
    store.dispatch(removeIngredient(0));

    unsubscribe();
    

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Recipezy!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
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
