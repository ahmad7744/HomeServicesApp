import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';


export default function Header() {
    const { user, isLoading } = useUser();
    return user && (
        <View style={styles.Coninter}>
            {/*Profile Section*/}
            <View style={styles.ProfileMainCoint}>
                <View style={styles.ProfileCoint}>
                    <Image source={{ uri: user?.imageUrl }} style={styles.UserImage} />
                    <View>
                        <Text style={{ color: Colors.WHITE, fontFamily:"outfit" }} >Welcome</Text>
                        <Text style={{ color: Colors.WHITE, fontSize: 20 , fontFamily:"outfit-medium" }}>{user?.fullName}</Text>


                    </View>
                </View>
                <FontAwesome name="bookmark-o" size={27} color="white" />
            </View>
            {/*Search Bar */}
            <View style={styles.SearchBarCoint}>
                <TextInput placeholder='Search' style={styles.TextInput} />
                <FontAwesome name="search" size={24} color={Colors.PRIMARY} style={styles.Searchbtn} />

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    Coninter: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.PRIMARY,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25


    },
    ProfileMainCoint: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"


    },
    ProfileCoint: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center"

    },
    UserImage: {
        width: 45,
        height: 45,
        borderRadius: 99,
    },
    TextInput: {
        padding:7,
        paddingHorizontal:16,
        backgroundColor:Colors.WHITE,
        borderRadius:8,
        width:"85%",
        fontSize:16,
        fontFamily:"outfit"
    },
    SearchBarCoint:{
        marginTop:15,
        display:"flex",
        flexDirection:"row",
        gap:10,
        marginBottom:10

    },
    Searchbtn:{
        backgroundColor:Colors.WHITE,
        padding:10,
        borderRadius:8

    },
});
