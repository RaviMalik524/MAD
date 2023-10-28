import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Example from './Activity1';
import Activity2 from './Activity2';
import Apps from './LabTask1';
export class App extends Component {
  render() {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={{marginLeft:20,paddingTop:20,fontWeight:"bold"}}> Activity-1 </Text>
        <Example />
        <Text style={{marginLeft:20,paddingTop:20,fontWeight:"bold"}}> Activity-2 </Text>
        <Activity2 />
        <Text style={{marginLeft:20,paddingTop:20,fontWeight:"bold"}}> Lab Task </Text>
        <Apps />
      </View>
    )
  }
}

export default App
