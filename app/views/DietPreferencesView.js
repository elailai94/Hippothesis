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
  addDiet,
  removeDiet,
} from '../actions/DietaryPreferencesActions';

class DietPreferencesView extends Component {
  // Mark a diet as checked or not checked in the diet list
  toggleDiet(name) {
    if (this.props.diets.includes(name)) {
      this.props.removeDiet(name);
    } else {
      this.props.addDiet(name);
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
            <Title>Diets</Title>
          </Body>
          <Right/>
      </Header>
    );
  }

  renderContent() {
    const diets = [
      'Lacto Vegetarian',
      'Ovo Vegetarian',
      'Paleo',
      'Pescetarian',
      'Primal',
      'Vegan',
      'Vegetarian',
    ];

    return (
      <Content>
        {diets.map((diet) => {
          return (
            <DietaryPreferencesListItem
              key={diet}
              type="selection"
              title={diet}
              checked={this.props.diets.includes(diet)}
              onPress={() => this.toggleDiet(diet)}
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
    diets: state.dietaryPreferences.diets,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addDiet: (name) => dispatch(addDiet(name)),
    removeDiet: (name) => dispatch(removeDiet(name)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DietPreferencesView);
