import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import firebase from './firebase';

export default function Show() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [listFire, setListFire] = useState('');

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

  useEffect(() => {
    try{
      firebase.database().ref('/crud').on('value', (snapshot) => {
        const list = [];
        snapshot.forEach(childItem => {
          list.push({
            key: childItem.key,
            name: childItem.val().name,
            age: childItem.val().age
          })
        });
        setListFire(list);
      })
    } catch (error)  {
      alert(error);
    }
  }, [])

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

      <ScrollView>
        <FlatList 
          style={styles.viewFlatlist}
          data={listFire}
          keyExtractor={(item) => item.key}
          renderItem={({item}) => 

            <View style={styles.iconFlat}> 
              <Text style={styles.text} >Nome: {item.name} </Text>
              <Text style={styles.text} >Idade: {item.age} </Text>

              <TouchableOpacity style={styles.btnEdit} onPress={() => { editFire(item.key, item.name, item.age) }} >
                <Text style={styles.text}>EDIT</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnDelete} onPress={() => { delFire(item.key) }}>
                <Text style={styles.text}>DELETE</Text>
              </TouchableOpacity>
            </View>
          }
        />
      </ScrollView>
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
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
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
  btnEdit: {
    height: 45,
    backgroundColor: '#04d361',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  btnDelete: {
    height: 45,
    backgroundColor: 'red',
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
  iconFlat: {
    flexDirection: 'row',
    width: 350,
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    alignContent: 'flex-start',
    justifyContent: 'center',
    margin: 5
  },
  viewFlat: {
    maxHeight: 410,
  }
  });