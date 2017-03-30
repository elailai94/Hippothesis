/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import React, { Component } from 'react';
import { Container, Content, Header, Left, Right, Body, Icon, Tab, Tabs } from 'native-base';
import {
  TabView,
  TabNavigator
} from 'react-navigation';

import ShoppingListView from './ShoppingListView';
import InventoryListView from './InventoryListView';
import RecipeSearchResultView from './RecipeSearchResultView';
import RecipeView from './RecipeSearchResultView';

export default class ListsNavigatorView extends Component {
  // Set up navigation options for the app navigator
  static navigationOptions = {
    tabBar: {
      label: 'Lists',
      icon: ({ focused, tintColor }) => {
        if (focused) {
          return (<Icon name='ios-list-box' color='#F2487A' />);
        } else {
          return (<Icon name='ios-list-box-outline' />);
        }
      }
    }
  }

  constructor(props) {
    super(props);

    // Set up route settings for the lists navigator
    this.routeSettings = {
      shoppingList : { screen: ShoppingListView  },
      inventoryList: { screen: InventoryListView },
      recipeSearchResult: { screen: RecipeSearchResultView },
      recipe            : { screen: RecipeView             },
    };

    // Set up tab navigator settings for the lists navigator
    this.tabNavigatorSettings = {
      tabBarComponent: TabView.TabBarTop,
      initialRouteName: 'shoppingList',
      tabBarOptions: {
        //activeTintColor: '#F2487A',
        upperCaseLabel: false,
        indicatorStyle: {
          backgroundColor: 'white'
        },
        style: {
          backgroundColor: '#F2487A',
          marginTop: 0
        }
      }
    };
  }

  render() {
    const ListsNavigator = TabNavigator(
      this.routeSettings,
      this.tabNavigatorSettings
    );

    return (
      <Container>
        <Header hasTabs style={{height: 10, backgroundColor: '#F2487A'}}/>
        <Tabs
          tabBarUnderlineStyle={{backgroundColor: 'white'}}
          tabBarBackgroundColor='#F2487A'
        >
          <Tab
            heading="Shopping List"
            tabStyle={{backgroundColor: '#F2487A'}}
            activeTabStyle={{backgroundColor: '#F2487A'}}
            textStyle={{color: 'white'}}
            activeTextStyle={{color: 'white'}}
          >
            <ShoppingListView />
          </Tab>
          <Tab
            heading="Inventory List"
            tabStyle={{backgroundColor: '#F2487A'}}
            activeTabStyle={{backgroundColor: '#F2487A'}}
            textStyle={{color: 'white'}}
            activeTextStyle={{color: 'white'}}
          >
            <InventoryListView />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
