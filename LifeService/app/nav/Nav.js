import React,{Component} from 'react';
import { View,Text,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Food from "../food/Food";
import Movie from "../movie/Movie";  
import Hotel from "../hotel/Hotel";  
import Bank from "../bank/Bank";  

const Tab=createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon:({color,size})=>{
            const icons={
              Food:require('../image/food.png'),
              Movie:require('../image/mv.png'),
              Hotel:require('../image/htl.png'),
              Bank:require('../image/food.png'),

            };
            return(
              <Image 
              source={icons[route.name]}
              style={{height:size,width:size}}></Image>
            );
          },
            
         
          
        })}>
        <Tab.Screen name="Food" component={Food} options={{title:'美食'}} />
        <Tab.Screen name="Movie" component={Movie} options={{title:'电影'}}/>
        <Tab.Screen name="Hotel" component={Hotel} options={{title:'酒店'}}/>
        <Tab.Screen name="Bank" component={Bank} options={{title:'登录'}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


