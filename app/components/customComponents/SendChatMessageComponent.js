import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import uuid from "uuid"


export default function SendChatMessageComponent({ onPress, placeholder = "Mensaje...", userData }) {
    // STATES
    const [message, setMessage] = useState("");

    // FUNCTIONS
    const handleSubmit = () => {
        if(message.trim() === "") return; // VALIDATE IF EMPTY

        const _id = uuid.v4(); // GENERATE UNIQUE ID FOR EVERY MESSAGE
        const createdAt = new Date(); // GENERATE TIMESTAMP
        const text = message.trim(); // USER MESSAGE
        const user = userData; // USER DATA 
        onPress([{ _id, createdAt, text, user}], true)
        setMessage(""); // CLEAR TEXT INPUT
    }

    return (
        <View style={styles.messageBar}>
            <TouchableOpacity onPress={() => console.log("Hola")}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name="paperclip" size={25} />
                </View>
            </TouchableOpacity>
            <TextInput value={message} multiline={true} style={styles.textContainer} placeholder={placeholder} onChangeText={setMessage}/>
            <TouchableOpacity onPress={handleSubmit}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name="send" size={25} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    messageBar: {
        flex: 1,
        flexShrink: 1,
        flexBasis: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "flex-end",
        maxHeight: 50,
        borderTopColor: "lightgray",
        borderTopWidth: 1,
    },
    iconContainer: {
        width: 50,
        height: "100%",
        justifyContent: 'center',
        alignItems: "center",
    },
    textContainer: {
        flex: 1,
        height: 40,
        borderColor: "lightgray",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 18
    }
})
