/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import React, { Component } from 'react';
import { ScrollView, View, Image } from 'react-native';
import {
  Button,
  Container,
  Icon,
  Input,
  Item,
  List,
  ListItem,
  Text
} from 'native-base';
import { connect } from 'react-redux';

import Images from '../constants/Images';
import {
  addIngredientToRecipeSearchIngredientsList,
  removeIngredientFromRecipeSearchIngredientsList,
  editIngredientInRecipeSearchIngredientsList
} from '../actions/RecipeSearchIngredientsListActions';
import { searchRecipes } from '../actions/RecipeSearchResultsActions';

class RecipeSearchView extends Component {
  updateFilter() {
    this.props.navigation.navigate('additionalFilter');
  }

  goToRecipeSearchResultView() {
    this.props.navigation.navigate('recipeSearchResult');
  }

  searchRecipes() {

    let ingredientString =
      this.props.recipeSearchIngredientsList.map((elem) => elem.name).join(",");

    var parameters = {
      addRecipeInformation: true,
      fillIngredients: true,
      instructionsRequired: true,
      limitLicense: false,
      number: 10,
      offset: 0,
      ranking: 1
    };

    console.log("Allergies: ");
    console.log(this.props.allergies);


    console.log("Cuisines: ");
    console.log(this.props.cuisines);


    console.log("Diets: ");
    console.log(this.props.diets);


    console.log("Nutrition: ");
    console.log(this.props.nutrition);
    console.log(parseInt(this.props.nutrition));


    console.log("Types: ");
    console.log(this.props.types);


    parameters.includeIngredients = ingredientString;
    parameters.exludeIngredients = this.props.allergies;
    parameters.cuisine = this.props.cuisines;
    parameters.diet = this.props.diets;
    parameters.maxCalories = parseInt(this.props.nutrition);
    parameters.type = this.props.types;

    console.log("parameters", parameters);

    this.props.searchRecipes(parameters);

    this.goToRecipeSearchResultView();
  }

  // Add a new ingredient to the recipe search ingredients list
  addIngredient() {
    this.props.addIngredient('');
  }

  // Remove an ingredient from the recipe search ingredients list
  removeIngredient(id) {
    this.props.removeIngredient(id);
  }

  // Edit an ingredient in the recipe search ingredients list
  editIngredient(id, name) {
    this.props.editIngredient(id, name);
  }

  render() {
    // PLEASE LEAVE AS SCOLLVIEW IT FIXES SPACING
    let emptyState = (
      <ScrollView style={styles.emptyState} scrollEnabled={false}>
        <Image style={styles.emptyStateImg} source={Images.food.pot}/>
        <Text style={styles.emptyStateText}>What do you have in the kitchen?</Text>
        <Text style={styles.emptyStateText}>Add some tasty ingredients!</Text>
      </ScrollView>
    );

    let recipeSearchIngredientsList = (
      <List
        style={styles.recipeSearchIngredientsList}
        dataArray={this.props.recipeSearchIngredientsList}
        renderRow={(ingredient) =>
          <ListItem style={styles.recipeSearchIngredientsListItem}>
            <Item style={styles.ingredientItem}>
              <Input
                placeholder="New ingredient"
                defaultValue={ingredient.name}
                onChangeText={(name) => this.editIngredient(ingredient.id, name)}
              />
              <Button transparent
                style={styles.trashButton}
                onPress={() => this.removeIngredient(ingredient.id)}
              >
                <Icon style={styles.trashIcon} name="trash"/>
              </Button>
            </Item>
          </ListItem>
        }
      />
    );

    let content = emptyState;
    if (this.props.recipeSearchIngredientsList.length > 0) {
      content = recipeSearchIngredientsList;
    }

    return (
      <Container>
        <Image
          style={styles.headerImage}
          source={Images.backgrounds.search}
        >
          <Text style={styles.headerText}>Discover</Text>
        </Image>

        <View style={styles.buttonView}>
          <Button style={styles.headerButtonFilter} onPress={() => this.updateFilter()}>
            <Icon style={styles.headerButtonIconFilter} name="funnel"/>
          </Button>

          <Button style={styles.headerButtonPlus} onPress={() => this.addIngredient()}>
            <Icon style={styles.headerButtonIconPlus} name="add"/>
          </Button>
        </View>

        {content}

        <Button full style={styles.searchButton} onPress={() => this.searchRecipes()}>
          <Text>Search</Text>
        </Button>
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
  buttonView:{
    alignSelf: 'flex-end',
    height: 50,
    paddingBottom: 30,
    flexDirection:'row'
  },
  headerButtonPlus: {
    alignSelf: 'flex-end',
    padding: 0,
    borderRadius: 25,
    height: 50,
    width: 50,
    marginRight: 25,
    justifyContent: 'center',
    backgroundColor: '#f2487a',
    zIndex: 10,
  },
  headerButtonFilter: {
    alignSelf: 'flex-end',
    padding: 0,
    borderRadius: 25,
    height: 50,
    width: 50,
    marginRight: 25,
    justifyContent: 'center',
    backgroundColor: '#48abf2',
    zIndex: 10,
  },
  headerButtonIconPlus: {
    fontSize: 40,
    backgroundColor: 'transparent',
  },
  headerButtonIconFilter: {
    fontSize: 30,
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
  recipeSearchIngredientsList: {
    marginTop: -50,
  },
  recipeSearchIngredientsListItem: {
    margin: 0,
    padding: 4,
    paddingLeft: 10,
    paddingRight: 10
  },
  ingredientItem: {
    borderWidth: 0,
  },
  trashButton: {
    paddingRight: 0,
    paddingTop: 10,
  },
  trashIcon: {
    color: '#707070'
  }
}

function mapStateToProps(state) {
  return {
    recipeSearchIngredientsList: state.recipeSearchIngredientsList,
    recipes: state.recipes,
    allergies: state.filters.allergies,
    cuisines: state.filters.cuisines,
    diets: state.filters.diets,
    nutrition: state.filters.nutrition,
    types: state.filters.types
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addIngredient: (name) => dispatch(addIngredientToRecipeSearchIngredientsList(name)),
    removeIngredient: (id) => dispatch(removeIngredientFromRecipeSearchIngredientsList(id)),
    editIngredient: (id, name) => dispatch(editIngredientInRecipeSearchIngredientsList(id, name)),
    searchRecipes: (parameters) => dispatch(searchRecipes(parameters))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSearchView);
