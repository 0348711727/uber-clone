// import config from "../../config";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const loginService = async (email, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ email, password })

    }
    const res = await fetch(`http://192.168.1.21:5000/api/user/login`, requestOptions)
    return res.json();
    // try {
    //     // return axios.post({

    //     // })
    // } catch (error) {
    //     console.log(error)
    // }
    // return fetch(`http://192.168.1.11:5000/api/user/login`, requestOptions)
    // .then((response) => response.json())
    // .then((json) => AsyncStorage.setItem(json.token))

    // return fetch(`${config.API_URL}/user/login`)
}

export const logoutService = () => {
    AsyncStorage.removeItem('user')
}
export const signup = (email, password) => {

}