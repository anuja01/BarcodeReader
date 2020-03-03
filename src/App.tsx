/* eslint-disable react/jsx-filename-extension */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Scanner from './modules/Scanner';
import Landing from './modules/Landing';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Landing"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Landing"
        component={Landing}
        options={{
          tabBarLabel: 'Landing',
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={Scanner}
        options={{
          tabBarLabel: 'Scanner',
        }}
      />
    </Tab.Navigator>
  );
}
const App = () => (
  <NavigationContainer>
    {MyTabs()}
  </NavigationContainer>
);

export default App;
