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

import RecipeSearchView from './RecipeSearchView';
import RecipeSearchResultView from './RecipeSearchResultView';
import RecipeView from './RecipeView';
import AdditionalFilterView from './AdditionalFilterView';

export default class SearchNavigatorView extends Component {
  // Set up navigation options for the app navigator
  static navigationOptions = {
    drawer: {
      label: 'Search',
      icon: ({ focused, tintColor }) => {
        if (focused) {
          return <Icon name='ios-search' />;
        } else {
          return <Icon name='ios-search-outline' />;
        }
      },
    },
    tabBar: {
      label: 'Search',
      icon: ({ focused, tintColor }) => {
        if (focused) {
          return <Icon name='ios-search' />;
        } else {
          return <Icon name='ios-search-outline' />;
        }
      },
    },
  }

  constructor(props) {
    super(props);

    // Set up route settings for the search navigator
    this.routeSettings = {
      recipeSearch      : { screen: RecipeSearchView       },
      recipeSearchResult: { screen: RecipeSearchResultView },
      recipe            : { screen: RecipeView             },
      additionalFilter  : { screen: AdditionalFilterView   },
    };

    // Set up stack navigator settings for the search navigator
    this.stackNavigatorSettings = {
      initialRouteName: 'recipeSearch',
      headerMode: 'none',
    };

    this.SearchNavigator = StackNavigator(
      this.routeSettings,
      this.stackNavigatorSettings,
    );
  }

  render() {
    const SearchNavigator = this.SearchNavigator;

    return (
      <SearchNavigator />
    );
  }
}
