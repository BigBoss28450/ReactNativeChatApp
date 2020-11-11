import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import FriendBox from '../components/customComponents/FriendBox'

const users = [
    {
        id: 1,
        name: "Alexis Isidoro Bolaños Avalos",
        township: "Colima",
        image: "https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?resize=940,530"
    },
    {
        id: 2,
        name: "Andres Avalos Venegas",
        township: "Comala",
        image: "https://i.pinimg.com/originals/67/54/78/675478c7dcc17f90ffa729387685615a.jpg"
    },
    {
        id: 3,
        name: "Patrick Bolaños Avalos",
        township: "Colima",
        image: "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search-v2_297x176.jpg"
    },
]

export default function FirendsChatList({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex: 1}}>
                <FlatList
                    data={users}
                    keyExtractor={(user) => user.id.toString()}
                    renderItem={({item}) => (
                        <FriendBox 
                            name={item.name} 
                            township={item.township}
                            image={item.image}
                            onPress={() => navigation.navigate("Chat")}/>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
