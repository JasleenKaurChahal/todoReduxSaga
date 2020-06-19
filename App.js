/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import Todo from './src/ToDo/index';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './redux/store';

export const reduxStore = configureStore().store;

console.disableYellowBox = true;

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <PersistGate loading={null} persistor={configureStore().persistor}>
          <SafeAreaView style={styles.container}>
            <Todo />
          </SafeAreaView>
        </PersistGate>
      </ReduxProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
