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
  ListItem,
  Right,
  Text,
  Title,
} from 'native-base';
import { connect } from 'react-redux';

import DietaryPreferencesListItem from '../components/DietaryPreferencesListItem';
import {
  addAllergy,
  removeAllergy,
  removeAllAllergies,
} from '../actions/DietaryPreferencesActions';

class AllergyPreferencesView extends Component {
  // Mark an allergy as checked or not checked in the allergy list
  toggleAllergy(name) {
    if (this.props.allergies.includes(name)) {
      this.props.removeAllergy(name);
    } else {
      this.props.addAllergy(name);
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
            <Title>Allergies</Title>
          </Body>
          
          <Right>
            <Button
              transparent
              onPress={() => this.props.removeAllAllergies()}
            >
              <Text>Reset</Text>
            </Button>
          </Right>
      </Header>
    );
  }

  renderContent() {
    const allergies = [
      'Dairy',
      'Egg',
      'Gluten',
      'Peanut',
      'Sesame',
      'Seafood',
      'Shellfish',
      'Soy',
      'Sulfite',
      'Tree Nut',
      'Wheat',
    ];

    return (
      <Content>
        {allergies.map((allergy) => {
          return (
            <DietaryPreferencesListItem
              key={allergy}
              type="selection"
              title={allergy}
              checked={this.props.allergies.includes(allergy)}
              onPress={() => this.toggleAllergy(allergy)}
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
    allergies: state.dietaryPreferences.allergies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addAllergy: (name) => dispatch(addAllergy(name)),
    removeAllergy: (name) => dispatch(removeAllergy(name)),
    removeAllAllergies: () => dispatch(removeAllAllergies()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllergyPreferencesView);
