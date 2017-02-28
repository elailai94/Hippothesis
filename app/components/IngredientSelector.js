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
import { connect } from 'react-redux';
import { Image, View } from 'react-native';
import { Card, CardItem, Text, Thumbnail, Button } from 'native-base';

import { addIngredient, removeIngredient, editIngredient } from '../actions/IngredientListActions';

class IngredientSelector extends Component {

  constructor(props) {
    super(props);
    this.originalProps = props;
    console.log("originalProps", this.originalProps)
  }

  clickIngredient() {
    this.props.addIngredient(this.originalProps.name);
    console.log("click ingredient: ", this.originalProps);
    console.log("this.props.ingredients: ", this.props.ingredients);
  }

  render() {
    return (
      <Card>
        <CardItem cardBody button style={{justifyContent: 'center', alignItems: 'center'}} onPress={ () => this.clickIngredient() }>
          <View><Thumbnail square style={{marginTop: 10}} source={this.props.image}/></View>
          <View><Text>{this.props.name}</Text></View>
        </CardItem>
      </Card>
    );
  }

}

function mapStateToProps(state) {
  return {
    ingredients: state.ingredients
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addIngredient: (name) => dispatch(addIngredient(name))
  };
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientSelector);