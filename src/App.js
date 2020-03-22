/**
 * Expense tracker mobile App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { rootStack } from './navigation/navigator';

const AppContainer = createAppContainer(rootStack);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
