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
import TextToSpeech from 'react-native-tts';

import Images from '../constants/Images';
import { searchRecipes } from '../actions/RecipeSearchResultsActions';
import { addRecipeStore } from '../actions/RecipesStoreActions'

class RecipeView extends Component {
  recipe;
  stepNum = 0;

  readCurrentInstruction() {
    TextToSpeech.addEventListener('tts-start', (event) => console.log("Start", event));
    TextToSpeech.speak(this.recipe.instructions[this.stepNum]);
  }

  readPreviousInstruction() {
    if ((this.stepNum - 1) >= 0) {
      this.stepNum -= 1;
      TextToSpeech.stop();
      TextToSpeech.speak(this.recipe.instructions[this.stepNum]);
    }
  }

  readNextInstruction() {
    if ((this.stepNum + 1) < this.recipe.instructions.length) {
      this.stepNum += 1;
      TextToSpeech.stop();
      TextToSpeech.speak(this.recipe.instructions[this.stepNum]);
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

  saveRecipe() {    
    this.props.addRecipeStore(this.recipe.id , this.recipe);
  }

  render() {
    this.recipe = this.props.navigation.state.params.recipe;

    return (
      <Container style={{backgroundColor: 'white'}}>

      <Content>

        <Image style={styles.background} source={{uri: this.recipe.image} }>
          <Button transparent style={{marginTop: 10}} onPress={() => this.goBack()}>
            <Icon name="arrow-back" style={{color: 'white'}}/>
          </Button>
        </Image>

        <View style={styles.buttonView}>
          <Button style={styles.headerButtonSave} onPress={() => this.saveRecipe()}>
            <Icon style={styles.headerButtonIcon} name="bookmark"/>
          </Button>

          <Button style={styles.headerButtonShare} onPress={() => this.shareRecipe()}>
            <Icon style={styles.headerButtonIcon} name="share"/>
          </Button>
        </View>

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
  buttonView:{
    alignSelf: 'flex-end',
    height: 50,
    paddingBottom: 30,
    flexDirection:'row'
  },
  headerButtonSave: {
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
  headerButtonShare: {
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
  headerButtonIcon: {
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
    recipeSearchResults: state.recipeSearchResults,
    recipes: state.recipes,
    selectedRecipe: state.navigation.selectedRecipe,
    recipesStore: state.recipesStore,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchRecipes: (parameters) => dispatch(searchRecipes(parameters)),
    addRecipeStore: (id, data)=> dispatch(addRecipeStore(id, data)),
    addRecipesStore: (json)=> dispatch(addRecipeStore(json))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeView);
