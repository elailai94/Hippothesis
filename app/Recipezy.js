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
  AsyncStorage,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';

import {
  persistStore,
  autoRehydrate
} from 'redux-persist';

import {
  addIngredient,
  removeIngredient,
  editIngredient,
  markIngredientAsBought,
  markIngredientAsNotBought
} from './actions/ShoppingListActions';
import shoppingListReducer from './reducers/ShoppingListReducer';
import NavigationBar from './components/navigationbar/NavigationBar';

const store = createStore(shoppingListReducer);
/*
const store = compose(autoRehydrate())(createStore)(handleReduction);

persistStore(store, {storage: AsyncStorage}, () => {
  console.log('Restored');
});
*/

export default class Recipezy extends Component {
  render() {
    
    console.log(store.getState());

    let unsubscribe = store.subscribe(() =>
      {console.log(store.getState());}
    );

    store.dispatch(addIngredient('apples'));
    store.dispatch(addIngredient('bacon'));
    store.dispatch(removeIngredient(1));
    store.dispatch(addIngredient('apples'));
    store.dispatch(editIngredient(2, 'carrots'));
    store.dispatch(markIngredientAsBought(2));
    store.dispatch(markIngredientAsNotBought(2));

    unsubscribe();

/*
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
*/
    return (
      //<View style={styles.container}>
        <NavigationBar />
      //</View>
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
