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
  Text,
  Item,
  Input,
  Thumbnail,
  Icon,
  InputGroup,
  Left,
  Right,
  Button,
  Grid,
  Row,
  Col,
  List,
  ListItem
} from 'native-base';

import Images from '../constants/Images';
import IngredientSelector from '../components/IngredientSelector';
import { searchRecipes } from '../actions/RecipeSearchResultsActions';
import { addIngredient, removeIngredient, editIngredient } from '../actions/IngredientListActions';

class RecipeSearchView extends Component {

  goToRecipeSearchResultView() {
    this.props.navigation.navigate('recipeSearchResult');
  }

  searchRecipes() {
    const includeIngredients = this.props.ingredients.map((elem) => elem.name).join(",");

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

    this.goToRecipeSearchResultView();
  }

  addIngredient() {
    this.props.addIngredient("");
  }

  editIngredient(id, name) {
    this.props.editIngredient(id, name);
  }

  removeIngredient(id) {
    this.props.removeIngredient(id);
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
                onChangeText={(text) => this.editIngredient(data.id, text)}
              />
              <Button transparent style={styles.trashButton} onPress={() => this.removeIngredient(data.id)}>
                <Icon style={styles.trashIcon} name="trash"/>
              </Button>
            </Item>
          </ListItem>}
      />

    let content = emptyState;
    console.log(this.props.ingredients);
    if (this.props.ingredients.length > 0) {
      content = ingredientList
    }

    return (
      <Container>

        <View>
          <StatusBar barStyle="light-content"/>
          <Image style={styles.background} source={Images.backgrounds.search}>
            <Text style={styles.header}>Discover</Text>
          </Image>
        </View>

        <Button style={styles.headerButton} onPress={() => this.addIngredient()}>
          <Icon style={styles.headerButtonIcon} name="add"/>
        </Button>

        {content}

        <Button full style={styles.searchButton} onPress={() => this.searchRecipes()}>
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
    marginRight: 40,
    height: 50,
    width: 50,
    padding: 0,
    borderRadius: 25,
    justifyContent: 'center',
    backgroundColor: '#f2487a',
    zIndex: 10,
  },
  headerButtonIcon: {
    fontSize: 40,
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
  }
}

function mapStateToProps(state) {
  return {
    ingredients: state.ingredients,
    recipeSearchResults: state.recipeSearchResults
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addIngredient: (name) => dispatch(addIngredient(name)),
    editIngredient: (id, name) => dispatch(editIngredient(id, name)),
    removeIngredient: (id) => dispatch(removeIngredient(id)),
    searchRecipes: (parameters) => dispatch(searchRecipes(parameters))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSearchView);
