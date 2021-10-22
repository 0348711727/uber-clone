import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function RestaurentItem() {
    return (
        <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}>
            <View style={styles.restaurentItem}>
            <RestaurentImage />
            <RestaurentInfo /> 
            </View>
        </TouchableOpacity>
    )
}
const RestaurentImage = () => (
    <View>
        <Image source={require('../assets/images/bg1.jpg')} style={styles.restaurentimg}/>
        <TouchableOpacity style={styles.heartIcon}>
            <MaterialCommunityIcons name="heart-outline" size={25} style={{color: 'white'}} />
        </TouchableOpacity>
    </View>
)
const RestaurentInfo = () => (
    <View style={styles.res_info}>
        <View>
            <Text style={styles.res_info_text_1}>This Burger Look Yummy !</Text>
            <Text style={styles.res_info_text_2}>5-10 mins</Text>
        </View>
        <View style={styles.res_info_text_3}>
            <Text >4.5</Text>
        </View>
    </View>
)
const styles = StyleSheet.create({
    restaurentItem: {
        padding: 15,
        backgroundColor: 'white'
    }
    ,
    restaurentimg: {
        width: '100%',
        height: 180
    },
    heartIcon: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    res_info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    res_info_text_1: {
        fontWeight: 'bold',
        fontSize: 15
    },
    res_info_text_2:{
        fontSize: 13,
        color: 'gray'
    },
    res_info_text_3:{
        height: 40,
        width: 40,
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'center',
        backgroundColor: '#eee'
    }
})