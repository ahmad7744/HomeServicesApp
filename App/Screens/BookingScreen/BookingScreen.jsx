import { View, Text, FlatList, ScrollView, RefreshControl } from 'react-native'
import React, { useState, useEffect } from 'react'
import PageHeading from '../../components/PageHeading'
import GlobalApi from '../../Utils/GlobalApi'
import { useUser } from '@clerk/clerk-expo'
import BusinessListItems from '../BusinessListByCategoryScreen/BusinessListItems'


export default function BookingScreen() {
  const [bookingList, setbookingList] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    user&&getUserBookings();
  }, [user])


  const { user } = useUser();
  const getUserBookings = () => {
    setloading(true);
    GlobalApi.getUserBookings(user.primaryEmailAddress.emailAddress).then(resp => {
      console.log("Booking", resp)
      setbookingList(resp.bookings)
      setloading(false);
    })
  }



  return (
    <FlatList
      data={bookingList}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={getUserBookings}
        />
      }
      ListHeaderComponent={
        <View style={{ padding: 20 }}>
          <PageHeading title={"My Bookings"} />
        </View>
      }
      renderItem={({ item, index }) => (
        <BusinessListItems
          business={item.bookings}
          booking={item}
        />
      )}
    />
  );
}