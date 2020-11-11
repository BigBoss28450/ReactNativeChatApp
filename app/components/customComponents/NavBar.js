import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function NavBar() {
    return (
        <View style={styles.navBar}>
            <TouchableOpacity onPress={() => console.log("Hola")}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name="arrow-left" size={25} />
                </View>
            </TouchableOpacity>
            <Text>Francisco</Text>
            <TouchableOpacity onPress={() => console.log("Hola")}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name="dots-vertical" size={25} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navBar: {
        flex: 1, 
        maxHeight: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: "lightgray",
        borderBottomWidth: 1,
    },
    iconContainer: {
        width: 50,
        height: "100%",
        justifyContent: 'center',
        alignItems: "center",
    },
})
