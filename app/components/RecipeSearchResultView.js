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
import {
  Container,
  Header,
  Body,
  Title,
  List,
  ListItem,
  Left,
  Right,
  Button,
  Icon,
  Text
} from 'native-base';

import Images from '../constants/Images';
import IngredientSelector from './IngredientSelector';
import { searchRecipes } from '../actions/RecipeSearchResultsActions';
import { addIngredient, removeIngredient, editIngredient } from '../actions/IngredientListActions';
import { setSearchView } from '../actions/NavigationActions';


import RecipeCard from './RecipeCard';

class RecipeSearchResultView extends Component {

  goBack() {
    this.props.setSearchView('search');
  }

  render() {
    return <Container style={{ marginBottom: 50 }}>

      <StatusBar barStyle="light-content" />
      <Header>
        <Left>
          <Button transparent onPress={() => this.goBack()}>
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
 

function mapDispatchToProps(dispatch) {
  return {
    setSearchView: (name) => dispatch(setSearchView(name))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeSearchResultView);
