// CV.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
export default function CV({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [find, setfind] = useState('');
  const [image,setimage]=useState('');
  const saveCV = async () => {
    try {
      // Validate input fields before storing
      if (!name || !email || !phone || !address || !education || !experience || !skills) {
        alert('Please fill in all fields.');
        return;
      }

      // Store CV data in AsyncStorage
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('phone', phone);
      await AsyncStorage.setItem('address', address);
      await AsyncStorage.setItem('education', education);
      await AsyncStorage.setItem('experience', experience);
      await AsyncStorage.setItem('skills', skills);
      await AsyncStorage.setItem('find', find);
      await AsyncStorage.setItem('image', image);

      alert('CV data saved successfully');
    } catch (error) {
      console.error('Error storing CV data:', error);
      alert('Failed to save CV data. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.Body}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Create CV</Text>
      </View>

      <View style={styles.content}>
        {/* Add input fields for CV information */}
        <TextInput
          placeholder="Full Name"
          onChangeText={(text) => setName(text)}
          style={styles.input}
          
        />
        <TextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Phone"
          onChangeText={(text) => setPhone(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Address"
          onChangeText={(text) => setAddress(text)}
          style={styles.input}
          multiline={true} 
          numberOfLines={5}
          maxLength={200} 
        />
        <TextInput
          placeholder="Education"
          onChangeText={(text) => setEducation(text)}
          style={styles.input}
          multiline={true} 
          numberOfLines={5}
          maxLength={200} 
        />
        <TextInput
          placeholder="Experience"
          onChangeText={(text) => setExperience(text)}
          style={styles.input}
          multiline={true} 
          numberOfLines={5}
          maxLength={200} 
        />
        <TextInput
          placeholder="Skills"
          onChangeText={(text) => setSkills(text)}
          style={styles.input}
          multiline={true} 
          numberOfLines={5}
          maxLength={200} 
        />
        <TextInput
          placeholder="Find Me Online"
          onChangeText={(text) => setfind(text)}
          style={styles.input}
          multiline={true} 
          numberOfLines={5}
          maxLength={200} 
        />
        <TextInput
          placeholder="Enter image URL"
          onChangeText={(text) => setimage(text)}
          style={styles.input}
          multiline={true} 
        />
        {/* Button to save CV data */}
        <Pressable onPress={saveCV} style={styles.button}>
          <Text style={styles.buttonText}>Save CV</Text>
        </Pressable>

        {/* Button to view CV */}
        <Pressable onPress={() => navigation.navigate('ViewCV')} style={styles.button}>
          <Text style={styles.buttonText}>View CV</Text>
        </Pressable>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
      },
      Body: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'black',
        margin: 50,
        borderRadius: 30,
        width:300
      },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 8,
    borderColor:"black",
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    margin:5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
