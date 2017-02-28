/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  TabBarIOS,
  View
} from 'react-native';
import { connect } from 'react-redux';

import Styles from './Styles';
import Images from '../../constants/Images';
import { selectTab } from '../../actions/NavigationActions';
import RecipeSearchView from '../RecipeSearchView';

class NavigationBar extends Component {
  handleTabSelection(newTab) {
    if (this.props.selectedTab !== newTab) {
      this.props.selectTab(newTab);
    }
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="Home"
          icon={Images.icons.home.unactive}
          selectedIcon={Images.icons.home.active}
          selected={this.props.selectedTab === 'home'}
          onPress={() => this.handleTabSelection('home')}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Search"
          icon={Images.icons.search.unactive}
          selectedIcon={Images.icons.search.active}
          selected={this.props.selectedTab === 'search'}
          onPress={() => this.handleTabSelection('search')}>
          <RecipeSearchView {...this.props}/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Profile"
          icon={Images.icons.profile.unactive}
          selectedIcon={Images.icons.profile.active}
          selected={this.props.selectedTab === 'profile'}
          onPress={() => this.handleTabSelection('profile')}>
          <View style={{flex: 3, backgroundColor: 'steelblue'}} />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedTab: state.navigation.selectedTab
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectTab: (newTab) => dispatch(selectTab(newTab))
  };
}
 
const VisibleNavigationBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar);

export default VisibleNavigationBar;
