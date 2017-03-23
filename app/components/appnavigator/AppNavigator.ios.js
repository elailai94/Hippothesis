/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { TabNavigator } from 'react-navigation';

import RecipeSearchContainer from '../RecipeSearchContainer';
import RecipeSearchView from '../RecipeSearchView';

const routeSettings = {
  home   : { screen: RecipeSearchContainer },
  search : { screen: RecipeSearchContainer },
  lists  : { screen: RecipeSearchContainer },
  profile: { screen: RecipeSearchContainer }
};

const tabNavigatorSettings = {
  tabBarOptions: {
    activeTintColor: '#F2487A'
  }
};

const AppNavigator = TabNavigator(routeSettings, tabNavigatorSettings);

export default AppNavigator;
