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
import { Container, Content, Text, Item, Input, Button, Grid, Row, Col } from 'native-base';

import Images from '../constants/Images';
import IngredientSelector from './IngredientSelector';

export default class RecipeSearchView extends Component {

  render() {
    return (
      <Container style={{marginTop: 30, marginBottom: 50}}>
        <Content style={{margin: 15}}>
          <Text style={{fontSize: 24, textAlign: 'center', marginBottom: 20, marginTop: 20, }}
            >What ingredients do you have?
          </Text>
          <Item rounded>
            <Input style={{marginLeft: 10, marginRight: 10}}/>
          </Item>

          <View style={{marginTop: 25}}>
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
        <Button block style={{margin: 15}}><Text>Search</Text></Button>
      </Container>
    );
  }

}

// function mapStateToProps(state) {
//   return {
//     selectedTab: state.navigation.selectedTab
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     selectTab: (newTab) => dispatch(selectTab(newTab))
//   };
// }
 
// const VisibleNavigationBar = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(NavigationBar);

// export default VisibleNavigationBar;
