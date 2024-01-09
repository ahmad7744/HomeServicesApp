import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/HomeScreen/Home';
import Profile from '../Screens/ProfileScreen/Profile';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import Colors from '../Utils/Colors';


const Tab = createBottomTabNavigator();


export default function TabNavigation() {
    return (
        <Tab.Navigator
         screenOptions={{
             headerShown: false,
             tabBarActiveTintColor:Colors.PRIMARY,
             }}>
            <Tab.Screen name='home' component={Home}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Home</Text>

                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" size={size} color={color} />

                    )

                }} />
            <Tab.Screen name='booking' component={BookingScreen}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Booking</Text>

                    ),
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="book" size={size} color={color} />

                    )

                }}
            />
            <Tab.Screen name='profile' component={Profile}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Profile</Text>

                    ),

                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user-circle" size={size} color={color} />
                    )



                }}

            />

        </Tab.Navigator>
    )
}