import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import GlobalApi from '../../Utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import Heading from '../../components/Heading';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';


export default function Categories() {

    const navigation = useNavigation ();

    const [categories, setcategories] = useState();

    useEffect(() => {
        getcategories();

    })

    const getcategories = async () => {
        await GlobalApi.getCategoriess().then(resp => {
            setcategories(resp?.categories);
        })
    }

    return (
        <View style={{ marginTop: 10 }}>
            <Heading text={"Categories"} isViewAll={true} />
            <FlatList
                data={categories}
                numColumns={4}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => index<=3&& (
                    <TouchableOpacity style={styles.cointiner}
                    onPress={()=>navigation.push('business-list', {category:item.name}  )  }
                    >
                        <View style={styles.iconsCoint}>
                            <Image
                                source={{ uri: item?.icon?.url }}
                                style={{ width: 30, height: 30 }}
                            />
                        </View>
                        <Text style={{fontFamily:"outfit-medium", marginTop:5,}}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    iconsCoint: {
        backgroundColor: Colors.LIGHT_GARY,
        padding: 17,
        borderRadius: 99,
    },
    cointiner: {
        flex: 1,
        alignItems: "center",


    },
})