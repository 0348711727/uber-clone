import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';

export default function Order({item}) {
    const { name, price } = item;
    const totalMoney = Math.round(price.replace("$", "") * 100)/100;
    return (
        <>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
                <Text style={{fontSize: 16, fontWeight: '600'}}>{name}</Text>
                <Text style={{fontSize: 16, opacity: 0.7}}>$ {totalMoney}0</Text>
            </View>
            <Divider width={1}/>
        </>
    )
}
