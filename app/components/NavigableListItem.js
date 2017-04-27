/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import React, { Component } from 'react';
import {
  Body,
  Icon,
  ListItem,
  Right,
  Text,
} from 'native-base';

export default class NavigableListItem extends Component {
  renderBody() {
    return (
      <Body>
        <Text>{this.props.title}</Text>
      </Body>
    );
  }

  renderRightElement() {
    return (
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    );
  }

  render() {
    return (
      <ListItem onPress={() => this.props.onPress()}>
        {this.renderBody()}
        {this.renderRightElement()}
      </ListItem>
    );
  }
}
