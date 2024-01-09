import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'

export default function Slider() {

    const [slider, setslider] = useState([]);

    useEffect(() => {
        getsliders();

    }, [])

    const getsliders = () => {
        GlobalApi.GetSlider().then(resp => {
            console.log("resp", resp.sliders);
            setslider(resp?.sliders)
        })
    }
    return (

        <View>
            <Text style={styles.heading}>Offers For You</Text>
            <FlatList
                data={slider}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={{marginRight:20}}>
                        <Image
                            source={{ uri: item?.image?.url }}
                            style={styles.sliderimage}
                        />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontFamily: "outfit-medium",
        marginBottom: 10,


    },
    sliderimage: {
        width: 270,
        height: 150,
        borderRadius: 20,
        objectFit: "contain"
    }
})