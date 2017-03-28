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
import { View, ScrollView, Image, StatusBar, TextInput} from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Text,
  Item,
  Input,
  Thumbnail,
  Icon,
  InputGroup,
  Left,
  Right,
  Button,
  Grid,
  Row,
  Col,
  List,
  ListItem,
  Picker
} from 'native-base';

import Images from '../constants/Images';
import IngredientSelector from '../components/IngredientSelector';
import { searchRecipes } from '../actions/RecipeSearchResultsActions'; //TODO: Remove 
import { addIngredient, removeIngredient, editIngredient } from '../actions/IngredientListActions'; //TODO: Remove 
import { updateAllergies,  updateCuisines,  updateDiets,  updateNutrition,  updateTypes } from '../actions/FilterActions';


class ProfileView extends Component {
  
  // Set up navigation options for the app navigator
  static navigationOptions = {
    tabBar: {
      label: 'Profile',
      icon: ({ focused, tintColor }) => {
        if (focused) {
          return <Icon name='ios-person' />;
        } else {
          return <Icon name='ios-person-outline' />;
        }
      }
    }
  }

  constructor(props) {
      super(props);

      console.log("ALLERGIES: ", this.props.allergies);
      console.log("cuisines: ", this.props.cuisines);
      console.log("diets: ", this.props.diets);
      console.log("nutrition: ", this.props.nutrition);
      console.log("types: ", this.props.types);

      this.state = {
          selectedItem: undefined,
          selected1: this.props.allergies,
          selected2: this.props.cuisines,
          selected3: this.props.diets,
          selected4: this.props.nutrition,
          selected5: this.props.types,
          results: {
              items: []
          }
      }
  }

  onAllergiesValueChange (value: string) {
      this.setState({
          selected1 : value
      });

      console.log("We are updatingAllergies value: ", value);

      this.props.updateAllergies(value);
  }

  onCuisineValueChange (value: string) {
      this.setState({
          selected2 : value
      });

      this.props.updateCuisines(value);
  }

  onDietValueChange (value: string) {
      this.setState({
          selected3 : value
      });    

      this.props.updateDiets(value);
  }

  onNutritionValueChange (value: string) {
      this.setState({
          selected4 : value
      });    

      this.props.updateNutrition(value);
  }

  onTypeValueChange (value: string) {
      this.setState({
          selected5 : value
      });    

      this.props.updateTypes(value);
  }

  update() {
    this.props.navigation.goBack();
  }

  newIngredient() {
    this.props.addIngredient("");
  }

  updateIngredient(id, name) {
    this.props.editIngredient(id, name);
  }

  deleteIngredient(id) {
    this.props.removeIngredient(id);
  }

