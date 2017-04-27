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
  Button,
  Icon,
  Input,
  Item,
  ListItem,
  Text
} from 'native-base';
import Swipeable from 'react-native-swipeable';

export default class EditableListItem extends Component {
  renderInput() {
    return (
      <Input
        defaultValue={this.props.title}
        onEndEditing={(event) => this.props.onEndEditing(event.nativeEvent.text)}
      />
    );
  }

  renderButton() {
    return [
      <Button
        transparent
        onPress={() => this.props.onPress()}
      >
        <Icon name="trash" />
      </Button>
    ];
  }

  render() {
    const rightButtons = [
      <Button
        transparent
        onPress={() => this.props.onPress()}
      >
        <Icon name="trash" />
      </Button>
    ];

    return (
      <Swipeable rightButtons={rightButtons}>
        <ListItem style={styles.editableListItem}>
          <Item style={styles.editableItem}>
            <Input
              defaultValue={this.props.title}
              onEndEditing={(event) => this.props.onEndEditing(event.nativeEvent.text)}
            />
            <Text>{' '}</Text>
          </Item>
        </ListItem>
      </Swipeable>
    );
  }
}

const styles = {
  editableItem: {
    borderWidth: 0,
  },
  editableListItem: {
    margin: 0,
    padding: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
}
