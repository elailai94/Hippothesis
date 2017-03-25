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

import { combineReducers } from 'redux';

import NavigationReducer from './NavigationReducer';
import RecipeSearchResultsReducer from './RecipeSearchResultsReducer';
import RecipesReducer from './RecipesReducer';
import IngredientListReducer from './IngredientListReducer';
import InventoryListReducer from './InventoryListReducer';

/*
 * Return the next state given the current state and an action to
 * handle
 */
const RootReducer = combineReducers({
  navigation: NavigationReducer,
  recipeSearchResults: RecipeSearchResultsReducer,
  recipes: RecipesReducer,
  inventoryList: InventoryListReducer,
  ingredients: IngredientListReducer,
});

export default RootReducer;
