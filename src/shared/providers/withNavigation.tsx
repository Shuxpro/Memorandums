import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';

import {compose} from '@shared/lib/compose';

import {navigationRef} from '../lib/rootNavigation';

const withNavigation = (children: Function) => () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        {children()}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export const withProviders = compose(withNavigation);
