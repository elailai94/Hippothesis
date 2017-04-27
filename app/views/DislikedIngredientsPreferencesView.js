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

import EditableListItem from '../components/EditableListItem';
import {
  addDislikedIngredient,
  removeDislikedIngredient,
  removeAllDislikedIngredients,
  editDislikedIngredient,
} from '../actions/DietaryPreferencesActions';

class DislikedIngredientsPreferencesView extends Component {
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
            <Title>Disliked Ingredients</Title>
          </Body>
          
          <Right>
            <Button
              transparent
              onPress={() => this.props.removeAllDislikedIngredients()}
            >
              <Text>Reset</Text>
            </Button>
          </Right>
      </Header>
    );
  }

  renderContent() {
    return (
      <Content>
        {this.props.dislikedIngredients.map((dislikedIngredient) => {
          return (
            <EditableListItem
              key={dislikedIngredient.id}
              title={dislikedIngredient.name}
              onEndEditing={(text) => this.props.editDislikedIngredient(dislikedIngredient.id, text)}
              onPress={() => this.props.removeDislikedIngredient(dislikedIngredient.id)}
            />
          );
        })}
        <Button
          full
          onPress={() => this.props.addDislikedIngredient('New Ingredient')}
        />
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
    dislikedIngredients: state.dietaryPreferences.dislikedIngredients,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addDislikedIngredient: (name) => dispatch(addDislikedIngredient(name)),
    removeDislikedIngredient: (id) => dispatch(removeDislikedIngredient(id)),
    removeAllDislikedIngredients: () => dispatch(removeAllDislikedIngredients()),
    editDislikedIngredient: (id, name) => dispatch(editDislikedIngredient(id, name)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DislikedIngredientsPreferencesView);
