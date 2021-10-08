import React from 'react';
import Peliculas from '../screens/Peliculas'; 
import Series from '../screens/Series'; 
import Proximamente from '../screens/Proximos'; 
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const Tab=createBottomTabNavigator(); 
export default function Navigation(){ 
    return( 
        <Tab.Navigator screenOptions={{
          headerStyle:{backgroundColor:'#D62422', borderTopEndRadius:40}, headerTitleStyle:{fontWeight:'bold'},
          tabBarActiveTintColor: 'red',
          tabBarActiveBackgroundColor: "black",
          tabBarInactiveTintColor: "#FFF",
          tabBarInactiveBackgroundColor: "#D62422"
          
        }}> 
            <Tab.Screen  name="Peliculas" component={Peliculas} options={{tabBarLabel:"Peliculas", tabBarStyle:{}, tabBarIcon: ({ color,size }) => (
          <Icon name="television-play" size={size+10} color={color} />
        ) }}  /> 
            <Tab.Screen name="Series" component={Series} options={{ tabBarLabel:"Series", tabBarIcon: ({ color,size }) => (
          <Icon name="animation-play" size={size+10} color={color} />
        ) }}  />
         <Tab.Screen name="Proximamente" component={Proximamente} options={{ tabBarLabel:"Proximamente", tabBarIcon: ({ color,size }) => (
          <Icon name="clipboard-text-play" size={size+10} color={color} />
        ) }}  />
        </Tab.Navigator>
    ); 
}