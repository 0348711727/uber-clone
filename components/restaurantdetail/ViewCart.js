import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

export default function ViewCart() {
    const items = useSelector((state) => state.cartReducer.selectedItems.items)

    const total = items /// chuyển từ $ thành number để tính toán
        .map((item) => Number(item.price.replace('$', '')))
        .reduce((prev, curr) => prev + curr, 0)

    const totalUSD = total.toLocaleString('en', {      /// chuyển đơn vị từ dạng Number ở trên thành $ 
        style: 'currency',
        currency: 'EUR',
    });

    // console.log(totalUSD)
    return (
        <>
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
                            }}>
                            <Text style={styles.viewcart}>View Cart</Text>
                            <Text style={styles.viewcart}>$ {totalUSD}</Text>
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
    }
})