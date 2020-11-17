import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Show from './src/Show';

export default function App() {
  return (
    <View style={styles.container}>
      <Text  style={styles.text}>Open up App.js to start working on your app!</Text>
      <Show />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
