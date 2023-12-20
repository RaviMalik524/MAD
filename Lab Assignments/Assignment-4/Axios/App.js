import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(" ");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts") // Change 'put' to 'get' and fix the endpoint URL
      .then((res) => setData(res.data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <View style={styles.container}>
      {error !== " " && <Text style={styles.error}>{error}</Text>}
      {data.map((post) => { // Change 'put' to 'post' for correct variable name
        const { id, title, body } = post;
        return (
          <View key={id}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.body}>{body}</Text>
          </View>
        );
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    fontSize: 18,
    color: 'red',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
  },
});
