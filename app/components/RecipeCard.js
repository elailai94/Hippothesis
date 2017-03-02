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
import { Image, TouchableHighLight } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem, Text } from 'native-base';
import { setSearchView, selectRecipe } from '../actions/NavigationActions';

import Images from '../constants/Images';

class RecipeCard extends Component {
  
  goToRecipeView() {
    console.log("This.props");
    console.log(this.props.id);
    
    this.props.setSelectedRecipe(this.props.id);
    this.props.setSearchView('recipe');
  
  }



  render() {

    return (
        <Card style={styles.card}>
          <CardItem cardBody style={styles.imageContainer} onPress={() => this.goToRecipeView()}>
            <Image style={styles.image} source={{uri: this.props.image}} />
          </CardItem>
          <CardItem>
            <Text>{this.props.title}</Text>
          </CardItem>
        </Card>
    );
  }

}

const styles = {
  imageContainer: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    flex: 1,
    height: 120
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
    setSelectedRecipe: (id) => dispatch(selectRecipe(id)),
    setSearchView: (name) => dispatch(setSearchView(name))
  };
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeCard);