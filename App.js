import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, ScrollView, TextInput, TouchableOpacity  } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import io from "socket.io-client";
 
export default function App() {

  // STATES
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // SOCKET CONNECTION
  const socket = io("http://127.0.0.1:8000")
  socket.on("chat message", msg => {
    setMessages([...messages, msg]);
  })

  // FUNCTIONS
  const submitChatMessage = () => {
    socket.emit('chat message', message);
    setMessage("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="arrow-left" size={25} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="dots-vertical" size={25} />
          </View>
        </TouchableOpacity>
      </View>
      <FlatList 
        contentContainerStyle={styles.messagesContainer}
        data={messages}
        keyExtractor={(value, index) => index}
        renderItem={({item, index}) => (
          <View style={styles.outterMessage}>
            <Text>{item}</Text>
          </View>
        )}
      />
      {/* <ScrollView style={styles.messagesContainer}>
        <View style={styles.outterMessage}>
          <Text>Mundo</Text>
        </View>
      </ScrollView> */}
      <View style={styles.writeMessageContainer}>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="camera-outline" size={25}/>
          </View>
        </TouchableOpacity>
        <TextInput style={styles.inputText} placeholder="Mensaje..." onChangeText={(value) => setMessage(value)}/>
        <TouchableOpacity onPress={() => submitChatMessage()}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="send" size={25}/> 
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "space-between",
  },
  navBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    maxHeight: 50,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
  iconContainer: {
    height: 50,
    width: 50, 
    justifyContent: "center",
    alignItems: 'center',
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  outterMessage: {
    backgroundColor: "#ececec",
    justifyContent: "center",
    height: 40,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  writeMessageContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: 60,
    borderTopColor: "lightgray",
    borderTopWidth: 1,
  },
  inputText: {
    flex: 1,
    borderColor: "lightgray",
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
