import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './home-screen.styles';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Hello World</Text>
    </SafeAreaView>
  );
}

export default HomeScreen;
