/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';

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
      profile: { screen: ProfileView         },
    };

    // Set up drawer navigator settings for the app navigator
    this.drawerNavigatorSettings = {
      initialRouteName: 'home',
      contentOptions: {
        activeTintColor: '#F2487A',
      },
    };

    this.AppNavigator = DrawerNavigator(
      this.routeSettings,
      this.drawerNavigatorSettings,
    );
  }

  render() {
    const AppNavigator = this.AppNavigator;

    return (
      <AppNavigator />
    );
  }
}
