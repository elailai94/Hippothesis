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
import { View, ScrollView, Image, StatusBar, TextInput, ListView } from 'react-native';
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
  Text,
  Spinner
} from 'native-base';

import Images from '../constants/Images';
import IngredientSelector from '../components/IngredientSelector';
import { searchRecipes } from '../actions/RecipeSearchResultsActions';
import { addIngredient, removeIngredient, editIngredient } from '../actions/IngredientListActions';
import { setSearchView } from '../actions/NavigationActions';

import RecipeCard from '../components/RecipeCard';

class RecipeSearchResultView extends Component {

  goBack() {
    this.props.setSearchView('search');
  }

  render() {

    let content =
      <View><Spinner color="#999999"/></View>
    ;

    console.log("props tops:", this.props.recipes);

    if (Object.keys(this.props.recipes).length > 0) {
      content =
        <List
          dataArray={this.props.recipes}
          renderRow={(data) => <RecipeCard {...data[Object.keys(data)[0]]}/>}
        />;
    }

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

      {content}

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
