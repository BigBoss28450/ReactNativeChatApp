import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import FireBase from './app/FireBase';
import ChatScreen from './app/screens/ChatScreen';
import FriendsChatList from './app/screens/FriendsChatList';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IconButton from './app/components/basicComponents/IconButton';

const Stack = createStackNavigator()

export default function App() {

  // VARIABLES
  const user = {
    _id: FireBase.shared.uid,
    name: "Alexis",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyWFNrDUra11jRIW22twL8V8eAYGhFjMxu9A&usqp=CAU",
  }

  // STATES
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = FireBase.shared.on((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, []);

    return unsubscribe;
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTintColor: "white", headerStyle: {backgroundColor: "red"}}}>
        <Stack.Screen 
          name="Home"
          component={FriendsChatList}
          options={{ 
            headerRight: () => (
              <IconButton name="dots-vertical" size={25} /> 
            ),
            title: "Amigos"
          }}/>
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          initialParams={{
            messages: messages,
            placeholder: "Aa",
            user: user
          }} 
          options={{
            headerLeft: () => {
              const navigation = useNavigation()
              return <IconButton name="arrow-left" size={25} onPress={() => navigation.goBack()} />
            },
            headerRight: () => (
              <IconButton name="dots-vertical" size={25} /> 
            )
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <FirendsChatList />
    // <ChatScreen 
    //   messages={messages}
    //   onSend={FireBase.shared.send}
    //   placeholder="Aa"
    //   user={user}
    // />
    // <GiftedChat
    //   messages={messages}
    //   placeholder="Mensaje..."
    //   onSend={FireBase.shared.send}
    //   user={user}
    // />
  )
}