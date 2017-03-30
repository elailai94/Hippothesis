/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
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
  Text
} from 'native-base';
import Spinner from 'react-native-spinkit';

import Images from '../constants/Images';
import { searchRecipes } from '../actions/RecipeSearchResultsActions';
import RecipeCard from '../components/RecipeCard';

class RecipeSearchResultView extends Component {
  goBack() {
    this.props.navigation.goBack();
  }

  renderInProgressView() {
    return (
      <Container style={styles.inProgressContainer}>
        <Spinner
          type="ThreeBounce"
          color={styles.inProgressSpinner.color}
        />
      </Container>
    );
  }

  renderSuccessView() {
    if (this.props.recipeSearchResults.resultsList.length > 0) {
      return (
        <Container>
        <List
          dataArray={this.props.recipes}
          renderRow={(data) =>
            <RecipeCard {...data[Object.keys(data)[0]]} navigation={
              this.props.navigation
            }/>
          }
        />
      </Container>
      );
    } else {
      return (
        <Container>
          <Text>We couldn't find any recipes. Try removing your filters.</Text>
        </Container>
      );
    }
  }

  renderFailureView() {
    return (
      <Container>
        <Text>Your search request has failed.</Text>
      </Container>
    );
  }

  render() {
    let content = null;

    if (this.props.recipeSearchResults.status === 'in progress') {
      content = this.renderInProgressView();
    } else if (this.props.recipeSearchResults.status === 'success') {
      content = this.renderSuccessView();
    } else {
      content = this.renderFailureView();
    }

    return (
      <Container>
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
  },
  inProgressContainer: {
    alignSelf: 'center'
  },
  inProgressSpinner: {
    color: '#F2487A'
  }
}

function mapStateToProps(state) {
  return {
    recipeSearchResults: state.recipeSearchResults,
    recipes: state.recipes
  };
}

export default connect(mapStateToProps)(RecipeSearchResultView);
