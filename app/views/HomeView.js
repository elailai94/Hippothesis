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
  View,
  StatusBar,
  Image,
} from 'react-native';
import {
  Container,
  Icon,
  Text,
} from 'native-base';
import Images from '../constants/Images';

export default class HomeView extends Component {
  // Set up navigation options for the app navigator
  static navigationOptions = {
    tabBar: {
      label: 'Home',
      icon: ({ focused, tintColor }) => {
        if (focused) {
          return <Icon name='ios-home' />;
        } else {
          return <Icon name='ios-home-outline' />;
        }
      }
    }
  }

  render() {
    return (
      <Container>
        <View>
          <StatusBar barStyle="light-content"/>
          <Image style={styles.background} source={Images.backgrounds.cooking}>
            <Text style={styles.header}>Explore</Text>
          </Image>
        </View>
      </Container>
    );
  }
}

const styles = {
  background: {
    height: 175,
    width: null,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 40,
    marginLeft: 20,
    marginTop: 10,
    fontFamily: 'Avenir-Light',
    letterSpacing: 2
  },
};
