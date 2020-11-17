import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Show() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Firebase!</Text>
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