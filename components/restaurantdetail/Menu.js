import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from '../../redux/constants';
import { selectItem } from "../../redux/action";

const yelpRestaurantInfo = {
    name: "Vietnam Pho",
    image: "https://s3-media2.fl.yelpcdn.com/bphoto/g-9le0mqVhH-LSNc9B8iQA/o.jpg",
    reviews: "1500",
    price: '$$',
    rating: 4.5,
    categories: [{ title: "Pho" }, { title: 'Viet Nam' }]
}
const { name, image, reviews, rating, categories, price } = yelpRestaurantInfo;
const formatCategory = categories.map((category) => category.title).join(' • ')
const description = `${formatCategory} ${price ? ' • ' + price : ''} ${rating} (${reviews}) `

export default function Menu({ restaurantName, foods, hideCheckBox, marginLeft }) {
    // console.log('foods: ', foods)
    const dispatch = useDispatch();

    const selectItem = (item, checkboxValue) => dispatch({
        type: ADD_TO_CART,
        payload: {
            ...item,
            restaurantName,
            checkboxValue
        }
    })

    // selectItem(item, checkboxValue)(dispatch);

    const cartItems = useSelector((state) => state.cartReducer.selectedItems.items)

    const isFoodInCart = (food, cartItems) => Boolean(cartItems.find((item) => food.name.includes(item.name)))

    return (
        <ScrollView>
            <View>
                {foods && foods.map((food, index) => (
                    <View key={index}>
                        <View style={styles.menuItem}>
                            {hideCheckBox ? (<></>) : (
                                <BouncyCheckbox iconStyle={{
                                    borderColor: 'lightgray',
                                    borderRadius: 0,
                                }}
                                    fillColor='green'
                                    isChecked={isFoodInCart(food, cartItems)}
                                    onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                                />
                            )}
                            <MenuInfo title={food.name} description={food.description} price={food.price} />
                            <MenuImg image={food.image} marginLeft={marginLeft ? marginLeft : 0} />
                        </View>
                        <Divider width={0.5} orientation="vertical" style={{ marginHorizontal: 20 }} />
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}
const MenuInfo = (props) => (
    <View style={styles.menuInfo}>
        <Text style={styles.menuTitle}>{props.title}</Text>
        <Text>{props.description}</Text>
        <Text style={styles.menuPrice}>{props.price}</Text>
    </View>
)
const MenuImg = ({ marginLeft, ...props }) => (
    <View>
        <Image style={{
            width: 100,
            height: 100,
            borderRadius: 8,
            marginLeft: marginLeft
        }}
            source={{ uri: props.image }} />
    </View>
)
const styles = StyleSheet.create({
    menuItem: {
        flexDirection: 'row',
        margin: 20,
    },
    menuInfo: {
        width: '63%',
        fontSize: 22
    },
    menuTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    menuDescription: {
        fontSize: 8
    },
    menuPrice: {
        fontSize: 13,
        fontWeight: '600'
    },
})