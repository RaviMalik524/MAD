import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import CV from "./CV";
export default function App() {
  //setuserinput{...user}
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image
          source={{
            uri: "https://img.freepik.com/premium-vector/network-connection-background-abstract-style_23-2148875738.jpg",
          }}
          style={{ flex: 1 }}
        />
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            margin: 180,
          }}
        >
          <TextInput placeholder="Email" style={styles.textinput} />
          <TextInput
            placeholder="Password"
            style={styles.textinput}
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={styles.view2}>
        <Pressable onPress={() => alert("Login successfull")}>
          <View style={{ ...styles.buttonContainer }}>
            <Text style={{ ...styles.text }}>LOGIN</Text>
          </View>
        </Pressable>

        <View
          style={{
            ...styles.buttonContainer,
            flexDirection: "row",
            backgroundColor: "transparent",
            borderWidth: 0,
          }}
        >
          <Pressable onPress={() => alert("switch to forget password")}>
            <View style={{ ...styles.transparentButtons }}>
              <Icon
                name="lock"
                size={30}
                color="#825991"
                style={{ textAlign: "center" }}
              >
                <Text
                  style={{ ...styles.text, color: "#825991", paddingLeft: 30 }}
                >
                  Forgotten password?
                </Text>
              </Icon>
            </View>
          </Pressable>
        </View>
        <View
          style={{
            ...styles.buttonContainer,
            flexDirection: "row",
            backgroundColor: "transparent",
            borderWidth: 0,
          }}
        >
          <Pressable onPress={() => alert("create new account")}>
            <View style={{ ...styles.transparentButtons }}>
              <Icon
                name="user"
                size={30}
                color="#825991"
                style={{ textAlign: "center" }}
              >
                <Text
                  style={{ ...styles.text, color: "#825991", paddingLeft: 30 }}
                >
                  Create your account
                </Text>
              </Icon>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  view1: {
    flex: 1.5,
    backgroundColor: "green",
  },

  view2: {
    flex: 2,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  textinput: {
    color: "#825991",
    backgroundColor: "white",
    opacity: "40%",
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "purple",
    textAlign: "left",
    fontSize: 30,
    fontWeight: "bold",
    margin: 5,
    padding: 10,
  },
  buttonContainer: {
    justifyContent: "center",
    margin: 20,
    padding: 5,
    width: 430,
    borderRadius: 30,
    borderColor: "orange",
    backgroundColor: "rgb(255, 99, 71)",
    borderWidth: 3,
  },
  transparentButtons: {
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
  },
});
