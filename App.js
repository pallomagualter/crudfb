import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Show from './src/Show';

export default function App() {
  return (
    <View style={styles.container}>
      <Show />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
