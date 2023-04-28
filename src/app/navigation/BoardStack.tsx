import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {BoardStackParams} from '../../shared/types/navigation/BoardStack';
import {BoardScreen} from '../../screens/BoardScreen/BoardScreen';
import {MemorandumScreen} from '../../screens/MemorandumScreen/MemorandumScreen';

const Stack = createStackNavigator<BoardStackParams>();

export const BoardStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'BoardScreen'} component={BoardScreen} />
      <Stack.Screen name={'MemorandumScreen'} component={MemorandumScreen} />
    </Stack.Navigator>
  );
};
