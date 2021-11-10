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

export default function Home({ navigation }) {

    const [restaurantData, setRestaurantData] = useState();
    const [city, setCity] = useState('New York');
    // const [city, setCity] = useState('Aguada', 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'Barceloneta', 'Caguas', 'California', 'Carolina', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Dorado', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming');

    //Set city 5s reset location
    // const getRndInteger = (min, max) => {
    //     return Math.floor(Math.random() * (max - min)) + min;
    // }
    // const cityUber = ['Aguada', 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'Barceloneta', 'Caguas', 'California', 'Carolina', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Dorado', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming', '']
    // const cityAvailable = cityUber[getRndInteger(0, cityUber.length - 1)]

    // const cityRefreshEvery5s = () => {
    //     const removeTimeOut = setTimeout(() => setCity(cityAvailable), 30000)
    //     return removeTimeOut;
    // }
    // useEffect(() => {
    //     const deleteTimeOut = cityRefreshEvery5s();
    //     return () => clearTimeout(deleteTimeOut);
    // }, [city]) //clearTimeout after used because if i don't clear, it will cost so much memory of the app

    //end here
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
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
                {/* <SearchBar cityHandler={cityRefreshEvery5s} /> */}
            </View>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <Categories />
                {restaurantData && <RestaurantItems restaurantData={restaurantData} navigation={navigation} />}
            </ScrollView>
            <Divider width={1} />
            <BottomTabs navigation={navigation} />
        </SafeAreaView>
    )
}

