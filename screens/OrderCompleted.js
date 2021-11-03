import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import GlobalStyles from '../GlobalStyles'
import LottieView from 'lottie-react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Menu from "../components/restaurantdetail/Menu";

export default function OrderCompleted({ navigation }) {
    const [lastOrder, setLastOrder] = useState([])

    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems)
    const total = items /// chuyển từ $ thành number để tính toán
        .map((item) => Number(item.price.replace('$', '')))
        .reduce((prev, curr) => prev + curr, 0)

    const totalMoney = Math.round(total * 100) / 100;


    useEffect(() => {
        const getOrder = () => {
            fetch("http://192.168.1.9:5000/orders")
                .then(res => res.json())
                .then(json => setLastOrder([...json]))
                .catch(err => console.log(err))
        }
        getOrder()
        return getOrder();
    }, [])
    console.log('my lastOrder', lastOrder)
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style={{ position: 'absolute' }}>
                <TouchableOpacity opacity={1} onPress={() => navigation.navigate('Home')}>
                    <View style={{ position: 'absolute', top: 50, flexDirection: 'column', right: 20, alignItems: 'center' }}>
                        <FontAwesome5 name='home' size={20} />
                        <Text>Home</Text>
                    </View>
                </TouchableOpacity>
                <LottieView style={{ height: 150, alignSelf: 'center' }}
                    source={require("../assets/animations/check-mark.json")}
                    speed={0.5}
                    autoPlay
                    loop={false} />

                <View>
                    <Text style={{ alignSelf: 'center', fontSize: 18, fontWeight: 'bold' }}>Your order at {restaurantName} has been place for $ {totalMoney}0 🚀</Text>
                </View>
                {
                    lastOrder.map((order, index) => <Menu key={index} foods={order.item} hideCheckBox={true} />)
                }
                <LottieView style={{ height: 180, alignSelf: 'center', marginTop: -20 }}
                    source={require("../assets/animations/cooking.json")}
                    speed={1}
                    autoPlay />
            </View>
        </SafeAreaView>
    )
}
