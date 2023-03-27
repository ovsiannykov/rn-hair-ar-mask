import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Hello World</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
