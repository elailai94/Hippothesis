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
import { StackNavigator } from 'react-navigation';

import ListsView from './ListsView';
import RecipeSearchResultView from './RecipeSearchResultView';
import RecipeView from './RecipeView';

export default class ListsNavigatorView extends Component {
  // Set up navigation options for the app navigator
  static navigationOptions = {
    drawer: {
      label: 'Lists',
      icon: ({ focused, tintColor }) => {
        if (focused) {
          return <Icon name='ios-list-box' style={{color: tintColor}} />;
        } else {
          return <Icon name='ios-list-box-outline' />;
        }
      },
    },
    tabBar: {
      label: 'Lists',
      icon: ({ focused, tintColor }) => {
        if (focused) {
          return <Icon name='ios-list-box' style={{color: tintColor}} />;
        } else {
          return <Icon name='ios-list-box-outline' />;
        }
      },
    },
  }

  constructor(props) {
    super(props);

    // Set up route settings for the lists navigator
    this.routeSettings = {
      lists             : { screen: ListsView              },
      recipeSearchResult: { screen: RecipeSearchResultView },
      recipe            : { screen: RecipeView             },
    };

    // Set up stack navigator settings for the lists navigator
    this.stackNavigatorSettings = {
      initialRouteName: 'lists',
      headerMode: 'none',
    };

    this.ListsNavigator = StackNavigator(
      this.routeSettings,
      this.stackNavigatorSettings,
    );
  }

  render() {
    const ListsNavigator = this.ListsNavigator;
    
    return <ListsNavigator />;
  }
}
