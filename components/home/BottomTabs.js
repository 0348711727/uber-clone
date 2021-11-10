import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomTabs({ navigation }) {
    return (
        <View style={styles.bottomTabs}>
            <Icon style={styles.tabIcon} icon='home' text="Home" navigation={navigation} page="Home" />
            <Icon style={styles.tabIcon} icon='search' text="Search" />
            <Icon style={styles.tabIcon} icon='shopping-bag' text="Grocery" navigation={navigation} page="" />
            <Icon style={styles.tabIcon} icon='receipt' text="Orders" navigation={navigation} page="OrderCompleted" />
            <Icon style={styles.tabIcon} icon='user' text="Account" />
        </View>
    )
}
const Icon = ({ icon, text, navigation, page }) => {
    return (
        <TouchableOpacity opacity={1} >
            <View style={styles.tabIcon}>
                <FontAwesome5
                    style={styles.tabIcon}
                    name={icon}
                    size={25}
                />
                <Text>{text}</Text>
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