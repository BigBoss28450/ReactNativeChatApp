import React, { useState, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import FireBase from './app/FireBase';

export default function App() {

  // VARIABLES
  const user = {
    _id: FireBase.shared.uid,
    name: "Alexis",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyWFNrDUra11jRIW22twL8V8eAYGhFjMxu9A&usqp=CAU",
  }

  // STATES
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
  ]);

  useEffect(() => {
    const unsubscribe = FireBase.shared.on((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, []);

    return unsubscribe;
  }, [])

  return (
    <GiftedChat
      messages={messages}
      placeholder="Mensaje..."
      isTyping={true}
      onSend={FireBase.shared.send}
      user={user}
    />
  )
}