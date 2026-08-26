import React from 'react';
import { StatusBar } from 'expo-status-bar';

import SpecimenProvider from './src/context/SpecimenProvider';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
    <SpecimenProvider>
      <StatusBar style="light" />
      <RootNavigator />
    </SpecimenProvider>
  );
}