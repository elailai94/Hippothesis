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
  Card,
  CardItem,
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
import { selectRecipe } from '../actions/NavigationActions';


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

  goToRecipeView(id) {
    this.props.setSelectedRecipe(id);
    this.props.navigation.navigate('recipe');
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
              {
                console.log("Object keys", data);
                return (
                  <Card style={styles.card}>
                    <CardItem cardBody style={styles.imageContainer}  onPress={() => this.goToRecipeView(data.id)}>
                      <Image style={styles.image} source={{uri: data.image}} />
                    </CardItem>
                    <CardItem>
                      <Text>{data.title}</Text>
                    </CardItem>
                  </Card>
                );            
              }
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
  imageContainer: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    flex: 1,
    height: 120
  }
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
    searchRecipes: (parameters) => dispatch(searchRecipes(parameters)),
    setSelectedRecipe: (id) => dispatch(selectRecipe(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);