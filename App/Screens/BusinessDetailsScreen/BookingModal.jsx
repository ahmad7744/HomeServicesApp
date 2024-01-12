import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput, ScrollView, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react'
import CalendarPicker from "react-native-calendar-picker";
import Colors from '../../Utils/Colors';
import Heading from '../../components/Heading';
import GlobalApi from '../../Utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';
import moment from 'moment';





export default function BookingModal({ businessId, hideModal }) {
    const [timeList, settimeList] = useState();
    const [selectedTime, setselectedTime] = useState();
    const [selectedDate, setselectedDate] = useState();
    const [note, setnote] = useState();
    const { user } = useUser();


    useEffect(() => {
        getTime();


    }, [])

    const getTime = () => {
        const timeArray = [];

        for (let i = 8; i <= 12; i++) {
            timeArray.push({
                time: i + ':00 AM'
            });

            timeArray.push({
                time: i + ':30 AM'
            });
        }

        for (let i = 1; i <= 7; i++) {
            timeArray.push({
                time: i + ':00 PM'
            });

            timeArray.push({
                time: i + ':30 PM'
            });
        }

        settimeList(timeArray);
    }

    // Crearte Booking Method 
    const createNewBooking = () => {
        if (!selectedTime || !selectedDate) {
            ToastAndroid.show("Please Select Date and Time", ToastAndroid.LONG)
            return;
        }

        const data = {
            userName: user?.fullName,
            userEmail: user?.primaryEmailAddress.emailAddress,
            time: selectedTime,
            date: moment(selectedDate).format("DD-MMM-YYYY"),
            // note:note,
            businessId: businessId,
        }


        GlobalApi.createBooking(data).then(resp => {
            console.log("Resp", resp)
        })
        ToastAndroid.show("Booking Created Successfully!", ToastAndroid.LONG)
        setTimeout(() => {
            hideModal();
        }, 1000);

    }



    return (
        <ScrollView>
            <KeyboardAvoidingView style={{ padding: 20 }}>
                <TouchableOpacity style={{ display: 'flex', flexDirection: "row", gap: 10, alignItems: "center", marginBottom: 20 }}
                    onPress={() => hideModal()}
                >
                    <Ionicons name="arrow-back-sharp" size={30} color="black" />
                    <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>Booking</Text>
                </TouchableOpacity>



                {/* Booking Calender Section */}


                <Heading text={"Select Date"} />
                <View style={styles.cointiner}>
                    <CalendarPicker
                        onDateChange={setselectedDate}
                        width={340}
                        minDate={Date.now()}
                        todayBackgroundColor={Colors.BLACK}
                        todayTextStyle={{ color: Colors.WHITE }}
                        selectedDayColor={Colors.PRIMARY}
                        selectedDayTextColor={Colors.WHITE}
                    />


                </View>

                {/* Time Selection Section */}
                <View style={{ marginTop: 20 }}>
                    <Heading text={"Select Time Slot"} />
                    <FlatList
                        data={timeList}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => setselectedTime(item.time)}  >
                                <Text style={[selectedTime == item.time ? styles.selectedTime : styles.unselectedTime]}>{item.time}</Text>

                            </TouchableOpacity>
                        )}

                    />
                </View>

                {/* Note Section*/}
                <View style={{ paddingTop: 20 }}>
                    <Heading text={"Any Suggestion Note"} />
                    <TextInput placeholder='Note' numberOfLines={4} multiline={true} style={styles.NoteSection}
                        onChange={(text) => setnote(text)}
                    />

                </View>

                {/* Confirmation Buttion*/}
                <TouchableOpacity style={{ marginTop: 15 }}
                    onPress={() => createNewBooking()}
                >
                    <Text style={styles.confirmBtn}>Confirm & Book</Text>
                </TouchableOpacity>


            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cointiner: {
        backgroundColor: Colors.PRIMARY_lIGHT,
        padding: 20,
        borderRadius: 15

    },

    selectedTime: {
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: 99,
        paddingHorizontal: 18,
        color: Colors.WHITE,
        backgroundColor: Colors.PRIMARY,

    },
    unselectedTime: {
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: 99,
        paddingHorizontal: 18,
        color: Colors.PRIMARY

    },
    NoteSection: {
        borderWidth: 1,
        borderRadius: 15,
        textAlignVertical: "top",
        padding: 20,
        fontSize: 16,
        fontFamily: "outfit",
        borderColor: Colors.PRIMARY


    },
    confirmBtn: {
        textAlign: "center",
        fontFamily: "outfit-medium",
        fontSize: 17,
        backgroundColor: Colors.PRIMARY,
        color: Colors.WHITE,
        padding: 13,
        borderRadius: 99,
        elevation: 2,

    }

})