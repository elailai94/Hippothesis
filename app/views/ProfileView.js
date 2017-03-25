/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Icon,
  Text
} from 'native-base';

export default class ProfileView extends Component {
  // Set up navigation options for the app navigator
  static navigationOptions = {
    tabBar: {
      label: 'Profile',
      icon: ({ focused, tintColor }) => {
        if (focused) {
          return <Icon name='ios-person' />;
        } else {
          return <Icon name='ios-person-outline' />;
        }
      }
    }
  }

  render() {
    return (
      <Container>
        <Text>Profile tab content goes here.</Text>
      </Container>
    );
  }
}
