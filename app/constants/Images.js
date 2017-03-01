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

const Images = {
  icons: {
    home: {
    	active: require('../images/home-icon-active.png'),
      unactive: require('../images/home-icon-unactive.png')
    },
    search: {
      active: require('../images/search-icon-active.png'),
      unactive: require('../images/search-icon-unactive.png')
    },
    profile: {
      active: require('../images/profile-icon-active.png'),
      unactive: require('../images/profile-icon-unactive.png')
    },
  },
  food: {
    egg: require('../images/food/egg.png'),
    salmon: require('../images/food/fish.png'),
    rice: require('../images/food/rice.png'),
    pasta: require('../images/food/spaghetti.png'),
    steak: require('../images/food/steak.png'),
    chicken: require('../images/food/turkey.png'),
    pot: require('../images/food/pot.png')
  },
  backgrounds: {
    search: require('../images/search_background.jpg')
  }
};

export default Images;
 