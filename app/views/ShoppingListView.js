/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Text
} from 'native-base';

import {
  addIngredientToShoppingList,
  removeIngredientFromShoppingList,
  editIngredientInShoppingList,
  markIngredientAsBoughtInShoppingList,
  markIngredientAsNotBoughtInShoppingList
} from '../actions/ShoppingListActions';

class ShoppingListView extends Component {
  // Set up navigation options for the lists navigator
  static navigationOptions = {
    tabBar: {
      label: 'Shopping List'
    }
  }

  render() {
    //dispatch(addIngredientToShoppingList(1, 'Salmon'));

    return (
      <Container>
        <Text>The shopping list goes here.</Text>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    shoppingList: state.shoppingList
  };
}

function mapDispatchToProps() {
  return {
    addIngredient: (id, name) => dispatch(addIngredientToShoppingList(id, name)),
    removeIngredient: (id) => dispatch(removeIngredientFromShoppingList(id)),
    editIngredient: (oldID, newID) => dispatch(editIngredientInShoppingList(oldID, newID))
  }
}

export default connect(mapStateToProps)(ShoppingListView);
