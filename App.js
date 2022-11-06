import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MyStack from './navigation';
import Toast from 'react-native-toast-message';
import RecipeContext from './context';

const App = () => {
  return (
    <NavigationContainer>
      <RecipeContext>
      <MyStack />
      <Toast />
      </RecipeContext>
    </NavigationContainer>
  );
};

export default App;