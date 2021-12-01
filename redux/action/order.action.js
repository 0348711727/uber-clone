import { ADD_TO_CART } from '../../redux/constants';

export const selectItem = (item, checkboxValue) => dispatch => dispatch({
    type: ADD_TO_CART,
    payload: {
        ...item,
        restaurantName,
        checkboxValue
    }
})