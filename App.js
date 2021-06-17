import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/Navigation/AppNavigator';
import AudioProvider from './app/context/AudioProvider';

export default function App()
{
  return(
    <AudioProvider>
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
    </AudioProvider>
  );
}


