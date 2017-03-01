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
import { View, ScrollView, Image, StatusBar, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Body, Title, List, ListItem, Left, Right, Button, Icon, Text} from 'native-base';

import RecipeCard from './RecipeCard';

class RecipeSearchResultView extends Component {

  render() {
    return <Container style={{ marginBottom: 50 }}>

      <StatusBar barStyle="light-content" />
      <Header>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Recipes</Title>
        </Body>
        <Right/>
      </Header>

      <List
        dataArray={this.props.recipes}
        renderRow={(data) => <RecipeCard {...data[Object.keys(data)[0]]}/>}
      />

    </Container>
  }
}

function mapStateToProps(state) {
  return {
    recipeSearchResults: state.recipeSearchResults,
    recipes: state.recipes
  };
}
 
export default connect(
  mapStateToProps,
  null
)(RecipeSearchResultView);