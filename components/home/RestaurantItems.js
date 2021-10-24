import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function RestaurantItems(props) {
    // console.log(props.restaurantData)
    return (
        <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}>
            { props.restaurantData && props.restaurantData.map((restaurant) => (
                <View style={styles.restaurantItem} key={restaurant.id}>
                    <RestaurantImage image={restaurant.image_url}/>
                    <RestaurantInfo rating={restaurant.rating} reviews={restaurant.reviews} name={restaurant.name}/> 
                </View>
            ))}
        </TouchableOpacity>
    )
}
const RestaurantImage = (props) => (
    <View>
        <Image source={{uri: props.image}} style={styles.restaurantimg}/>
        <TouchableOpacity style={styles.heartIcon}>
            <MaterialCommunityIcons name="heart-outline" size={25} style={{color: 'white'}} />
        </TouchableOpacity>
    </View>
)
const RestaurantInfo = ({name, reviews, rating}) => (
    <View style={styles.res_info}>
        <View>
            <Text style={styles.res_info_text_1}>{name}</Text>
            <Text style={styles.res_info_text_2}>5-10 mins</Text>
        </View>
        <View style={styles.res_info_text_3}>
            <Text >{rating}</Text>
        </View>
    </View>
)
const styles = StyleSheet.create({
    restaurantItem: {
        padding: 15,
        backgroundColor: 'white'
    },
    restaurantimg: {
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