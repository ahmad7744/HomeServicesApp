import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import BusinessList from './BusinessList'
import Colors from '../../Utils/Colors'


export default function Home() {



    return (
        <View>
            <Header />
            <View style={{padding:20}}>
                <Slider />
                <Categories/>
                <BusinessList />
            </View>
        </View>
    )
}