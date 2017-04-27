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
  CheckBox,
  Left,
  ListItem,
  Text,
} from 'native-base';

export default class SelectableListItem extends Component {
  renderLeftElement() {
    return (
      <Left>
        <CheckBox
          checked={this.props.checked}
          onPress={() => this.props.onPress()}
        />
      </Left>
    );
  }

  renderBody() {
    return (
      <Body>
        <Text>{this.props.title}</Text>
      </Body>
    );
  }

  render() {
    return (
      <ListItem onPress={() => this.props.onPress()}>
        {this.renderLeftElement()}
        {this.renderBody()}
      </ListItem>
    );
  }
}
