/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import AppNavigator from '../components/appnavigator/AppNavigator';

class AppNavigatorView extends Component {
  render() {
    return (
      <AppNavigator
        navigation={
          addNavigationHelpers({
            state: this.props.currentTab,
            dispatch: this.props.dispatch,
          })
        }
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    currentTab: state.navigation.appNavigator
  };
}

export default connect(mapStateToProps)(AppNavigatorView);
