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
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem, Text } from 'native-base';

import Images from '../constants/Images';

export default class RecipeCard extends Component {

  render() {
    return (
      <Card style={styles.card}>
        <CardItem cardBody style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: this.props.image}} />
        </CardItem>
        <CardItem>
          <Text>{this.props.title}</Text>
        </CardItem>
      </Card>
    );
  }

}

const styles = {
  imageContainer: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    flex: 1,
    height: 120,
    resizeMode: 'contain',
  }
}