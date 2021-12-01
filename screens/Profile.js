import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import { useSelector } from 'react-redux'
import GlobalStyles from "../GlobalStyles";
import BottomTabs from "../components/home/BottomTabs";
export default function Profile({ navigation }) {
    const userInfo = useSelector((state) => state.userReducer)


    console.log(userInfo, 'userInfo')

    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style={{ position: 'relative', top: 20 }}>
                <View>
                    <Text>Profile</Text>
                    <Image />
                    <Text>Address: {userInfo.user.address}</Text>
                    <Text>Phone Numver: {userInfo.user.phone}</Text>
                    <Text>Profile</Text>
                </View>
                <View style={{ position: 'relative' }}>
                    <BottomTabs navigation={navigation} />
                </View>
            </View>
        </SafeAreaView>
    )
}
