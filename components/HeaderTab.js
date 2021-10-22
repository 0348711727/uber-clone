import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HeaderBtn from './HeaderBtn'

export default function HeaderTab() {
    const [ activeTab, setActiveTab ] = useState(false);
    
    return (
        <View style={styles.headerbtn}>
            <HeaderBtn 
                text="Delivery" 
                btnColor="black"
                color="white"
                activeTab={activeTab} 
                setActiveTab={setActiveTab}/>
            <HeaderBtn 
                text="Pick Up" 
                btnColor="black"
                color="white"
                activeTab={activeTab} 
                setActiveTab={setActiveTab}/>
        </View>
    )
}
const styles = StyleSheet.create({
    headerbtn: {
        flexDirection: 'row',
        alignSelf: 'center',
        // alignItems: 'center',
    }
})