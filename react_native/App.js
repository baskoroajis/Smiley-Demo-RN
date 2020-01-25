/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Image} from 'react-native';
import ProductListPage  from './src/ProductListPage'
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';



const MainTabs = createBottomTabNavigator(
  {
    Home: {
      screen: ProductListPage,
      navigationOptions: {
        tabBarLabel: 'Products',
      },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        console.log('route name is ', routeName)
        if (routeName === 'Home') {
          return (
            <Image
              source={
                require('./src/assets/ic_bag.png')
              }
              style={{
                width: 20,
                height: 20,
                borderRadius: 40 / 2,
              }}
            />
          );
        } 
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF5811',
      inactiveTintColor: '#697586',
      tabStyle: {
        paddingVertical: 5,
      },
    },
  }
);

const AppSwitchNavigator = createSwitchNavigator(
  {
    App: MainTabs,
  },
  {
    initialRouteName: 'App',
  }
);
export default createAppContainer(AppSwitchNavigator);
