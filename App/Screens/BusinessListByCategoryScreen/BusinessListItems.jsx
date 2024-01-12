import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function BusinessListItems({ business, booking }) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.cointnier} onPress={() => navigation.push('business-details', { business: business })}>
      <Image source={{ uri: business?.image[0]?.url }}
        style={styles.imagestyle}

      />
      <View style={styles.subcointanier}>
        <Text style={{ fontFamily: "outfit", color: Colors.GARY, fontSize: 15 }}>{business.contactPerson}</Text>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 19, }} >{business.name}</Text>
        {!booking?.id ? (
          <Text style={{ fontFamily: "outfit", color: Colors.GRAY, fontSize: 16,   }}>
            <Ionicons
              name="location-sharp"
              size={20}
              color={Colors.PRIMARY}
              style={{ marginRight: 10 }}
            />
            {business.address}
          </Text>
        ) : (
          <Text
            style={[
              {
                padding: 5,
                borderRadius: 5,
                fontSize: 14,
                alignSelf: "flex-start",
              },
              booking?.bookingStatus === "Completed"
                ? { backgroundColor: Colors.GREEN, color: Colors.WHITE }:
                booking?.bookingStatus === "InProgress"
                ? { backgroundColor: Colors.YELLOW, color: Colors.WHITE }
                : booking?.bookingStatus === "Canceled"
                  ? { backgroundColor: Colors.LIGHT_RED, color: Colors.WHITE }
                  : { color: Colors.PRIMARY, backgroundColor: Colors.PRIMARY_lIGHT },
            ]}
          >
            {booking.bookingStatus}
          </Text>
        )}
        {booking?.id ?
          <View style={{display:"flex", flexDirection:"row", gap:10}}>
           <Text>
          <FontAwesome name="calendar" size={24} color={Colors.PRIMARY}  />{booking.date} at {booking.time}
          </Text></View> : null}
      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cointnier: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10


  },
  subcointanier: {
    display: "flex",
    gap: 8


  },
  imagestyle: {
    width: 100,
    height: 100,
    borderRadius: 15,

  }
})