/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import HomeNavigatorView from './HomeNavigatorView';
import SearchNavigatorView from './SearchNavigatorView';
import ListsNavigatorView from './ListsNavigatorView';
import ProfileNavigatorView from './ProfileNavigatorView';

export default class AppNavigatorView extends Component {
  constructor(props) {
    super(props);

    // Set up route settings for the app navigator
    this.routeSettings = {
      home   : { screen: HomeNavigatorView    },
      search : { screen: SearchNavigatorView  },
      lists  : { screen: ListsNavigatorView   },
      profile: { screen: ProfileNavigatorView },
    };

    // Set up tab navigator settings for the app navigator
    this.tabNavigatorSettings = {
      initialRouteName: 'home',
      tabBarOptions: {
        activeTintColor: '#F2487A',
      },
    };

    this.AppNavigator = TabNavigator(
      this.routeSettings,
      this.tabNavigatorSettings,
    );
  }

  render() {
    const AppNavigator = this.AppNavigator;

    return (
      <AppNavigator />
    );
  }
}
