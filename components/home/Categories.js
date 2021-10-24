import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'

import { items } from "../../DataTest";
export default function Categories() {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {/* loop start */}
                {items.map((item, index) => (
                    <View style={styles.categories} key={index}>
                        <Image source={item.image} style={styles.category}/>
                        <Text style={styles.categoryText}>{item.text}</Text>
                        {/* <Image source={items[1].image} style={styles.category}/><Text>{items[1].text}</Text>
                        <Image source={items[2].image} style={styles.category}/><Text>{items[2].text}</Text>
                        <Image source={items[3].image} style={styles.category}/><Text>{items[3].text}</Text> */}
                    </View>
                ))}
                {/* loop end */}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        marginTop: 5,
        paddingVertical: 10,
        paddingLeft: 20
    },
    categories:{
        alignItems: 'center',
        marginRight: 30
    },
    category:{
        width: 50,
        height: 40,
        resizeMode: 'contain'
    },
    categoryText:{
        fontSize: 13, 
        fontWeight: '700'
    }
})