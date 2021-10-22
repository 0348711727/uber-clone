import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function HeaderBtn({text, btnColor, color, activeTab, setActiveTab}) {
    const styles = StyleSheet.create({
        touchbtn: {
            backgroundColor: activeTab === text ? "black" : "white" ,
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        },
        touchtext: {
            color: activeTab === text ? "white" : "black",
            fontSize: 15,
            fontWeight: '900',
        }
    })
    return (
        <View>
            <TouchableOpacity style={styles.touchbtn} onPress={()=>setActiveTab(text)}>
                <Text style={styles.touchtext}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}
