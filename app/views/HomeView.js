/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  StatusBar,
  Image,
} from 'react-native';
import {
  Container,
  Icon,
  Text,
  Spinner,
  Button,
  List,
  ListItem
} from 'native-base';
import Images from '../constants/Images';
import { searchRecipes } from '../actions/RecipeSearchResultsActions';
import RecipeCard from '../components/RecipeCard';


class HomeView extends Component {

  search() {
    const includeIngredients = this.props.inventoryList.map((elem) => elem.name).join(",");

    const parameters = {
      addRecipeInformation: true,
      fillIngredients: true,
      includeIngredients: includeIngredients,
      instructionsRequired: true,
      limitLicense: false,
      number: 10,
      offset: 0,
      ranking: 1
    };
    this.props.searchRecipes(parameters);  

    this.props.navigation.navigate('recipeSearchResult');
  }



  render() {

    let content =
      <View><Text>No Recipes Saved</Text></View>
    ;

    console.log("props tops:", this.props);
    console.log("props tops:", this.props.recipesStore);
    
    if (Object.keys(this.props.recipesStore) != null){
      if(Object.keys(this.props.recipesStore).length > 0) {
        content =
          <List
            dataArray={this.props.recipesStore}
            renderRow={(data) =>
              <RecipeCard {...data[Object.keys(data)[0]]} navigation={
                this.props.navigation
              }/>
            }
          />;
      }
    }
    
    
    return (
      <Container>
        <View>
          <StatusBar barStyle="light-content"/>
          <Image style={styles.background} source={Images.backgrounds.cooking}>
            <Text style={styles.header}>Explore</Text>
          </Image>
        </View>

        <Button full style={styles.searchButton} onPress={() => this.search()}>
          <Text>Search for recipes</Text>
        </Button>


        {content}


      </Container>
    );
  }
}

const styles = {
  background: {
    height: 175,
    width: null,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 40,
    marginLeft: 20,
    marginTop: 10,
    fontFamily: 'Avenir-Light',
    letterSpacing: 2
  },
  searchButton: {
    backgroundColor: '#f2487a'
  },
};

function mapStateToProps(state) {
  return {
    inventoryList: state.inventoryList,
    recipes: state.recipes,
    recipesStore: state.recipesStore,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchRecipes: (parameters) => dispatch(searchRecipes(parameters))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);