
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Validate input fields before attempting login
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      // Retrieve stored email and password from AsyncStorage
      const storedEmail = await AsyncStorage.getItem('email');
      const storedPassword = await AsyncStorage.getItem('password');

      // Check if stored email and password match user input
      if (email === storedEmail && password === storedPassword) {
        alert('Login successful');
        // Navigate to the next screen upon successful login
        navigation.navigate('CV'); // Replace 'NextScreen' with your desired screen name
      } else {
        alert('Incorrect email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Body}>
        <View style={styles.view1}>
          <Image
            source={{
              uri: 'https://img.freepik.com/premium-vector/network-connection-background-abstract-style_23-2148875738.jpg',
            }}
            style={styles.image}
          />
          <View style={styles.overlay}>
            <Text style={{ ...styles.title, marginTop: 50 }}>Login</Text>
            <TextInput
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              style={styles.textinput}
            />
            <TextInput
              placeholder="Password"
              style={styles.textinput}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
            <Pressable onPress={handleLogin}>
              <View style={{ ...styles.buttonContainer }}>
                <Text style={{ ...styles.text, textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Login</Text>
              </View>
            </Pressable>
            <Text style={{ ...styles.text, textAlign: 'center', marginLeft: 50 }}>Don't Have An Account?</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
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
  },
  view1: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 485,
    borderRadius: 27,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textinput: {
    color: '#825991',
    backgroundColor: 'white',
    opacity: 0.4,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'purple',
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 50,
    marginTop: 10,
    padding: 10,
  },
  buttonContainer: 
    {
      justifyContent: 'center',
      margin: 20,
      marginLeft: 70,
      padding: 0,
      width: 180,
      borderRadius: 30,
      borderColor: 'orange',
      backgroundColor: 'rgb(255, 99, 71)',
      borderWidth: 3,
    },

  text: {
    color: 'white',
    fontSize: 12,
    margin: 10,
  },
  button: {
    justifyContent: "center",
    backgroundColor: "transparent",
    marginLeft:50
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
