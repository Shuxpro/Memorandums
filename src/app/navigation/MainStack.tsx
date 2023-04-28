import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {MainStackParams} from '../../shared/types/navigation/MainStack';
import {BoardStack} from './BoardStack';

const Stack = createStackNavigator<MainStackParams>();

export function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'BoardStack'} component={BoardStack} />
    </Stack.Navigator>
  );
}
