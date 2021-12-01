import AsyncStorage from "@react-native-async-storage/async-storage";

export function authHeader() {
    let email = AsyncStorage.getItem('email');

    if (email && email.token) {
        return {
            'Authorization': 'Bearer' + email.token,
        }
    }
    return {};
}