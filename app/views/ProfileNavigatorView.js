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

import DietaryPreferencesView from './DietaryPreferencesView';
import AllergyPreferencesView from './AllergyPreferencesView';
import CuisinePreferencesView from './CuisinePreferencesView';
import DietPreferencesView from './DietPreferencesView';
import DislikedIngredientsPreferencesView from './DislikedIngredientsPreferencesView';

export default class ProfileNavigatorView extends Component {
  // Set up navigation options for the app navigator
  static navigationOptions = {
    drawer: {
      label: 'Profile',
      icon: ({ focused, tintColor }) => {
        if (focused) {
          return <Icon name='ios-person' style={{color: tintColor}} />;
        } else {
          return <Icon name='ios-person-outline' />;
        }
      },
    },
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused, tintColor }) => {
      if (focused) {
        return <Icon name='ios-person' style={{color: tintColor}} />;
      } else {
        return <Icon name='ios-person-outline' />;
      }
    },
  }

  constructor(props) {
    super(props);

    // Set up route settings for the profile navigator
    this.routeSettings = {
      dietaryPreferences           : { screen: DietaryPreferencesView             },
      allergyPreferences           : { screen: AllergyPreferencesView             },
      cuisinePreferences           : { screen: CuisinePreferencesView             },
      dietPreferences              : { screen: DietPreferencesView                },
      dislikedIngredientPreferences: { screen: DislikedIngredientsPreferencesView },
    };

    // Set up stack navigator settings for the profile navigator
    this.stackNavigatorSettings = {
      initialRouteName: 'dietaryPreferences',
      headerMode: 'none',
    };

    this.ProfileNavigator = StackNavigator(
      this.routeSettings,
      this.stackNavigatorSettings,
    );
  }

  render() {
    const ProfileNavigator = this.ProfileNavigator;
    
    return <ProfileNavigator />;
  }
}
