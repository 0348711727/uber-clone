import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function HeaderTab({activeTab, setActiveTab}) {
    // console.log(activeTab)
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
const HeaderBtn = (props) => {
    return (
        <View>
            <TouchableOpacity style={{            
                backgroundColor: props.activeTab === props.text ? "black" : "white" ,
                paddingVertical: 6,
                paddingHorizontal: 16,
                borderRadius: 30,}} onPress={()=>props.setActiveTab(props.text)}>
            <Text style={{            
                color: props.activeTab === props.text ? "white" : "black",
                fontSize: 15,
                fontWeight: 'bold',}}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    headerbtn: {
        flexDirection: 'row',
        alignSelf: 'center',
    }
})