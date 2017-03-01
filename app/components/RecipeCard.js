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
  
  constructor(props) {
    super(props);
    console.log("TEST 12345", props);
  }

  render() {
    return (
      <Card>
        <CardItem cardBody>
          <Image source={{uri: this.props.image}} />
        </CardItem>
        <CardItem>
          <Text>{this.props.title}</Text>
        </CardItem>
      </Card>
    );
  }

}