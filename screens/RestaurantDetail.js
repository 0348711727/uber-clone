import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import About from "../components/restaurantdetail/About";
import Menu from "../components/restaurantdetail/Menu";
import ViewCart from "../components/restaurantdetail/ViewCart";

export default function RestaurantDetail({route, navigation}) {
    return (
        <View>
            <About route={route} />
            <Divider width={1} style={{marginVertical: 20}}/>
            <Menu restaurantName={route.params.name}/>
            <ViewCart navigation={navigation} restaurantName={route.params.name}/>
        </View>
    )
}
