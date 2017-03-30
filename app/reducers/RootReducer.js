/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { combineReducers } from 'redux';

import NavigationReducer from './NavigationReducer';
import RecipeSearchResultsReducer from './RecipeSearchResultsReducer';
import RecipesReducer from './RecipesReducer';
import RecipeSuggestionResultsReducer from './RecipeSuggestionResultsReducer';
import RecipeSearchIngredientsListReducer from './RecipeSearchIngredientsListReducer';
import ShoppingListReducer from './ShoppingListReducer';
import InventoryListReducer from './InventoryListReducer';
import FilterReducer from './FilterReducer';
import RecipesStoreReducer from './RecipesStoreReducer';

// Root reducer for Recipezy
const RootReducer = combineReducers({
  navigation: NavigationReducer,
  recipeSuggestionResults: RecipeSuggestionResultsReducer,
  recipeSearchResults: RecipeSearchResultsReducer,
  recipeSearchResultsList: RecipeSearchResultsReducer,
  recipes: RecipesReducer,
  recipeSearchIngredientsList: RecipeSearchIngredientsListReducer,
  shoppingList: ShoppingListReducer,
  inventoryList: InventoryListReducer,
  filters: FilterReducer,
  recipesStore: RecipesStoreReducer
});

export default RootReducer;
