import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import FireBase from './app/FireBase';

export default function App() {

  // VARIABLES
  const user = {
    name: "Alexis",
    _id: FireBase.shared.uid
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
      // onSend={messages => onSend(messages)}
      onSend={FireBase.shared.send}
      user={user}
    />
  )
}