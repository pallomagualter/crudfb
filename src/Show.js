import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Show() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput}></TextInput>
      <TextInput style={styles.textInput}></TextInput>
    </View>

  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
    textInput: {
      width: 300,
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 10, 
      textAlign: 'center',
      marginTop: 5,
    },
    button: {
      height: 50,
      backgroundColor: '#069',
      alignSelf: 'stretch',
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
    },
  });