  render() {

    let emptyState =
      <ScrollView style={styles.emptyState} scrollEnabled={false}>
        <Image style={styles.emptyStateImg} source={Images.food.pot}/>
        <Text style={styles.emptyStateText}>What Filters do you wanna apply?</Text>
        <Text style={styles.emptyStateText}>Add some tasty ingredients!</Text>
      </ScrollView>;

    let ingredientList =
      <List
        style={{marginTop: -50, zIndex: 0}}
        dataArray={this.props.ingredients}
        renderRow={ (data) =>
          <ListItem style={{margin: 0, padding: 4, paddingLeft: 10, paddingRight: 10}}>
            <Item style={styles.ingredientInput}>
              <Input placeholder="New ingredient" defaultValue={data.name}
                onChangeText={(text) => this.updateIngredient(data.id, text)}
              />
              <Button transparent style={styles.trashButton} onPress={() => this.deleteIngredient(data.id)}>
                <Icon style={styles.trashIcon} name="trash"/>
              </Button>
            </Item>
          </ListItem>}
      />

    let content = emptyState;
    console.log(this.props.ingredients);
    if (this.props.ingredients.length > 0) {
      content = ingredientList
    }

    var dummyVal = '';

    return (
      <Container>

        <View>
          <StatusBar barStyle="light-content"/>
          <Image style={styles.background} source={Images.backgrounds.filter}>
            <Text style={styles.header}>Profile</Text>
          </Image>
        </View>

        <View style={{height:10}} />

        <Content>

          <Image style={styles.pickerHeader} source={Images.backgrounds.allergies}>
            <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}> Allergies/Intolerances </Text>        
            <Picker
              iosHeader="Allergies or Intolerances"
              styles={styles.picker}
              mode="dropdown"
              color="white"
              selectedValue={this.state.selected1}
              onValueChange={this.onAllergiesValueChange.bind(this)}
              iconColor="white">
              <Item label="None" value="None" />
              <Item label="Dairy" value="Dairy" />
              <Item label="Egg" value="Egg" />
              <Item label="Gluten" value="Gluten" />
              <Item label="Peanut" value="Peanut" />
              <Item label="Sesame" value="Sesame" />
              <Item label="Seafood" value="Seafood" />
              <Item label="Shellfish" value="Shellfish" />
              <Item label="Soy" value="Soy" />
              <Item label="Sulfite" value="Sulfite" />
              <Item label="Tree Nut" value="Tree Nut" />
              <Item label="Wheat" value="Wheat" />
            </Picker>
          </Image>

          <Image style={styles.pickerHeader} source={Images.backgrounds.cuisines}>
            <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>Cuisines</Text>       
            <Picker
              iosHeader="Cuisines"
              mode="dropdown"
              selectedValue={this.state.selected2}
              onValueChange={this.onCuisineValueChange.bind(this)}>
              <Item label="None" value="None" />
              <Item label="American" value="American" />
              <Item label="Chinese" value="Chinese" />
              <Item label="Japanese" value="Japanese" />
              <Item label="Korean" value="Korean" />
              <Item label="Vietnamese" value="Vietnamese" />
              <Item label="Thai" value="Thai" />
              <Item label="Indian" value="Indian" />
              <Item label="French" value="French" />
              <Item label="Italian" value="Italian" />
              <Item label="Mexican" value="Mexican" />
              <Item label="Middle Eastern" value="Middle Eastern" />
            </Picker>
          </Image>
          
          <Image style={styles.pickerHeader} source={Images.backgrounds.diets}>
            <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>Diets</Text>
            <Picker
              iosHeader="Diets"
              mode="dropdown"
              selectedValue={this.state.selected3}
              onValueChange={this.onDietValueChange.bind(this)}>
              <Item label="None" value="None" />
              <Item label="Vegetarian" value="Vegetarian" />
              <Item label="Vegan" value="Vegan" />
              <Item label="Paleo" value="Paleo" />
              <Item label="Primal" value="Primal" />
              <Item label="Pescetarian" value="Pescetarian" />
              <Item label="Lacto Vegetarian" value="Lacto Vegetarian" />
              <Item label="Ovo Vegetarian" value="Ovo Vegetarian" />
            </Picker>
          </Image>

          <Image style={styles.pickerHeader} source={Images.backgrounds.nutritions}>
            <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>Max Calories: </Text>
            <Picker
              iosHeader="Max Calories"
              mode="dropdown"
              selectedValue={this.state.selected4}
              onValueChange={this.onNutritionValueChange.bind(this)}>
              <Item label="None" value="None" />
              <Item label="100 Calories" value="100 Calories" />
              <Item label="500 Calories" value="500 Calories" />
              <Item label="1500 Calories" value="1500 Calories" />
              <Item label="2500 Calories" value="2500 Calories" />
            </Picker>
          </Image>

          <Image style={styles.pickerHeader} source={Images.backgrounds.types}>
            <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>Types: </Text>
            <Picker
              iosHeader="Types"
              mode="dropdown"
              selectedValue={this.state.selected5}
              onValueChange={this.onTypeValueChange.bind(this)}>
              <Item label="None" value="None" />
              <Item label="Main Course" value="Main Course" />
              <Item label="Side Dish" value="Side Dish" />
              <Item label="Dessert" value="Dessert" />
              <Item label="Appetizer" value="Appetizer" />
              <Item label="Salad" value="Salad" />
              <Item label="Bread" value="Bread" />
              <Item label="Breakfast" value="Breakfast" />
              <Item label="Soup" value="Soup" />
              <Item label="Beverage" value="Beverage" />
              <Item label="Sauce" value="Sauce" />
              <Item label="Drink" value="Drink" />
              <Item label="Lunch" value="Lunch" />
              <Item label="Dinner" value="Dinner" />          
            </Picker>
          </Image>
        </Content>

        <Button full style={styles.updateButton} onPress={() => this.update()}>
          <Text>Back</Text>
        </Button>
      </Container>
    );
  }

}

const styles = {
  background: {
    height: 175,
    width: null,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  picker: {
    color: 'white'
  },
  pickerHeader: {
    height: 75,
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
  headerButton: {
    alignSelf: 'flex-end',
    top: -25,
    marginRight: 40,
    height: 50,
    width: 50,
    padding: 0,
    borderRadius: 25,
    justifyContent: 'center',
    backgroundColor: '#48abf2',
    zIndex: 10,
  },
  headerButtonIcon: {
    fontSize: 40,
    backgroundColor: 'transparent',
  },
  updateButton: {
    backgroundColor: '#48abf2'
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
  }
}

function mapStateToProps(state) {
  return {
    ingredients: state.ingredients,
    recipeSearchResults: state.recipeSearchResults,
    recipes: state.recipes,
    allergies: state.filters.allergies,
    cuisines: state.filters.cuisines,
    diets: state.filters.diets,
    nutrition: state.filters.nutrition,
    types: state.filters.types
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addIngredient: (name) => dispatch(addIngredient(name)),
    editIngredient: (id, name) => dispatch(editIngredient(id, name)),
    removeIngredient: (id) => dispatch(removeIngredient(id)),
    searchRecipes: (parameters) => dispatch(searchRecipes(parameters)),
    updateAllergies: (name) => dispatch(updateAllergies(name)),
    updateCuisines: (name) => dispatch(updateCuisines(name)),
    updateDiets: (name) => dispatch(updateDiets(name)),
    updateNutrition: (name) => dispatch(updateNutrition(name)),
    updateTypes: (name) => dispatch(updateTypes(name))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileView);
