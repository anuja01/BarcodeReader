/* eslint-disable react/no-array-index-key */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { stackNavigation } from '../../route';

const Stack = createStackNavigator();

const Main = () => (
  <Stack.Navigator>
    {stackNavigation.map((item: any, i: any) => (
      <Stack.Screen
        key={i}
        name={item.name}
        component={item.component}
      />
    ))}

  </Stack.Navigator>
);

export default Main;
