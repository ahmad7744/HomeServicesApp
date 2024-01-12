import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';


export default function BusinessListItem({ business }) {
    const navigation =useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={()=>navigation.push('business-details',
        {business:business}
        )} >
            <Image source={{ uri: business?.image[0]?.url }}
                style={styles.image}
            />
            <View style={styles.infocointainer}>
                <Text style={{ fontSize: 17, fontFamily: "outfit-medium" }}>{business.name}</Text>
                <Text style={{ fontSize: 13, fontFamily: "outfit" }}>{business.contactPerson}</Text>
                <Text style={{ fontSize: 10, fontFamily: "outfit", padding: 3, color: Colors.PRIMARY, backgroundColor: Colors.PRIMARY_lIGHT, borderRadius: 3, alignSelf: "flex-start", paddingHorizontal: 7 }} >{business.category.name}</Text>


            </View>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 4,
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
    },
    infocointainer:{
        padding:2,
        display:"flex",
        gap:2
    },
    image: {
        width: 160,
        height: 100,
        borderRadius: 10,
    }
})