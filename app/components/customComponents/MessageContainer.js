import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { color } from 'react-native-reanimated'

export default function MessageContainer({ item, userData }) {
    return (
        <View style={styles.container}>
            {item.user._id != userData._id && <Image style={styles.profileImage} source={{uri: userData.avatar}} />}
            <View style={styles.messageContainer}>
                <View style={item.user._id === userData._id ? styles.messageContainerRight : styles.messageContainerLeft}>
                    <Text style={[styles.message, item.user._id === userData._id && styles.local]}>
                        {item.text}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        marginTop: 10,
    },
    messageContainer: {
        flex: 1,
    },
    messageContainerLeft: {
        alignSelf: "flex-start",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        backgroundColor: "#e8e8e8",
    },
    messageContainerRight: {
        alignSelf: "flex-end",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        backgroundColor: "#1686db",
    },
    profileImage:{
        flex: 1,
        maxWidth: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10
    },
    message: {
        fontSize: 17
    },
    local: {
        color: "white",
    },
})
