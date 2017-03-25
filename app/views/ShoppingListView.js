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
  Text,
  List,
  ListItem,
  Item,
  Button,
  Input,
  CheckBox,
  Icon
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

  check(id, bought) {
    if (bought) {
      this.props.markAsNotBought(id);
    } else {
      this.props.markAsBought(id);
    }
  }

  render() {
    console.log("testtest", this.props);

    var shoppingList = [];
    if (this.props.inventoryList) shoppingList = this.props.inventoryList.filter((item) => item.inShoppingList);

    return (
      <Container>
        <List
        dataArray={shoppingList}
        renderRow={ (data) =>
          <ListItem style={{margin: 0, padding: 4, paddingLeft: 10, paddingRight: 10}}>
            <Item style={styles.listItem}>
              <CheckBox style={styles.checkbox} checked={data.bought} onPress={() => this.check(data.id, data.bought)}/>
              <Input placeholder="New item" defaultValue={data.name}
                onChangeText={(text) => this.props.editItem(data.id, text)}
              />
              <Button transparent style={styles.trashButton} onPress={() => this.props.removeItem(data.id)}>
                <Icon style={styles.trashIcon} name="trash"/>
              </Button>
            </Item>
          </ListItem>}
        />
        <Button full style={styles.searchButton} onPress={() => this.props.addItem("test")}>
          <Text>New Item</Text>
        </Button>
      </Container>
    );
  }
}

const styles = {
  listItem: {
    borderWidth: 0,
  },
  checkbox: {
    marginRight: 30,
  },
  trashButton: {
    paddingRight: 0,
    paddingTop: 10,
  },
  trashIcon: {
    color: '#707070'
  },
  searchButton: {
    backgroundColor: '#f2487a'
  },
};

function mapStateToProps(state) {
  return {
    inventoryList: state.inventoryList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: (name) => dispatch(addIngredientToShoppingList(name)),
    editItem: (id, name) => dispatch(editIngredientInShoppingList(id, name)),
    removeItem: (id) => dispatch(removeIngredientFromShoppingList(id)),
    markAsBought: (id) => dispatch(markIngredientAsBoughtInShoppingList(id)),
    markAsNotBought: (id) => dispatch(markIngredientAsNotBoughtInShoppingList(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListView);
