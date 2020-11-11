import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function IconButton({name, size, style, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.iconContainer, style]}>
                <MaterialCommunityIcons name={name} size={size} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        width: 50,
        height: "100%",
        justifyContent: 'center',
        alignItems: "center",
    },
})
