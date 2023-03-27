import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/home-screen/home-screen';

const MainStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="HOME_SCREEN">
      <MainStack.Screen component={HomeScreen} name="HOME_SCREEN" />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
