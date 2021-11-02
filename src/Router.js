import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './Screens/LandingScreen'
import DetailsScreen from './Screens/DetailsScreen'


const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="City List" component={LandingScreen} />
        <Stack.Screen name="Map" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;