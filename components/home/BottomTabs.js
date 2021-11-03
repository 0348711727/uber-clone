import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomTabs({ navigation}) {
    return (
        <View style={styles.bottomTabs}>
            <Icon style={styles.tabIcon} icon='home' text="Home" onPress={() => navigation.navigate('Home')}/>
            <Icon style={styles.tabIcon} icon='search' text="Search"/>
            <Icon style={styles.tabIcon} icon='shopping-bag' text="Grocery" onPress={() => navigation.navigate('RestaurantDetail') }/>
            <Icon style={styles.tabIcon} icon='receipt' text="Orders" onPress={() => navigation.navigate('OrderCompleted') }/>
            <Icon style={styles.tabIcon} icon='user' text="Account"/>
        </View>
    )
}
const Icon = (props) => {
    return(
        <TouchableOpacity opacity={1}>
            <View style={styles.tabIcon}>
                <FontAwesome5 
                style={styles.tabIcon}
                name={props.icon}
                size={25}
                />
                <Text>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    bottomTabs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        marginHorizontal: 15
    },
    tabIcon: {
        alignItems: 'center',
    }
})