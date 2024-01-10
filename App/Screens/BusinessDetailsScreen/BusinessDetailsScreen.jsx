import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';


export default function BusinessDetailsScreen() {
    const param = useRoute().params;
    const [business, setBusiness] = useState(param.business);
    const navigation = useNavigation();
    useEffect(() => {


    }, [])
    return business && (
        <View>
            <TouchableOpacity style={styles.backbtncoint} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-sharp" size={30} color="white" />

            </TouchableOpacity>
            <Image source={{ uri: business?.image[0]?.url }}
                style={{ width: "100%", height: 300 }}
            />
            <View style={styles.infocoint}>
                <Text style={{fontFamily:"outfit-bold", fontSize:25}}>{business?.name}</Text>
                <View>
                    <Text style={{fontFamily:"outfit-bold", fontSize:25}}>{business?.contactPerson}</Text>
                    <Text>{business?.category.name}</Text>
                </View>
                <Text>{business?.address}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    backbtncoint: {
        position: "absolute",
        zIndex: 10,
        padding: 20,

    },
    infocoint:{
        padding:20,
        display:"flex",
        gap:7


    }
})