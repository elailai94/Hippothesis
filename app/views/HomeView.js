/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, ListView, ScrollView, View } from 'react-native';
import {
  Button,
  Container,
  Content,
  Card,
  CardItem,
  Grid,
  Icon,
  List,
  ListItem,
  Row,
  Text
} from 'native-base';
import Spinner from 'react-native-spinkit';

import Images from '../constants/Images';
import RecipeCard from '../components/RecipeCard';
import { searchRecipes } from '../actions/RecipeSearchResultsActions';
import { suggestRecipes } from '../actions/RecipeSuggestionResultsActions';
import { selectRecipe } from '../actions/NavigationActions';

class HomeView extends Component {
  // Suggest recipes that fit the parameters
  suggestRecipes() {
    const parameters = {
      number: 6
    };

    this.props.suggestRecipes(parameters);
  }

  componentDidMount() {
    this.suggestRecipes();
  }

  goToRecipeView(id, recipe) {
    this.props.selectRecipe(id);
    this.props.navigation.navigate('recipe', {recipe: recipe});
  }

  renderInProgressView() {
    return (
      <Container style={styles.inProgressView}>
        <Spinner
          type="ThreeBounce"
          color={styles.inProgressSpinner.color}
        />
      </Container>
    );
  }

  renderSavedRecipes() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    return (
      <Container style={{flex: 1}}>
        <Text style={styles.title}>Saved Recipes</Text>
        <ListView
          dataSource={ds.cloneWithRows(this.props.recipesStore)}
          renderRow={(data) =>
            {
                return (
                  <Card style={styles.recipeCard}>
                    <CardItem cardBody style={styles.imageContainer} onPress={() => this.goToRecipeView(data.id, data)}>
                      <Image style={styles.image} source={{uri: data.image}} />
                    </CardItem>
                    <CardItem>
                      <Text ellipsizeMode="tail" numberOfLines={1}>{data.title}</Text>
                    </CardItem>
                  </Card>
                );            
              }
          }
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          enableEmptySections={true}
          contentContainerStyle={styles.contentContainer}
        />
      </Container>
    );
  }

  renderSuccessView() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    let content = <View></View>;

    if (Object.keys(this.props.recipesStore) !== null) {
      if(Object.keys(this.props.recipesStore).length > 0) {
        content = this.renderSavedRecipes();
      }
    }

    return (
      <Container style={{flex: 1}}>
      <Container style={{flex: 1}}>
        <Text style={styles.title}>Popular Recipes</Text>

        <ListView
          dataSource={ds.cloneWithRows(this.props.recipeSuggestionResults.resultsList)}
          renderRow={(data) =>
            {
                return (
                  <Card style={styles.recipeCard}>
                    <CardItem cardBody style={styles.imageContainer} onPress={() => this.goToRecipeView(data.id, data)}>
                      <Image style={styles.image} source={{uri: data.image}} />
                    </CardItem>
                    <CardItem>
                      <Text ellipsizeMode="tail" numberOfLines={1}>{data.title}</Text>
                    </CardItem>
                  </Card>
                );            
              }
          }
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          enableEmptySections={true}
          contentContainerStyle={styles.contentContainer}
        />
      </Container>
      {content}
      </Container>
    );
  }

  render() {
    let content = null;

    if (this.props.recipeSuggestionResults.status === 'in progress') {
      content = this.renderInProgressView();
    } else if (this.props.recipeSuggestionResults.status === 'success') {
      content = this.renderSuccessView();
    } else {
      content = this.renderSuccessView();
    }
/*   
    if (Object.keys(this.props.recipesStore) != null){
      if(Object.keys(this.props.recipesStore).length > 0) {
        content =
          <List
            dataArray={this.props.recipesStore}
            renderRow={(data) =>
              {
                console.log("Object keys", data);
                return (
                  <Card style={styles.card}>
                    <CardItem cardBody style={styles.imageContainer}  onPress={() => this.goToRecipeView(data.id)}>
                      <Image style={styles.image} source={{uri: data.image}} />
                    </CardItem>
                    <CardItem>
                      <Text>{data.title}</Text>
                    </CardItem>
                  </Card>
                );            
              }
            }
          />;
      }
    }
*/    
    
    return (
      <Container style={{flex: 1, backgroundColor: 'white'}}>
        <Image
          style={styles.headerImage}
          source={Images.backgrounds.cooking}
        >
          <Text style={styles.headerText}>Explore</Text>
        </Image>

        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        {content}
        </ScrollView>

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
  inProgressView: {
    alignSelf: 'center'
  },
  inProgressSpinner: {
    color: '#F2487A'
  },
  title:{
    fontWeight:'400',
    fontSize:20,
    color:'#333',
    margin:20,
    marginBottom:15
  },
  contentContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 0
  },
  recipeCard: {
    flex: 1,
    height: 160,
    width: 200
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    height: 150,
    width: 200,
    justifyContent: 'space-between',
    alignItems:'center'
  }
};

function mapStateToProps(state) {
  return {
    recipeSuggestionResults: state.recipeSuggestionResults,
    recipesStore: state.recipesStore
  };
}

function mapDispatchToProps(dispatch) {
  return {
    suggestRecipes: (parameters) => dispatch(suggestRecipes(parameters)),
    selectRecipe: (id) => dispatch(selectRecipe(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
