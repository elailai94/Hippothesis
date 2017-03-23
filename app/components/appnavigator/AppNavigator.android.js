/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { DrawerNavigator } from 'react-navigation';

import RecipeSearchContainer from '../RecipeSearchContainer';

const routeSettings = {
  home   : { screen: RecipeSearchContainer },
  search : { screen: RecipeSearchContainer },
  lists  : { screen: RecipeSearchContainer },
  profile: { screen: RecipeSearchContainer }
};

const drawerNavigatorSettings = {
  contentOptions: {
    activeTintColor: '#F2487A'
  }
};

const AppNavigator = DrawerNavigator(routeSettings, drawerNavigatorSettings);

export default AppNavigator;
