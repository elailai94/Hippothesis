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
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Text, Item, Input, InputGroup, Button, Grid, Row, Col } from 'native-base';

import Images from '../constants/Images';
import IngredientSelector from './IngredientSelector';

import { searchRecipes } from '../actions/RecipeSearchResultsActions';

class RecipeSearchView extends Component {

  constructor(props) {
    super(props);
    console.log("props", props);
  }

  search() {
    console.log("TESTEST", this);
    this.props.searchRecipes({
      limitLicense: false,
      number: 5,
      offset: 0,
      includeIngredients: "chicken, rice"
    }).then(() => {
      console.log("results = ", this.props.recipes);
    })
  }

  render() {
    return (
      <Container style={{marginTop: 30, marginBottom: 50}}>
        <Content style={{margin: 15}}>
          <Text style={{fontSize: 24, textAlign: 'center', marginBottom: 20, marginTop: 20, }}
            >What ingredients do you have?
          </Text>
          <View>
            <Item regular>
                <Input style={{marginLeft: 10, marginRight: 10}}/>
            </Item>
            <Button><Text>+</Text></Button>
          </View>

          <View style={{marginTop: 15}}>
            <Grid>
              <Row>
                <Col>
                  <IngredientSelector name="Chicken" image={Images.food.chicken} />
                </Col>
                <Col>
                  <IngredientSelector name="Rice" image={Images.food.rice} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <IngredientSelector name="Pasta" image={Images.food.pasta}/>
                </Col>
                <Col>
                  <IngredientSelector name="Steak" image={Images.food.steak}/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <IngredientSelector name="Salmon" image={Images.food.salmon}/>
                </Col>
                <Col>
                  <IngredientSelector name="Eggs" image={Images.food.egg}/>
                </Col>
              </Row>
            </Grid>
          </View>

        </Content>
        <Button block style={{margin: 15, marginTop: 0}} onPress={() => this.search()}><Text>Search</Text></Button>
      </Container>
    );
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
    searchRecipes: (parameters) => dispatch(searchRecipes(parameters))
  };
}
 
 
const thing = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeSearchView);

export default thing;
