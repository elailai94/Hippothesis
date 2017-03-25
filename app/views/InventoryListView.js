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

import { Image } from 'react-native';
import {
  Container,
  Text,
  List,
  ListItem,
  Item,
  Button,
  Input,
  CheckBox,
  Icon,
} from 'native-base';

import {
  addIngredientToInventoryList,
  removeIngredientFromInventoryList,
  editIngredientInInventoryList,
  markIngredientAsUsedInInventoryList,
  markIngredientAsNotUsedInInventoryList
} from '../actions/InventoryListActions';

import Images from '../constants/Images';


class InventoryListView extends Component {
  // Set up navigation options for the lists navigator
  static navigationOptions = {
    tabBar: {
      label: 'Inventory List'
    }
  }

  check(id, used) {
    if (used) {
      this.props.markAsNotUsed(id);
    } else {
      this.props.markAsUsed(id);
    }
  }

  render() {

    var inventoryList = [];
    if (this.props.inventoryList) inventoryList = this.props.inventoryList.filter((item) => item.bought);

    return (
     <Container>
        <Image style={styles.background} source={Images.backgrounds.fridge}>
          <Text style={styles.header}>Organize</Text>
        </Image>

        <Button style={styles.headerButton} onPress={() => this.props.addItem("")}>
          <Icon style={styles.headerButtonIcon} name="add"/>
        </Button>

        <List
        style={styles.list}
        dataArray={inventoryList}
        renderRow={ (data) =>
          <ListItem style={{margin: 0, padding: 4, paddingLeft: 10, paddingRight: 10}}>
            <Item style={styles.listItem}>
              <CheckBox style={styles.checkbox} checked={data.used} onPress={() => this.check(data.id, data.used)}/>
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
  list: {
    marginTop: -50,
  },
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
  background: {
    height: 100,
    width: null,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 30,
    marginLeft: 20,
    marginTop: 10,
    fontFamily: 'Avenir-Light',
    letterSpacing: 2
  },
  headerButton: {
    alignSelf: 'flex-end',
    top: -25,
    marginRight: 40,
    height: 50,
    width: 50,
    padding: 0,
    borderRadius: 25,
    justifyContent: 'center',
    backgroundColor: '#f2487a',
    zIndex: 10,
  },
  headerButtonIcon: {
    fontSize: 40,
    backgroundColor: 'transparent',
  },
};

function mapStateToProps(state) {
  return {
    inventoryList: state.inventoryList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: (name) => dispatch(addIngredientToInventoryList(name)),
    editItem: (id, name) => dispatch(editIngredientInInventoryList(id, name)),
    removeItem: (id) => dispatch(removeIngredientFromInventoryList(id)),
    markAsUsed: (id) => dispatch(markIngredientAsUsedInInventoryList(id)),
    markAsNotUsed: (id) => dispatch(markIngredientAsNotUsedInInventoryList(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InventoryListView);
