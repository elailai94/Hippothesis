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
  Button,
  CheckBox,
  Icon,
  ListItem,
  Right,
  Text,
} from 'native-base';

export default class DietaryPreferencesListItem extends Component {
  renderRightElement() {
    if (this.props.type === 'navigation') {
      return (
        <Right>
          <Button
            transparent
            style={{padding: 0}}
            onPress={() => this.props.onPress()}
          >
            <Icon name="arrow-forward" />
          </Button>
        </Right>
      );
    } else {
      return (
        <Right>
          <CheckBox
            checked={this.props.checked}
            onPress={() => this.props.onPress()}
          />
        </Right>
      );
    }
  }

  render() {
    return (
      <ListItem>
        <Body>
          <Text>{this.props.title}</Text>
        </Body>
        
        {this.renderRightElement()}
      </ListItem>
    );
  }
}
