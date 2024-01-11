import { View, Text, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import Heading from '../../components/Heading'
import Colors from '../../Utils/Colors';


export default function BusinessAboutMe({ business }) {
    const [isReadmore, setisReadmore] = useState(false);

    return business&& (
        <View>
            <Heading text={"About Me"} />
            <Text style={{ fontFamily: "outfit", color: Colors.GARY, fontSize: 16, lineHeight: 28 }} numberOfLines={isReadmore ? 20 : 3} >{business.about}</Text>
            <TouchableOpacity onPress={() => setisReadmore(!isReadmore)}>
                <Text style={{ fontFamily: "outfit", color: Colors.PRIMARY, fontSize: 16 }}>{isReadmore ? 'Read Less' : 'Read More'}</Text>
            </TouchableOpacity>
        </View>
    )
}