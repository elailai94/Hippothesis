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
  Text
} from 'native-base';

class InventoryListView extends Component {
  // Set up navigation options for the lists navigator
  static navigationOptions = {
    tabBar: {
      label: 'Inventory List'
    }
  }

  render() {
    return (
      <Container>
        <Text>The inventory list goes here.</Text>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    inventoryList: state.inventoryList
  };
}

export default connect(mapStateToProps)(InventoryListView);
