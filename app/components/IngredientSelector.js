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
import { connect } from 'react-redux';

import { Image } from 'react-native';
import { Card, CardItem, Text, Thumbnail } from 'native-base';

export default class IngredientSelector extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.image);
  }

  render() {
    return (
      <Card>
        <CardItem cardBody>
          <Thumbnail square source={this.props.image}/>
        </CardItem>
        <CardItem cardFooter>
          <Text>{this.props.name}</Text>
        </CardItem>
      </Card>
    );
  }

}
