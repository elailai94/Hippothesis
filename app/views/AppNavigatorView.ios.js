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
import ProfileView from './ProfileView';

export default class AppNavigatorView extends Component {
  constructor(props) {
    super(props);

    // Set up route settings for the app navigator
    this.routeSettings = {
      home   : { screen: HomeNavigatorView   },
      search : { screen: SearchNavigatorView },
      lists  : { screen: ListsNavigatorView  },
      profile: { screen: ProfileView         }
    };

    // Set up tab navigator settings for the app navigator
    this.tabNavigatorSettings = {
      initialRouteName: 'search',
      tabBarOptions: {
        activeTintColor: '#F2487A'
      }
    };
  }

  render() {
    const AppNavigator = TabNavigator(
      this.routeSettings,
      this.tabNavigatorSettings
    );

    return (
      <AppNavigator />
    );
  }
}
