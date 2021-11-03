import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import GlobalStyles from '../GlobalStyles'
export default function OrderCompleted() {
    
    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems)
    const total = items /// chuyển từ $ thành number để tính toán
        .map((item) => Number(item.price.replace('$', '')))
        .reduce((prev, curr) => prev + curr, 0)

    const totalMoney = Math.round(total * 100) / 100;
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View>
                <Text>Your order at {restaurantName} has been place for $ {totalMoney}0</Text>
            </View>
        </SafeAreaView>
    )
}
