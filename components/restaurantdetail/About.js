import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function About( props ) {
    const { name, image, reviews, rating, categories, price } = props.route.params;
    const formatCategory = categories.map((category) => category.title).join(' • ')
    const description = `${formatCategory} ${price ? ' • ' + price : ''} ${rating} (${reviews}) `

    return (
        <View>
            <RestaurantImg image={image}/>
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}
const RestaurantImg = (props) => {
   return <Image source={{uri: props.image}} style={styles.aboutImg}/>
}
const RestaurantName = (props) => {
    return <Text style={styles.aboutName}>{props.name}</Text>
}
const RestaurantDescription = (props) => {
    return <Text style={styles.aboutDescription}>{props.description}</Text>
}
const styles = StyleSheet.create({
    aboutImg: {
        width: '100%',
        height: 160
    },
    aboutName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginHorizontal: 15
    },
    aboutDescription: {
        marginTop: 10,
        marginHorizontal: 15,
        fontSize: 15,
        fontWeight: '400',
    }
})