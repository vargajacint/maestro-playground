import React from 'react';

/* Types */
import type { RootStackParamList } from './types';

/* Data Things */
import { THEME } from '../constants';

/* Navigation Things */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

/* Screen and Stacks */
import DetailsScreen from '../screens/details';
import HomeScreen from '../screens/home';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Navigation() {
  return (
    <NavigationContainer theme={THEME}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={HomeScreen.options} />
        <Stack.Screen name="Details" component={DetailsScreen} options={DetailsScreen.options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
