/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
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
import Speech from 'react-native-speech';

import Images from '../constants/Images';
import { searchRecipes } from '../actions/RecipeSearchResultsActions';
import { addIngredient, removeIngredient, editIngredient } from '../actions/IngredientListActions';


class RecipeView extends Component {
  recipe;
  stepNum = 0;

  componentDidMount() {
    /*
      Speech.speak({
        text: this.recipe.instructions.join(' '),
        voice: 'en-CA'
      }).catch((error) => console.log('Error occurred'));
    
    getRecipeInformation(479115, {}).then((json) => {
      console.log(json);
      console.log(extractEquipments(json));
      console.log(extractExtendedIngredients(json));
      console.log(extractInstructions(json));
    });
    */
  }

  readCurrentInstruction() {
    Speech.speak({
      text: this.recipe.instructions[this.stepNum],
      voice: 'en-US'
    }).catch((error) => console.log('Error'));
  }

  readPreviousInstruction() {
    if ((this.stepNum - 1) >= 0) {
      this.stepNum -= 1;
      Speech.stop();
      Speech.speak({
        text: this.recipe.instructions[this.stepNum],
        voice: 'en-US'
      }).catch((error) => console.log('Error'));
    }
  }

  readNextInstruction() {
    if ((this.stepNum + 1) < this.recipe.instructions.length) {
      this.stepNum += 1;
      Speech.stop();
      Speech.speak({
        text: this.recipe.instructions[this.stepNum],
        voice: 'en-US'
      }).catch((error) => console.log('Error'));
    }
  }

  goBack() {
    this.props.navigation.goBack();
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
      <Container>

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
            <Text style={{fontWeight: 'bold'}}>Equipments</Text>
            <List dataArray={this.recipe.equipments} renderRow={(equipment) =>
              <ListItem>
                <Text>{equipment}</Text>
              </ListItem>
            } />
            </Col>
          </Row>
          <Row style={{marginTop: 5}}>
            <Col>
            <Text style={{fontWeight: 'bold'}}>Ingredients</Text>
            <List dataArray={this.recipe.ingredients} renderRow={(ingredient) =>
              <ListItem>
                <Text>{ingredient}</Text>
              </ListItem>
            } />
            </Col>
          </Row>
          <Row style={{marginTop: 5}}>
            <Col>
            <Text style={{fontWeight: 'bold'}}>Instructions</Text>
            <List dataArray={this.recipe.instructions} renderRow={(instruction) =>
              <ListItem>
                <Text>{instruction}</Text>
              </ListItem>
            } />
            </Col>
          </Row>
        </Grid>
      </Content>

      <View>
      <Button style={styles.searchButton} onPress={() => this.readPreviousInstruction()}>
          <Text>Previous</Text>
      </Button>
      <Button style={styles.searchButton} onPress={() => this.readCurrentInstruction()}>
          <Text>Current</Text>
      </Button>
      <Button style={styles.searchButton} onPress={() => this.readNextInstruction()}>
          <Text>Next</Text>
      </Button>
      </View>
 
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
    searchRecipes: (parameters) => dispatch(searchRecipes(parameters))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeView);
