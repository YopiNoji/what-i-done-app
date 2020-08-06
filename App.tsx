import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import AnimatedAppLoader from './components/AnimatedAppLoader'
import Constants from 'expo-constants';

export default function App() {
  return (
    <AnimatedAppLoader image={{ uri: Constants.manifest.splash.image }}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </AnimatedAppLoader>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
