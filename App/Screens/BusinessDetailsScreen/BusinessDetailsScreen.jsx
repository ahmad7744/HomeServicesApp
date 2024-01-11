import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import Heading from '../../components/Heading';
import BusinessPhotos from './BusinessPhotos';
import BusinessAboutMe from './BusinessAboutMe';
import BookingModal from './BookingModal';


export default function BusinessDetailsScreen() {
    const param = useRoute().params;
    const [business, setBusiness] = useState(param.business);
    const [showModal, setshowModal] = useState(false)
    const navigation = useNavigation();
    useEffect(() => {


    }, [])
    return business && (
        <View>
            <ScrollView style={{ height: "91%" }}>
                <TouchableOpacity style={styles.backbtncoint} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-sharp" size={30} color="white" />

                </TouchableOpacity>
                <Image source={{ uri: business?.image[0]?.url }}
                    style={{ width: "100%", height: 300 }}
                />
                <View style={styles.infocoint}>
                    <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>{business?.name}</Text>
                    <View style={styles.subcoint}>
                        <Text style={{ fontFamily: "outfit-medium", fontSize: 20, color: Colors.PRIMARY, }}>{business?.contactPerson}🌟</Text>
                        <Text style={{ fontFamily: "outfit-medium", fontSize: 14, color: Colors.PRIMARY, backgroundColor: Colors.PRIMARY_lIGHT, padding: 5, borderRadius: 5 }}>{business?.category.name}</Text>
                    </View>
                    <Text style={{ fontFamily: "outfit", fontSize: 17, color: Colors.GARY, }}><Ionicons name="location-sharp" size={25} color={Colors.PRIMARY} style={{ marginRight: 10 }} />{business?.address}</Text>

                    <View style={{ borderWidth: 0.4, borderColor: Colors.GARY, marginTop: 20, marginBottom: 20 }}></View>


                    {/* About me section */}
                    <BusinessAboutMe business={business} />

                    <View style={{ borderWidth: 0.4, borderColor: Colors.GARY, marginTop: 20, marginBottom: 20 }}></View>


                    <BusinessPhotos business={business} />


                </View>




            </ScrollView>
            <View style={{display:"flex", flexDirection:"row", margin:8, gap:8}}>
                <TouchableOpacity style={styles.msgbtn}>
                    <Text style={{ textAlign: "center", fontFamily: "outfit-medium", color: Colors.PRIMARY, fontSize: 18 }}>Message</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bookingBtn}
                onPress={()=>setshowModal(true)}
                >
                    <Text style={{ textAlign: "center", fontFamily: "outfit-medium", color: Colors.WHITE, fontSize: 18 }}>Book Now</Text>
                </TouchableOpacity>
            </View>

             {/* Booking Screen Modal */}
            <Modal 
            animationType='slide'
            visible={showModal}
            >
           <BookingModal hideModal={()=>setshowModal(false)} />

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    backbtncoint: {
        position: "absolute",
        zIndex: 10,
        padding: 20,

    },
    infocoint: {
        padding: 20,
        display: "flex",
        gap: 7


    },
    subcoint: {
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center"
    },
    msgbtn: {
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: 99,
        flex:1


    },
    bookingBtn: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: 99,
        flex:1

    }
})