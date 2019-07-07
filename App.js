import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/';
import { AppStack } from '$navigator/AppStack';

function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <AppStack />
      </Provider>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',

    backgroundColor: '#000',
    justifyContent: 'center'
  }
});
