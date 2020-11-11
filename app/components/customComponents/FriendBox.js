import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function FriendBox({image, name, township, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.friendBox}>
                <Image style={{flex: 1, maxWidth: 60, height: 60, borderRadius: 30, marginRight: 10}} source={{uri: image}}/>
                <View style={{flex: 1}}>
                    <Text numberOfLines={1} style={{fontSize: 18, fontWeight: "bold"}}>
                        {name}
                    </Text>
                    <Text>
                        {township}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    friendBox: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        marginHorizontal: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 10,
        marginTop: 15,
    }
})
