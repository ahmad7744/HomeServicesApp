import React, { useEffect, useState, } from 'react';
import { FlatList, Text, View } from 'react-native';
import GlobalApi from '../../Utils/GlobalApi';
import Heading from '../../components/Heading';

export default function BusinessList() {

    const [businessLists, setbusinessLists] = useState([]);

    useEffect(() => {
        getBusinessList();
    
    }, [])

    const getBusinessList = () => {
        GlobalApi.getBusinessList().then(resp=>{
            console.log(resp)
            setbusinessLists(resp.businessLists);
        })

    }

    return (
        <View style={{ marginTop: 20 }}>
            <Heading text={'Leatest Business'} isViewAll={true} />
            <FlatList 
            data={businessLists}
            horizontal={true}
            renderItem={({ item, index }) => (
                <View style={{marginRight:20}}>
                   <Text>{item.name}</Text>
                </View>
            )}
            />
        </View>
    )
}