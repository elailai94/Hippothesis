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
import {
  View,
  ScrollView,
  Image,
  StatusBar,
  TextInput,
  Share
} from 'react-native';
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
  Spinner,
  Badge
} from 'native-base';

import Images from '../constants/Images';
import { searchRecipes } from '../actions/RecipeSearchResultsActions';
import { addIngredient, removeIngredient, editIngredient } from '../actions/IngredientListActions';
import { setSearchView } from '../actions/NavigationActions';

import { getRecipeInformation } from '../utilities/Spoonacular';
import { extractEquipments, extractIngredients, extractInstructions } from
'../utilities/Extract';

class RecipeView extends Component {
  recipe;

  componentDidMount() {
    getRecipeInformation(479115, {}).then((json) => {
      console.log(json);
      console.log(extractEquipments(json));
      console.log(extractIngredients(json));
      console.log(extractInstructions(json));
    });
  }

  goBack() {
    this.props.setSearchView('results');
  }

  getRecipeObject() {
    for (var i = 0; i < 10; i++){
      const recipeObj = this.props.recipes[i];
      if (recipeObj.hasOwnProperty(this.props.selectedRecipe)) {
        const temp = this.props.selectedRecipe;
        this.recipe = recipeObj[temp];
      }

    }
  }


  findMyObject() {
    const id = this.props.selectedRecipe;
    const stringVal = id.toString();
    const zero = '0';
    this.getRecipeObject();
  }

  shareRecipe() {
    const content = {
      message: 'Check out this great recipe!',
      title: 'Recipezy',
      url: this.recipe.sourceUrl
    };
    Share.share(content);
  }

  getVegetarianBadge() {
    if (this.recipe.vegetarian) {
      return (
        <Badge style={{backgroundColor: 'green', borderRadius: 0, marginRight: 5}}>
          <Text>Vegetarian</Text>
        </Badge>
      );
    }
  }

  getGlutenFreeBadge() {
    if (this.recipe.glutenFree) {
      return (
        <Badge style={{backgroundColor: 'orange',  borderRadius: 0, marginRight: 5}}>
          <Text>Gluten-Free</Text>
        </Badge>
      );
    }
  }

  getDairyFreeBadge() {
    if (this.recipe.dairyFree) {
      return (
        <Badge style={{backgroundColor: 'lightblue',  borderRadius: 0, marginRight: 5}}>
          <Text>Dairy-Free</Text>
        </Badge>
      );
    }
  }

  render() {
    this.findMyObject();

    return (
      <Container style={{marginBottom: 50}}>

      <StatusBar barStyle="light-content" />

      <Content>

        <Image style={styles.background} source={{uri: this.recipe.image} }>
          <Button transparent style={{marginTop: 10}} onPress={() => this.goBack()}>
            <Icon name="arrow-back" style={{color: 'white'}}/>
          </Button>
        </Image>

        <Button style={styles.headerButton} onPress={() => this.shareRecipe()}>
          <Icon style={styles.headerButtonIcon} name="share"/>
        </Button>

        <Grid style={{margin: 10, top: -30}}>
          <Row style={{marginTop: 10, marginBottom: 5}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{this.recipe.title}</Text>
          </Row>
          <Row style={{marginTop: 5, marginBottom: 5}}>
            <Col style={{alignItems: 'center'}}>
              <Icon name='ios-heart-outline' />
              <Text>{this.recipe.aggregateLikes} likes</Text>
            </Col>
            <Col style={{alignItems: 'center'}}>
              <Icon name='ios-time-outline' />
              <Text>{this.recipe.readyInMinutes} minutes</Text>
            </Col>
            <Col style={{alignItems: 'center'}}>
              <Icon name='ios-people-outline' />
              <Text>{this.recipe.servings} servings</Text>
            </Col>
          </Row>
          <Row style={{marginTop: 5, marginBottom: 5, alignSelf: 'flex-start'}}>
            {this.getVegetarianBadge()}
            {this.getGlutenFreeBadge()}
            {this.getDairyFreeBadge()}
          </Row>
          <Row style={{marginTop: 5}}>
            <Col>
            <Text style={{fontWeight: 'bold'}}>Steps</Text>
            <List dataArray={extractInstructions(this.recipe)} renderRow={(step) =>
              <ListItem>
                <Text>{step}</Text>
              </ListItem>
            } />
            </Col>
          </Row>
        </Grid>
      </Content>

      </Container>
    );
  }

}

const styles = {
  background: {
    height: 175,
    width: null,
    resizeMode: 'cover'
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
  },
  image: {
    height: 250
  },
  colInline: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
