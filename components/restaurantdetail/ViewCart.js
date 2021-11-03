import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import { useSelector } from 'react-redux'
import Order from "../restaurantdetail/Order"
import { Divider } from 'react-native-elements/dist/divider/Divider'

export default function ViewCart({navigation}) {
    const [modalVisible, setModalVisible] = useState(false)
    // const items = useSelector((state) => state.cartReducer.selectedItems.items)
    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems)
    const total = items /// chuyển từ $ thành number để tính toán
        .map((item) => Number(item.price.replace('$', '')))
        .reduce((prev, curr) => prev + curr, 0)

    const totalMoney = Math.round(total * 100) / 100;

    const addOrderToDB = () => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                item: items,
                restaurantName: restaurantName,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
            fetch('http://192.168.1.9:5000/orders', requestOptions)
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((err) => console.log(err));
        setModalVisible(false)
        navigation.navigate('OrderCompleted', )
    };
    // const result = await fetch('https://webhook.site/0109c004-e467-47d6-9170-38cc77ef7b10', requestOptions)
    // .then(res => console.log(res))
    // // .then(res => console.log(res))
    // .catch(err => console.log("add thất bại 1"))
    // .then(data => )
    // const result = fetch('http://localhost:5000/orders', requestOptions)
    // const result1 = fetch('http://localhost:5000/orders', requestOptions)
    // const arr = [result, result1];
    // await Promise.all(arr)

    const checkOutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.modalRestaurantName}>{restaurantName}</Text>
                        {items.map((item, index) => (
                            <Order key={index} item={item} />
                        ))}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Sub Total</Text>
                            <Text style={styles.subtotalText}>$ {totalMoney}0</Text>
                        </View>
                        <Divider width={1} />
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => addOrderToDB()} style={styles.modalCheckoutBtn}>
                                <Text style={{ fontSize: 16, color: 'white' }}>Check Out    ${totalMoney}0</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    }
    return (
        <>
            <Modal animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(true)}>
                {checkOutModalContent()}
            </Modal>
            {total ? (
                <View style={{
                    position: 'absolute',
                    flex: 1,
                    zIndex: 999,
                    bottom: 60,
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        width: '100%'
                    }}>
                        <TouchableOpacity opacity={1}
                            style={{
                                marginTop: 20,
                                backgroundColor: 'black',
                                alignItems: 'center',
                                position: 'relative',
                                justifyContent: 'flex-end',
                                borderRadius: 30,
                                padding: 13,
                                width: 300,
                                flexDirection: 'row',
                            }} onPress={() => setModalVisible(true)}>
                            <Text style={styles.viewcart}>View Cart</Text>
                            <Text style={styles.viewcart}>$ {totalMoney}0</Text>
                        </TouchableOpacity>
                    </View>
                </View>)
                : (<></>)}
        </>
    )
}
const styles = StyleSheet.create({
    viewcart: {
        color: 'white',
        fontSize: 20,
        marginRight: 30
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    modalCheckoutContainer: {
        backgroundColor: 'white',
        padding: 16,
        height: 400,
        borderWidth: 1
    },
    modalRestaurantName: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    subtotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    subtotalText: {
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 10,
        marginLeft: 10,
    },
    modalCheckoutBtn: {
        fontSize: 16,
        fontWeight: '900',
        backgroundColor: 'black',
        color: 'white',
        width: 250,
        justifyContent: 'center',
        borderRadius: 30,
        padding: 15,
        marginTop: 20,
        alignItems: 'center',
    }
})