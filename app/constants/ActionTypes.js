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

export const ActionTypes = {
  shoppingList: {
    ADD_INGREDIENT: 'ADD_INGREDIENT_TO_SHOPPING_LIST',
    REMOVE_INGREDIENT: 'REMOVE_INGREDIENT_FROM_SHOPPING_LIST',
    EDIT_INGREDIENT: 'EDIT_INGREDIENT_IN_SHOPPING_LIST',
    BOUGHT_INGREDIENT: 'BOUGHT_INGREDIENT_IN_SHOPPING_LIST'
  },
  inventoryList: {
    ADD_INGREDIENT: 'ADD_INGREDIENT_TO_INVENTORY_LIST',
    REMOVE_INGREDIENT: 'REMOVE_INGREDIENT_FROM_INVENTORY_LIST',
    EDIT_INGREDIENT:'EDIT_INGREDIENT_IN_INVENTORY_LIST',
    USED_INGREDIENT: 'USED_INGREDIENT_IN_INVENTORY_LIST'
  }
};

export default ActionTypes;
