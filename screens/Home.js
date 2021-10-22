import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import HeaderTab from '../components/HeaderTab'
import GlobalStyles from '../GlobalStyles'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurentItem from '../components/RestaurentItem'

export default function Home() {
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style={{backgroundColor: "white", padding: 15}}>
                <HeaderTab />
                <SearchBar />
            </View>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <Categories />
                <RestaurentItem />
            </ScrollView>
        </SafeAreaView>
    )
}

