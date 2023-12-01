import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import CV from './CV';
import Register from './Register';
import ViewCV from './ViewCV';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register ">
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CV" component={CV} />
        <Stack.Screen name="ViewCV" component={ViewCV} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
