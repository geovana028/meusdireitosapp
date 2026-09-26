import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import BottomTabs1 from './Screens/BottomTabs1';
import BottomTabs2 from './Screens/BottomTabs2';
import BottomTabs3 from './Screens/BottomTabs3';

const Tab = createBottomTabNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Tab.Navigator
        initialRouteName="BottomTabs1"

        screenOptions={({ route }) => ({


          headerStyle: {
            backgroundColor: '#071f36',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: '#ffffff',

          tabBarStyle: {
            backgroundColor: '#111c2b',
            borderTopColor: '#111c2b',
          },

          tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'BottomTabs1') {

            o
              return (
                <MaterialCommunityIcons
                  name={focused ? 'scale-balance' : 'scale-balance'}
                  size={size + 2}
                  color={color}
                />
              );

            } else if (route.name === 'BottomTabs2') {

    
              return (
                <Ionicons
                  name={focused ? 'shield' : 'shield-outline'}
                  size={size}
                  color={color}
                />
              );

            } else if (route.name === 'BottomTabs3') {

              return (
                <Ionicons
                  name={focused ? 'person' : 'person-outline'}
                  size={size}
                  color={color}
                />
              );

            }

          },

          tabBarActiveTintColor: '#3b5780',

          tabBarInactiveTintColor: '#555555'

        })}
      >

        <Tab.Screen
          name="BottomTabs1"
          component={BottomTabs1}
          options={{
            title: '',
            headerShown: false
          }}
        />

        <Tab.Screen
          name="BottomTabs2"
          component={BottomTabs2}
          options={{
            title: '', 
            tabBarLabel: () => null 
          }}
        />

        <Tab.Screen
          name="BottomTabs3"
          component={BottomTabs3}
          options={{
            title: '',
          }}
        />

      </Tab.Navigator>

    </NavigationContainer>

  );

}