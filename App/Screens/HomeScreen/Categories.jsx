import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import GlobalApi from '../../Utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import Heading from '../../components/Heading';
import Colors from '../../Utils/Colors';


export default function Categories() {

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
                    <View style={styles.cointiner} >
                        <View style={styles.iconsCoint}>
                            <Image
                                source={{ uri: item?.icon?.url }}
                                style={{ width: 30, height: 30 }}
                            />
                        </View>
                        <Text style={{fontFamily:"outfit-medium", marginTop:5,}}>{item.name}</Text>
                    </View>
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