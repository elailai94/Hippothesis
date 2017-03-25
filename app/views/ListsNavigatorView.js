/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import React, { Component } from 'react';
import { Icon } from 'native-base';
import {
  TabView,
  TabNavigator
} from 'react-navigation';

import ShoppingListView from './ShoppingListView';
import InventoryListView from './InventoryListView';

export default class ListsNavigatorView extends Component {
  // Set up navigation options for the app navigator
  static navigationOptions = {
    tabBar: {
      label: 'Lists',
      icon: ({ focused, tintColor }) => {
        if (focused) {
          return <Icon name='ios-list-box' />;
        } else {
          return <Icon name='ios-list-box-outline' />;
        }
      }
    }
  }

  constructor(props) {
    super(props);

    // Set up route settings for the lists navigator
    this.routeSettings = {
      shoppingList : { screen: ShoppingListView  },
      inventoryList: { screen: InventoryListView }
    };

    // Set up tab navigator settings for the lists navigator
    this.tabNavigatorSettings = {
      tabBarComponent: TabView.TabBarTop,
      initialRouteName: 'shoppingList',
      tabBarOptions: {
        activeTintColor: '#F2487A'
      }
    };
  }

  render() {
    const ListsNavigator = TabNavigator(
      this.routeSettings,
      this.tabNavigatorSettings
    );

    return (
      <ListsNavigator />
    );
  }
}
