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
import { } from 'react-native';
import { connect } from 'react-redux';
import { Container } from 'native-base';

import RecipeSearchView from './RecipeSearchView';
import RecipeSearchResultView from './RecipeSearchResultView';

class RecipeSearchContainer extends Component {

  render() {
    let content = <div/>;
    console.log(this.props);
    if (this.props.searchView == "search") {
      content = <RecipeSearchView/>
    } else if (this.props.searchView == "results") {
      content = <RecipeSearchResultView/>
    }

    return content;
  }
}

function mapStateToProps(state) {
  return {
    searchView: state.navigation.searchView
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeSearchContainer);