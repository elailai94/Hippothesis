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
import { Container, Header, Body, Title, List, ListItem, Left, Right, Button, Icon, Text, Spinner} from 'native-base';

import RecipeCard from './RecipeCard';

class RecipeSearchResultView extends Component {

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
          <Button transparent>
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
 
export default connect(
  mapStateToProps,
  null
)(RecipeSearchResultView);