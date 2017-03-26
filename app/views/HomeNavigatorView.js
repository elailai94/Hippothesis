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

import { StackNavigator } from 'react-navigation';
import HomeView from './HomeView';
import RecipeSearchResultView from './RecipeSearchResultView';
import RecipeView from './RecipeView';

export default class HomeNavigatorView extends Component {
  // Set up navigation options for the app navigator
  static navigationOptions = {
    tabBar: {
      label: 'Home',
      icon: ({ focused, tintColor }) => {
        if (focused) {
          return <Icon name='ios-home' />;
        } else {
          return <Icon name='ios-home-outline' />;
        }
      }
    }
  }

  constructor(props) {
    super(props);

    // Set up route settings for the lists navigator
    this.routeSettings = {
      home: { screen: HomeView  },
      recipeSearchResult: { screen: RecipeSearchResultView },
      recipe: { screen: RecipeView },
    };

    // Set up stack navigator settings for the search navigator
    this.stackNavigatorSettings = {
      initialRouteName: 'home',
      headerMode: 'none'
    };

    this.HomeNavigator = StackNavigator(
      this.routeSettings,
      this.stackNavigatorSettings
    );
  }

  render() {
    const HomeNavigator = this.HomeNavigator;
    return (
      <HomeNavigator/>
    );
  }
}
