import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './app-routes';
import { LoadingScreen } from '../scenes/auth/loading.component';

const Stack = createStackNavigator();

export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.CHECK_LOGIN} component={LoadingScreen}/>
  </Stack.Navigator>
);