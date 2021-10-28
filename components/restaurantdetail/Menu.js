import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { foods } from "../../DataTest";
import { Divider } from 'react-native-elements/dist/divider/Divider'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

const yelpRestaurantInfo = {
    name: "Vietnam Pho",
    image: "https://s3-media2.fl.yelpcdn.com/bphoto/g-9le0mqVhH-LSNc9B8iQA/o.jpg",
    reviews: "1500",
    price: '$$',
    rating: 4.5,
    categories: [{title: "Pho"}, {title: 'Viet Nam'}]
}
const { name, image, reviews, rating, categories, price } = yelpRestaurantInfo;
const formatCategory = categories.map((category) => category.title).join(' • ')
const description = `${formatCategory} ${price ? ' • ' + price : ''} ${rating} (${reviews}) `

export default function Menu({restaurantName}) {
    const dispatch = useDispatch();
    const selectItem = (item, checkboxValue) => dispatch({
        type: 'ADD_TO_CART',
        payload: {...item, 
            restaurantName,
            checkboxValue}
    })
    const cartItems = useSelector((state) => state.cartReducer.selectedItems.items)

    const isFoodInCart = (food, cartItems) => Boolean(cartItems.find((item) => food.name.includes(item.name)))
    
    return (
        <View>
            { foods.map((food) =>(
                <View key={food.id}>
                    <View style={styles.menuItem}>
                        <BouncyCheckbox iconStyle={{borderColor: 'lightgray',
                                        borderRadius: 0,}}
                                        fillColor = 'green' 
                                        isChecked = {isFoodInCart(food, cartItems)}
                                        onPress = {(checkboxValue) => selectItem(food, checkboxValue)}
                                    />
                            <MenuInfo title={food.name} description={food.description} price={food.price}/>
                            <MenuImg image={food.image} />
                    </View>
                    <Divider width={0.5} orientation="vertical" style={{marginHorizontal: 20}}/>
                </View>
            ))}
        </View>
    )
}
const MenuInfo = (props) => (
        <View style={styles.menuInfo}>
            <Text style={styles.menuTitle}>{props.title}</Text>
            <Text>{props.description}</Text>
            <Text style={styles.menuPrice}>{props.price}</Text>
        </View>
)
const MenuImg = (props) => (
    <View>
        <Image style={styles.menuImg} source={{uri: props.image}}/>
    </View>
)
const styles = StyleSheet.create({
   menuItem: {
       flexDirection: 'row',
       margin: 20,
   },
   menuInfo: {
       width: '63%',
    //    justifyContent: 'space-evenly',
       fontSize: 22
   },
   menuTitle: {
       fontSize: 18,
       fontWeight: 'bold'
   },
   menuImg:{
       width: 100,
       height: 100,
       borderRadius: 8
   },
   menuDescription: {
       fontSize: 8
   },
    menuPrice: {
        fontSize: 13,
        fontWeight: '600'
    },
})