import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './navigation/MainStack';
import {Provider} from 'react-redux';
import {store} from '../../src/entities/MemorandumStorage/lib/MemorandumStorage';

const Application: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <MainStack />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default Application;
