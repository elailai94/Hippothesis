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
import { Container, Content, Text, Item, Input, Thumbnail, Icon, InputGroup, Left, Right, Button, Grid, Row, Col, List, ListItem } from 'native-base';

import Images from '../constants/Images';
import IngredientSelector from './IngredientSelector';
import { searchRecipes } from '../actions/RecipeSearchResultsActions';
import { addIngredient, removeIngredient, editIngredient } from '../actions/IngredientListActions';
import { setSearchView } from '../actions/NavigationActions';

class RecipeSearchView extends Component {

  search() {

    let ingredientString = this.props.ingredients.map((elem) => elem.name).join(",");
    console.log("ingredientString", ingredientString);

    this.props.searchRecipes({
      limitLicense: false,
      number: 5,
      offset: 0,
      includeIngredients: ingredientString,
    }).then(() => {
      console.log("results = ", this.props.recipes);
      // take user to recipe results view
      this.props.setSearchView('results');
    })
  }

  newIngredient() {
    this.props.addIngredient("");
  }

  updateIngredient(id, name) {
    this.props.editIngredient(id, name);
  }

  render() {

    let emptyState = 
      <ScrollView style={styles.emptyState} scrollEnabled={false}>
        <Image style={styles.emptyStateImg} source={Images.food.pot}/>
        <Text style={styles.emptyStateText}>What do you have in the kitchen?</Text>
        <Text style={styles.emptyStateText}>Add some tasty ingredients!</Text>
      </ScrollView>;
     
    let ingredientList =
      <List 
        style={{marginTop: -50, zIndex: 0}}
        dataArray={this.props.ingredients} 
        renderRow={ (data) => 
          <ListItem style={{margin: 0, padding: 4, paddingLeft: 10, paddingRight: 10}}>
            <Item style={styles.ingredientInput}>
              <Input placeholder="New ingredient" defaultValue={data.name} 
               onChangeText={(text) => this.updateIngredient(data.id, text)}/>
            </Item>
          </ListItem>}
      />

    let content = emptyState;
    console.log(this.props.ingredients);
    if (this.props.ingredients.length > 0) {
      content = ingredientList
    }

    return (
      <Container style={{marginBottom: 50}}>

        <View>
          <StatusBar barStyle="light-content"/>
          <Image style={styles.background} source={Images.backgrounds.search}>
            <Text style={styles.header}>Discover</Text>
          </Image>
        </View>

        <Button style={styles.headerButton} onPress={() => this.newIngredient()}>
          <Icon style={styles.headerButtonIcon} name="add"/>
        </Button>

        {content}

        <Button full style={styles.searchButton} onPress={() => this.search()}>
          <Text>Search</Text>
        </Button>
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
    marginRight: 25,
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
  }
}

function mapStateToProps(state) {
  return {
    ingredients: state.ingredients,
    recipeSearchResults: state.recipeSearchResults,
    recipes: state.recipes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addIngredient: (name) => dispatch(addIngredient(name)),
    editIngredient: (id, name) => dispatch(editIngredient(id, name)),
    searchRecipes: (parameters) => dispatch(searchRecipes(parameters)),
    setSearchView: (name) => dispatch(setSearchView(name))
  };
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeSearchView);