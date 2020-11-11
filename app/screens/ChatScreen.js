import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import MessageContainer from '../components/customComponents/MessageContainer';
import SendChatMessageComponent from '../components/customComponents/SendChatMessageComponent';
import NavBar from '../components/customComponents/NavBar';


export default function ChatScreen({route}) {
    const messages = route.params.messages;
    const placeholder = route.params.placeholder;
    const user = route.params.user;

    return (
        <SafeAreaView style={styles.container}>
            <NavBar />
            <View style={{flex: 1}}>
                <FlatList
                    contentContainerStyle={styles.chatContainer}
                    inverted={true}
                    data={messages.sort((a, b) => b.createdAt.toString().localeCompare(a.createdAt.toString()))}
                    keyExtractor={(message) => message._id.toString()}
                    renderItem={({item}) => (
                        <MessageContainer item={item} userData={user}/>
                    )}
                />
            </View>
            <SendChatMessageComponent placeholder={placeholder} userData={user}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    iconContainer: {
        width: 50,
        height: "100%",
        justifyContent: 'center',
        alignItems: "center",
    },
    chatContainer: {
        padding: 10,
        justifyContent: "flex-end"
    },
})
