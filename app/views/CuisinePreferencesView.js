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
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title,
} from 'native-base';
import { connect } from 'react-redux';

import SelectableListItem from '../components/SelectableListItem';
import {
  addCuisine,
  removeCuisine,
  removeAllCuisines,
} from '../actions/DietaryPreferencesActions';

class CuisinePreferencesView extends Component {
  // Toggle a cuisine as active or not active in the cuisine list
  toggleCuisine(name) {
    if (this.props.cuisines.includes(name)) {
      this.props.removeCuisine(name);
    } else {
      this.props.addCuisine(name);
    }
  }

  renderHeader() {
    return (
      <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          
          <Body>
            <Title>Cuisines</Title>
          </Body>
          
          <Right>
            <Button
              transparent
              onPress={() => this.props.removeAllCuisines()}
            >
              <Text>Reset</Text>
            </Button>
          </Right>
      </Header>
    );
  }

  renderContent() {
    const cuisines = [
      'African',
      'American',
      'British',
      'Cajun',
      'Caribbean',
      'Chinese',
      'Eastern European',
      'French',
      'German',
      'Greek',
      'Indian',
      'Irish',
      'Italian',
      'Japanese',
      'Jewish',
      'Korean',
      'Latin American',
      'Mexican',
      'Middle Eastern',
      'Nordic',
      'Vietnamese',
      'Southern',
      'Spanish',
      'Thai',
    ];

    return (
      <Content>
        {cuisines.map((cuisine) => {
          return (
            <SelectableListItem
              key={cuisine}
              title={cuisine}
              checked={this.props.cuisines.includes(cuisine)}
              onPress={() => this.toggleCuisine(cuisine)}
            />
          );
        })}
      </Content>
    );
  }

  render() {
    return (
      <Container style={styles.viewContainer}>
        {this.renderHeader()}
        {this.renderContent()}
      </Container>
    );
  }
}

const styles = {
  viewContainer: {
    backgroundColor: 'white',
  },
};

function mapStateToProps(state) {
  return {
    cuisines: state.dietaryPreferences.cuisines,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addCuisine: (name) => dispatch(addCuisine(name)),
    removeCuisine: (name) => dispatch(removeCuisine(name)),
    removeAllCuisines: () => dispatch(removeAllCuisines()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CuisinePreferencesView);
