import React from 'react';
import { Text, View, SafeAreaView, ActivityIndicator, Image, StyleSheet } from 'react-native';
import { useQuery, gql } from '@apollo/client';

const GET_DATA = gql`
  query MyQuery {
    tasks {
      id
      name
    }
  }
`

export default function Tasks() {
  const { data, loading, error } = useQuery(GET_DATA);

  if (error) { console.error('error', error) };
  if (loading || !data) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  };
  const tasks = data.tasks
  return (
    <View style={styles.container}>
      {tasks.map((item) => 
        <View key={item.id}>
          <Text>{item.name}</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50
  },
});
