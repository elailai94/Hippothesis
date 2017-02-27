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
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import Store from './store/Store';
import { addRecipe } from './actions/RecipesActions';
import { searchRecipes } from './actions/RecipeSearchResultsActions';
import NavigationBar from './components/navigationbar/NavigationBar';

import { normalize, schema } from  'normalizr';
import omit from 'object.omit';

export default class Recipezy extends Component {
  render() {

/*
const data = [
    {
      "vegetarian": false,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": true,
      "sustainable": false,
      "weightWatcherSmartPoints": 15,
      "gaps": "no",
      "lowFodmap": false,
      "ketogenic": false,
      "whole30": false,
      "servings": 4,
      "sourceUrl": "http://www.howsweeteats.com/2013/08/roasted-jalapeno-cheddar-turkey-burgers-with-bbq-aioli/",
      "spoonacularSourceUrl": "https://spoonacular.com/roasted-jalapeo-cheddar-turkey-burgers-with-bbq-aioli-524571",
      "aggregateLikes": 2173,
      "spoonacularScore": 93,
      "healthScore": 25,
      "creditText": "How Sweet Eats",
      "sourceName": "How Sweet Eats",
      "id": 524571,
      "title": "Roasted Jalapeño Cheddar Turkey Burgers with BBQ Aioli",
      "readyInMinutes": 45,
      "image": "https://spoonacular.com/recipeImages/Roasted-Jalapeo-Cheddar-Turkey-Burgers-with-BBQ-Aioli-524571.jpg",
      "imageType": "jpg",
      "cuisines": [
        "american"
      ],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "pricePerServing": 321.08,
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Preheat the broiler in your oven.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 405914,
                  "name": "broiler",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Place peppers on a baking sheet and set them directly under the broiler, turning them every minute or so until the skin is completely black and charred.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404727,
                  "name": "baking sheet",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-sheet.jpg"
                },
                {
                  "id": 405914,
                  "name": "broiler",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Remove the peppers and immediately place them in a large ziplock bag.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Let sit for 20 minutes. After 20 minutes, take the peppers out and rub the skins off. Slice off the tops and bottoms, then cut the peppers down the middle. remove the seeds, and chop the peppers. WASH YOUR HANDS!!",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 5,
              "step": "Add the turkey, peppers, garlic, green onions, cheddar, egg, panko, salt, pepper and paprika to a large bowl. Gently mixed until just combined and form into 4 equal sized patties.",
              "ingredients": [
                {
                  "id": 11291,
                  "name": "green onions",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/green-onion.jpg"
                },
                {
                  "id": 1009,
                  "name": "cheddar cheese",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.jpg"
                },
                {
                  "id": 2028,
                  "name": "paprika",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/paprika.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.jpg"
                },
                {
                  "id": 1002030,
                  "name": "pepper",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/pepper.jpg"
                },
                {
                  "id": 10018079,
                  "name": "panko",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/panko.jpg"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/salt.jpg"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/egg.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 6,
              "step": "Heat a large skillet over medium-high heat and add olive oil.",
              "ingredients": [
                {
                  "id": 4053,
                  "name": "olive oil",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 7,
              "step": "Add the patties and cook until brown on both sides, about 5 minutes per side. Reduce the heat to low, top each burger with the cheddar and cover.",
              "ingredients": [
                {
                  "id": 1009,
                  "name": "cheddar cheese",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 8,
              "step": "Let sit for 1 minute until the cheese melted.Assemble the burgers with the buns, the aioli, tomato slices and lettuce.",
              "ingredients": [
                {
                  "id": 10511529,
                  "name": "tomato slices",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/tomato"
                },
                {
                  "id": 1041009,
                  "name": "cheese",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/cheddar-cheese.jpg"
                },
                {
                  "id": 93758,
                  "name": "aioli",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/aioli.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 9,
              "step": "Serve!BBQ aioli",
              "ingredients": [
                {
                  "id": 93758,
                  "name": "aioli",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/aioli.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 10,
              "step": "Combine mayo, BBQ sauce, garlic, paprika and cumin in a food processor and blend until mixed. With the processor on, steam in the olive oil until the mixture comes together. You can store this in the fridge for about a week.",
              "ingredients": [
                {
                  "id": 6150,
                  "name": "barbecue sauce",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/barbecue-sauce.jpg"
                },
                {
                  "id": 4053,
                  "name": "olive oil",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg"
                },
                {
                  "id": 2028,
                  "name": "paprika",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/paprika.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/garlic.jpg"
                },
                {
                  "id": 1002014,
                  "name": "cumin",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/ground-cumin.jpg"
                },
                {
                  "id": 4025,
                  "name": "mayonnaise",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/mayonnaise.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404771,
                  "name": "food processor",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/food-processor.png"
                }
              ]
            }
          ]
        }
      ],
      "calories": 550,
      "protein": "38g",
      "fat": "30g",
      "carbs": "33g"
    },
    {
      "vegetarian": false,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": true,
      "sustainable": false,
      "weightWatcherSmartPoints": 21,
      "gaps": "no",
      "lowFodmap": false,
      "ketogenic": false,
      "whole30": false,
      "servings": 4,
      "sourceUrl": "http://www.howsweeteats.com/2013/04/cheeseburgers-with-sauteed-mushrooms-arugula-and-dijon-aioli/",
      "spoonacularSourceUrl": "https://spoonacular.com/burgers-with-sauted-mushrooms-arugula-and-dijon-aioli-524823",
      "aggregateLikes": 5040,
      "spoonacularScore": 95,
      "healthScore": 28,
      "creditText": "How Sweet Eats",
      "sourceName": "How Sweet Eats",
      "id": 524823,
      "title": "Burgers with Sautéed Mushrooms, Arugula and Dijon Aioli",
      "readyInMinutes": 45,
      "image": "https://spoonacular.com/recipeImages/Burgers-with-Sauted-Mushrooms--Arugula-and-Dijon-Aioli-524823.jpg",
      "imageType": "jpg",
      "cuisines": [
        "american"
      ],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "pricePerServing": 366.45,
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Add ground beef to a large bowl and season with salt and pepper.",
              "ingredients": [
                {
                  "id": 2047,
                  "name": "salt and pepper",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/salt-and-pepper.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Add in 1 tablespoon of olive oil and mix it into the beef, then let sit at room temperature for about 30 minutes.While the beef is resting, add mushrooms to a large skillet over low heat.",
              "ingredients": [
                {
                  "id": 4053,
                  "name": "olive oil",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 3,
              "step": "Add 1 tablespoon each of olive oil and butter, then add in mushrooms and stir to coat. Cover and cook for 10-15 minutes until softened and juicy. Once soft, add a sprinkle of salt and pepper, turn off heat and keep covered. While mushrooms are cooking, whisk together dijon mustard, egg yolk and lemon juice in a large bowl until combined. Slowly stream in olive oil while continuously whisking until the mixture emulsifies and comes together completely.",
              "ingredients": [
                {
                  "id": 2047,
                  "name": "salt and pepper",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/salt-and-pepper.jpg"
                },
                {
                  "id": 1002046,
                  "name": "dijon mustard",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/mustard.jpg"
                },
                {
                  "id": 9152,
                  "name": "lemon juice",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/lemon-juice.jpg"
                },
                {
                  "id": 4053,
                  "name": "olive oil",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg"
                },
                {
                  "id": 1125,
                  "name": "egg yolk",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/egg-yolk.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404661,
                  "name": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                },
                {
                  "id": 404783,
                  "name": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 4,
              "step": "Whisk in whole grain mustard and horseradish, then taste and season with a little salt and pepper as desired. Set aside.Toss the fresh arugula with the lemon juice and 1/2 tablespoon of olive oil. Sprinkle with a little salt and pepper.",
              "ingredients": [
                {
                  "id": 1012046,
                  "name": "whole grain mustard",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/mustard.jpg"
                },
                {
                  "id": 2047,
                  "name": "salt and pepper",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/salt-and-pepper.jpg"
                },
                {
                  "id": 1002055,
                  "name": "horseradish",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/horseradish.jpg"
                },
                {
                  "id": 9152,
                  "name": "lemon juice",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/lemon-juice.jpg"
                },
                {
                  "id": 4053,
                  "name": "olive oil",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg"
                },
                {
                  "id": 11959,
                  "name": "arugula",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/arugula-or-rocket-salad.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404661,
                  "name": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                }
              ]
            },
            {
              "number": 5,
              "step": "Heat a large skillet over medium-high heat and add 1 tablespoon of butter. Form the beef into 4 equal patties, then add to the skillet and cook until they reach their desired doneness. For medium-well, I cook mine about 5 minutes per side, but it will depend on how thick you like your burgers. In the last 1-2 minutes of cooking, top each burger with a few slices of both cheeses.To assemble burgers, spread a bit of mustard aioli on the bottom of each bun. Top with the burger, then some mushrooms, some aioli and a handful of arugula.",
              "ingredients": [
                {
                  "id": 11959,
                  "name": "arugula",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/arugula-or-rocket-salad.jpg"
                },
                {
                  "id": 2046,
                  "name": "mustard",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/mustard.jpg"
                },
                {
                  "id": 93758,
                  "name": "aioli",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/aioli.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            }
          ]
        }
      ],
      "calories": 662,
      "protein": "47g",
      "fat": "41g",
      "carbs": "27g"
    }
  ];

const ingredientSchema = new schema.Entity('ingredients', {}, {
  processStrategy: (entity) => omit(entity, 'image')
});
const ingredientListSchema = [ ingredientSchema ];

const stepSchema = new schema.Entity(
  'steps',
  { ingredients: ingredientListSchema },
  {
    idAttribute: 'number',
    processStrategy: (entity) => omit(entity, 'equipment')
  }
);
const stepListSchema = [ stepSchema ];

const analyzedInstructionSchema = new schema.Entity(
  'analyzedInstructions',
  { steps: stepListSchema },
  {
    processStrategy: (entity) => omit(entity, 'name')
  }
);
const analyzedInstructionListSchema = [ analyzedInstructionSchema ];

const recipeSchema = new schema.Entity(
  'recipes',
  { analyzedInstructions: analyzedInstructionListSchema }  
);
const recipeListSchema = [ recipeSchema ];

const normalizedData = normalize(data[0], recipeSchema);
console.log(normalizedData);
*/
    
    console.log(Store.getState());

    let unsubscribe = Store.subscribe(() =>
      {console.log(Store.getState());}
    );

    Store.dispatch(addRecipe(685, {
      image: 'http://spoonacular...',
      aggregateLikes: 227,
      title: 'Ranch Burgers',
      instructions: ['Step 1', 'Step 2']
    }));

    const parameters = {
      addRecipeInformation: false,
      cuisine: 'american',
      diet: 'vegetarian',
      excludeIngredients: null,
      fillIngredients: false,
      includeIngredients: null,
      instructionsRequired: true,
      intolerances: 'peanut, shellfish',
      limitLicense: false,
      maxCalories: 1500,
      maxCarbs: 100,
      maxFat: 100,
      maxProtein: 100,
      minCalories: 150,
      minCarbs: 5,
      minFat: 5,
      minProtein: 5,
      number: 5,
      offset: 0,
      query: 'burger',
      ranking: 1,
      type: 'main course'
    };

    //Store.dispatch(searchRecipes(parameters));

    //unsubscribe();

    return (
      <Provider store={Store}>
        <NavigationBar />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
