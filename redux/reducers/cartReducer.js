import { ADD_TO_CART } from "../constants/index";
const initialState = { selectedItems: { items: [], restaurantName: '' } }

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            let newState = { ...state }
            if (action.payload.checkboxValue) {
                newState.selectedItems = {
                    items: [
                        ...newState.selectedItems.items,
                        action.payload
                    ],
                    restaurantName: action.payload.restaurantName
                }
                // console.log("ADD TO CART")
            } else {
                // console.log(action.payload.name, 'test')
                // console.log("REMOVE FROM CART")
                newState.selectedItems = {
                    items: [
                        ...newState.selectedItems.items.filter(
                            (item) => item.name !== action.payload.name)//mean if checkbox false, item was in cart will be removed --- lỗi ở đây
                    ],
                }
            }
            // console.log('newState: ', newState)   
            return newState;
        }
        default:
            return state;
    }
}
export default cartReducer;