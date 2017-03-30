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
import { Image, ListView } from 'react-native';
import {
  Container,
  Card,
  CardItem,
  Icon,
  Text,
  Button,
  List,
  ListItem
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
      number: 5
    };

    this.props.suggestRecipes(parameters).catch((error) => console.log(error));
  }

  componentDidMount() {
    this.suggestRecipes();
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

  renderSuccessView() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    return (
      <Container style={styles.container2}>
        <Text style={styles.title}>Popular Recipes</Text>
        <ListView
          dataSource={ds.cloneWithRows(this.props.recipeSuggestionResults.resultsList)}
          renderRow={(data) =>
            {
                return (
                  <Card style={styles.recipeCard}>
                    <CardItem cardBody onPress={() => this.goToRecipeView(data.id)}>
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
        />
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
      <Container>
        <Image
          style={styles.headerImage}
          source={Images.backgrounds.cooking}
        >
          <Text style={styles.headerText}>Explore</Text>
        </Image>

        {content}

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
  container2: {
    backgroundColor: '#fff',
   // borderBottomWidth: 1,
    borderBottomColor:'#d3d3d3'
  },
  title:{
    fontWeight:'400',
    fontSize:20,
    color:'#333',
    margin:20,
    marginBottom:15
  },
  recipeCard: {
    height: 150,
    width: 200
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    flex: 1,
    resizeMode: 'stretch',
    height: 150,
    width: 200,
    margin:5,
    marginBottom:30,
    justifyContent: 'space-between',
    alignItems:'center'
  }
};

function mapStateToProps(state) {
  return {
    recipeSuggestionResults: state.recipeSuggestionResults
  };
}

function mapDispatchToProps(dispatch) {
  return {
    suggestRecipes: (parameters) => dispatch(suggestRecipes(parameters))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
