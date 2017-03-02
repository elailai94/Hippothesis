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
  Content,
  Header,
  Body,
  Text,
  Item,
  Input,
  Thumbnail,
  Icon,
  InputGroup,
  Button,
  Grid,
  Row,
  Col,
  ListItem,
  Title,
  List,
  Left,
  Right,
  Spinner
} from 'native-base';

import Images from '../constants/Images';
import IngredientSelector from './IngredientSelector';
import { searchRecipes } from '../actions/RecipeSearchResultsActions';
import { addIngredient, removeIngredient, editIngredient } from '../actions/IngredientListActions';
import { setSearchView } from '../actions/NavigationActions';

class RecipeView extends Component {
  recipe;
  
  goBack() {
    this.props.setSearchView('results');
  }

  getRecipeObject() {
    for (var i = 0; i < 10; i++){
      const recipeObj = this.props.recipes[i];
      if (recipeObj.hasOwnProperty(this.props.selectedRecipe)) {
        console.log(recipeObj);
        const temp = this.props.selectedRecipe;
        console.log(recipeObj[temp]);
        this.recipe = recipeObj[temp];
      }

    }
  }


  findMyObject() {
    const id = this.props.selectedRecipe;
    const stringVal = id.toString();
    const zero = '0';
    this.getRecipeObject();
    console.log(this.recipe.title );
  }

  generateInstructions() {
    const steps = this.recipe.analyzedInstructions[0].steps;
    let str = '';
    for (var i = 0; i < steps.length; i++) {
       const instruction = steps[i].step;
       str = str.concat(instruction).concat('\n');
    }
    return str
  }

  render() {
    this.findMyObject();
    this.generateInstructions();


    return (
      <Container style={{marginBottom: 50}}>

      <StatusBar barStyle="light-content" />
      <Header>
        <Left>
          <Button transparent onPress={() => this.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>{ this.recipe.title }</Title>
        </Body>
        <Right/>
      </Header>

      <Content>
        <Image style={styles.image} source={{uri: this.recipe.image} } />
        <Text> Serving Size: { this.recipe.servings } </Text>
        <Text> Spoonacular Score: { this.recipe.spoonacularScore } </Text>
        <Text> Vegeterian: { this.recipe.vegeterian } </Text>
        <Text> Very Popular: { this.recipe.veryPopular } </Text>
        <Text> Very Healthy: { this.recipe.veryHealthy } </Text>
        
        <Text> Instructions: { this.generateInstructions() } </Text>
      

      </Content>

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
  headerButton: {
    alignSelf: 'flex-end',
    top: -25,
    marginRight: 50,
    height: 50,
    width: 50,
    padding: 0,
    borderRadius: 25,
    justifyContent: 'center',
    backgroundColor: '#f2487a',
    zIndex: 10,
  },
  headerButtonIcon: {
    fontSize: 50,
    backgroundColor: 'transparent',
  },
  searchButton: {
    backgroundColor: '#f2487a'
  },
  emptyState: {
    //justifyContent: 'center'
  },
  emptyStateImg: {
    height: 175,
    width: null,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  emptyStateText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#999999',
  },
  ingredientInput: {
    borderWidth: 0,
  },
  trashButton: {
    paddingRight: 0,
    paddingTop: 10,
  },
  trashIcon: {
    color: '#707070'
  },
  image: {
    height: 250    
  }
}

function mapStateToProps(state) {
  return {
    ingredients: state.ingredients,
    recipeSearchResults: state.recipeSearchResults,
    recipes: state.recipes,
    selectedRecipe: state.navigation.selectedRecipe
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addIngredient: (name) => dispatch(addIngredient(name)),
    editIngredient: (id, name) => dispatch(editIngredient(id, name)),
    removeIngredient: (id) => dispatch(removeIngredient(id)),
    searchRecipes: (parameters) => dispatch(searchRecipes(parameters)),
    setSearchView: (name) => dispatch(setSearchView(name))
  };
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeView);
