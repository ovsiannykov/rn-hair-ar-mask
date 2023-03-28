import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

import styles from './home-screen.styles';

function HomeScreen() {
  const navigation = useNavigation();
  const linkToCamera = () => navigation.navigate('CAMERA_SCREEN');

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Hello World</Text>
      <TouchableOpacity onPress={linkToCamera} style={styles.camera_btn}>
        <Text style={styles.camera_title}>Open Camera</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreen;
