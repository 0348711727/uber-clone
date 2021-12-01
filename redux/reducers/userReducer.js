import { userConstants } from "../constants";

const initialState = { user: {}, loggedIn: false }
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.LOGIN_SUCCESS:
            return {
                user: action.payload.user,
                loggedIn: true,
                message: action.payload.message
            }
        case userConstants.LOGIN_FAILURE:
            return {
                error: action.payload.error
            };
        case userConstants.LOGOUT:
            return {};
        default: return state;
    }
}
export default userReducer;