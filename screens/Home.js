import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import GlobalStyles from '../GlobalStyles'

import HeaderTab from '../components/home/HeaderTab'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems from '../components/home/RestaurantItems'
import BottomTabs from '../components/home/BottomTabs'
// import { localRestaurants } from '../DataTest'

const YELP_API_KEY = "5tv9jXQsjkf43N5n42IvaUF1K-PISDFhQNyBC_rN334e43IhoE_h68GwgAQAobhQwvkiEXulKLu7s8JS9J-mE40LIax_kkE1JA66oglwlmPZoLc_9ANHTq3f0GJzYXYx"

export default function Home() {
    const [restaurantData, setRestaurantData] = useState();
    const [city, setCity] = useState('Texas');
    const [activeTab, setActiveTab] = useState('Delivery');

    const getRestaurantFromYelp = async () => {
    const yelp_url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
    const apiOptions = {
        headers: { 
            Authorization: `Bearer ${YELP_API_KEY}`,
        },
    }
    try {
        const res = await fetch(yelp_url, apiOptions)
        const json = await res.json()
        setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase())))
    } catch (error) {
        console.log(error)
    }

//     return fetch(yelp_url, apiOptions)
//         .then(response => response.json())
//         .then(response => setRestaurantData(response.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))))
//         .catch(error =>console.log(error))
}
    useEffect(() => {
        getRestaurantFromYelp();
    }, [city, activeTab])
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style={{backgroundColor: "white", padding: 15}}>
                <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab}/>
                <SearchBar cityHandler={setCity}/>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <Categories />
                {   restaurantData && <RestaurantItems restaurantData={restaurantData}/> }
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    )
}

