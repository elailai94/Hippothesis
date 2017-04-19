/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Content,
  Text,
} from 'native-base';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { connect } from 'react-redux';

import Images from '../constants/Images';
import DietaryPreferencesListItem from '../components/DietaryPreferencesListItem';

export default class DietaryPreferencesView extends Component {
  goToView(routeName) {
    this.props.navigation.navigate(routeName);
  }

  renderHeader() {
    return (
      <Image
        style={styles.headerImage}
        source={Images.backgrounds.profile}
      >
        <Text style={styles.header}>Manage</Text>
      </Image>
    );
  }

  renderContent() {
    const dietaryPreferences = {
      Allergies: 'allergyPreferences',
      Cuisines: 'cuisinePreferences',
      Diets: 'dietPreferences',
      'Disliked Ingredients': 'dislikedIngredientPreferences',
    };

    return (
      <Content>
        {Object.keys(dietaryPreferences).map((dietaryPreference) => {
          const routeName = dietaryPreferences[dietaryPreference];

          return (
            <DietaryPreferencesListItem
              key={dietaryPreference}
              type="navigation"
              title={dietaryPreference}
              onPress={() => this.goToView(routeName)}
            />
          );
        })}
      </Content>
    );
  }

  render() {
    return (
      <Container style={styles.viewContainer}>
        {this.renderHeader()}
        {this.renderContent()}
      </Container>
    );
  }

/*
  render() {
    return (
      <Container>
        <ParallaxScrollView
          backgroundColor='white'
          parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
          stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
          renderBackground={() => (
            <View key="bg">
                <Image
                  style={{width: window.width, height: PARALLAX_HEADER_HEIGHT}}
                  source={Images.backgrounds.profile}/>
            </View>
          )}
          renderForeground={() => (
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={styles.header}>Manage</Text>
            </View>
          )}
          renderStickyHeader={() => (
            <Header style={{height: 70}}>
              <Body>
                <Title>Manage</Title>
              </Body>
            </Header>
          )}
        >
        </ParallaxScrollView>
      </Container>
    );
  }
*/
}

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 175;
const STICKY_HEADER_HEIGHT = 70;

const styles = {
  viewContainer: {
    backgroundColor: 'white',
  },
  headerImage: {
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
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
};
