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
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import Store from './store/Store';
import { addRecipe } from './actions/RecipesActions';
//import { searchRecipes } from './actions/RecipeSearchResultsActions';
import { addIngredientToInventoryList } from './actions/InventoryListActions';
import {
  addIngredientToShoppingList
} from './actions/ShoppingListActions';
import NavigationBar from './components/navigationbar/NavigationBar';

//import { normalize, schema } from  'normalizr';
//import omit from 'object.omit';

export default class Recipezy extends Component {
  render() {
    //Store.dispatch(addIngredientToInventoryList(12, 'Apples'));

    /*Store.dispatch(addRecipe(685, {
      image: 'http://spoonacular...',
      aggregateLikes: 227,
      title: 'Ranch Burgers',
      instructions: ['Step 1', 'Step 2']
    }));
    */

    Store.dispatch(addIngredientToShoppingList(98, 'Pears'));
    Store.dispatch(addIngredientToShoppingList(100, 'Chicken'));

    return (
      <Provider store={Store}>
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
