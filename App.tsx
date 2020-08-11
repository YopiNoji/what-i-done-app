import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import AnimatedAppLoader from './components/AnimatedAppLoader'
import ListViewOfTasks from './components/ListViewOfTasks'
import Constants from 'expo-constants';

export default function App() {
  return (
    <AnimatedAppLoader image={{ uri: Constants.manifest.splash.image }}>
      <SafeAreaView style={styles.container}>
        <ListViewOfTasks></ListViewOfTasks>
      </SafeAreaView>
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
