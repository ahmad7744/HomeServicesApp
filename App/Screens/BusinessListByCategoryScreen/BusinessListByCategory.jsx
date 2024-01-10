import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItems from './BusinessListItems';
import Colors from '../../Utils/Colors';



export default function BusinessListByCategory() {

    const [businessList, setbusinessList] = useState([]);

    const navigation = useNavigation();

    const param = useRoute().params;
    useEffect(() => {
        param && getBusinessListByCategory();

    }, [param])

    const getBusinessListByCategory = () => {
        GlobalApi.getBusinessListByCategory(param.category).then(resp => {
            console.log(resp.businessLists)
            setbusinessList(resp.businessLists)

        })
    }
    return (
        <View style={{ padding: 20, paddingTop: 30 }}>
            <TouchableOpacity style={{ display: 'flex', flexDirection: "row", gap: 10, alignItems: "center" }}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back-sharp" size={30} color="black" />
                <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>{param?.category}</Text>
            </TouchableOpacity>

             {businessList?.length>0?   <FlatList
                data={businessList}
                style={{marginTop:15}}
                renderItem={({ item, index }) => (
                    <View>
                    <BusinessListItems business={item} />
                    

                    </View>
                )}

            />:<Text style={{fontSize:20, fontFamily:"outfit-medium", color:Colors.GARY, marginTop:"20%", textAlign:"center"}}>No Business Found</Text>}
            

        </View>
    )
}