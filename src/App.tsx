/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tabNavigation } from './route';
// bind the context
import { ContextProvider } from './context';
import { Provider } from 'react-redux';
import store from './redux/store';


const BottomTabs = createBottomTabNavigator();

const AppTabs = () => (
  <BottomTabs.Navigator
    initialRouteName="Landing"
    tabBarOptions={{
      activeTintColor: '#e91e63',
    }}
  >
    {tabNavigation.map((item, i) => (
      <BottomTabs.Screen
        key={i}
        name={item.name}
        component={item.component}
        options={item.options}
      />
    ))}

  </BottomTabs.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Provider store={store}>
      <ContextProvider>
        {AppTabs()}
      </ContextProvider>
    </Provider>
  </NavigationContainer>
);

export default App;
