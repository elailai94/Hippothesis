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
import { searchRecipes } from '../actions/RecipeSearchResultsActions';
import RecipeCard from '../components/RecipeCard';

class RecipeSearchResultView extends Component {

  goBack() {
    this.props.navigation.goBack();
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
          renderRow={(data) =>
            <RecipeCard {...data[Object.keys(data)[0]]} navigation={
              this.props.navigation
            }/>
          }
        />;
    }

    return (
      <Container>
      <Image
        style={styles.headerImage}
        source={Images.backgrounds.search}
      >
        <Button transparent style={{marginTop: 10}} onPress={() => this.goBack()}>
          <Icon name="arrow-back" style={{color: 'white'}}/>
        </Button>
        <Text style={styles.headerText}>Search{'\n'}Results</Text>
      </Image>

      {content}

      </Container>
    );
  }
}

const styles = {
  headerImage: {
    height: 175,
    width: null,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  headerText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 40,
    marginLeft: 20,
    marginTop: 10,
    fontFamily: 'Avenir-Light',
    letterSpacing: 2
  }
}

function mapStateToProps(state) {
  return {
    recipeSearchResults: state.recipeSearchResults,
    recipes: state.recipes
  };
}

export default connect(mapStateToProps)(RecipeSearchResultView);
