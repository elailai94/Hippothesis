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

    // Set up route settings for the search navigator
    this.routeSettings = {
      lists: { screen: ListsView },
      recipeSearchResult: { screen: RecipeSearchResultView },
      recipe            : { screen: RecipeView             },
    };

    // Set up stack navigator settings for the search navigator
    this.stackNavigatorSettings = {
      initialRouteName: 'lists',
      headerMode: 'none'
    };
  }

  render() {
    const Navigator = StackNavigator(
      this.routeSettings,
      this.stackNavigatorSettings
    );
    
    return (
      <Navigator/>
    );
  }
}
