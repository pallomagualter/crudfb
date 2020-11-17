import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from './firebase';

export default function Show() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  function pushFire() {
    try{
      firebase.database().ref('/crud').push({
        name: name,
        age: age
      })
    } catch(error) {
      alert(error);
    }
    finally {
      setName('');
      setAge('');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="Type your name"
        value={name}
        onChangeText={name => setName(name)}
      />

      <TextInput 
        style={styles.input}
        placeholder="Type your age"
        value={age}
        onChangeText={age => setAge(age)}
      />
      
      <TouchableOpacity style={styles.button} onPress={pushFire}>
        <Text style={styles.buttonText}>SEND</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 45,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    borderColor: '#EEE',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    height: 45,
    backgroundColor: '#8257E6',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  });