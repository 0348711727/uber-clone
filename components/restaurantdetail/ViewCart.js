import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function ViewCart() {
    return (
        <View style={{position: 'absolute', 
                    flex: 1,
                    zIndex: 999, 
                    bottom: -55, 
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center'}}>
            <View style={{flexDirection: 'row', 
                        justifyContent: 'center',
                        width: '100%'
                        }}>
                <TouchableOpacity  opacity={1} 
                        style={{marginTop: 20, 
                        backgroundColor: 'black', 
                        alignItems: 'center', 
                        position: 'relative', 
                        borderRadius: 30, 
                        padding: 13, 
                        width: 250}}>
                    <Text style={styles.viewcart}>View Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    viewcart: {
        color: 'white', 
        fontSize: 20
    }
})