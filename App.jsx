import React from 'react';
import { View, StyleSheet } from 'react-native';
// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// screens
import HomeScreen from './src/screens/HomeScreen';
import AddRecipeScreen from './src/screens/AddRecipeScreen';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import RecipeDetailScreen from './src/screens/RecipeDetailScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          component={Login} />
        <Stack.Screen
          name='SignUp'
          component={SignUp} />
        <Stack.Screen name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Home' }} />
        <Stack.Screen name="AddRecipeScreen"
          component={AddRecipeScreen}
          options={{ title: 'Add Recipe' }} />
        <Stack.Screen
          name='RecipeDetailScreen'
          component={RecipeDetailScreen}
          options={{ title: 'Recipe Details' }} />
        <Stack.Screen
          name='FavoritesScreen'
          component={FavoritesScreen}
          options={{ title: 'Favorite Recipes' }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};


export default App;
