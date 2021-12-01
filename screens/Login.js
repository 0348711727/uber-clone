import React, { useState, useEffect, createRef } from 'react'
import { View, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, Text, Alert } from 'react-native'
import GlobalStyles from "../GlobalStyles";
import LottieView from "lottie-react-native";
import { userConstants } from "../redux/constants";
import { loginService } from "../redux/service";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const passwordInputRef = createRef();

    const dispatch = useDispatch();
    const loginRes = useSelector(state => state.userReducer)
    // const login = async () => {
    //     const loginResponse = await loginService(email, password);
    //     // console.log(JSON.stringify(loginResponse, null, 2))
    //     // const resStatus = await loginResponse.json();
    //     // console.log({ resStatus })   
    //     if (!loginResponse.success) {
    //         dispatch({
    //             type: userConstants.LOGIN_FAILURE,
    //             payload: {
    //                 error: loginResponse.message
    //             }
    //         })
    //         return;
    //         // thực hiện set token ở đây:
    //     }
    //     dispatch({
    //         type: userConstants.LOGIN_SUCCESS,
    //         payload: {
    //             user: loginResponse.user
    //         }
    //     })
    //     // console.log(loginResponse.user)
    //     return AsyncStorage.setItem('email', loginResponse.token)
    // }

    const login = () => {
        return new Promise(async (resolve, reject) => {
            return loginService(email, password).then(async loginResponse => {
                console.log(JSON.stringify(loginResponse, null, 2));
                if (!loginResponse.success) {
                    dispatch({
                        type: userConstants.LOGIN_FAILURE,
                        payload: {
                            error: loginResponse.message
                        }
                    })
                    reject('Login failure');
                    // thực hiện set token ở đây:
                }
                else {
                    dispatch({
                        type: userConstants.LOGIN_SUCCESS,
                        payload: {
                            user: loginResponse.user,
                            message: loginResponse.message
                        }
                    })
                    await AsyncStorage.setItem('email', loginResponse.token)
                    // console.log(loginResponse.user)
                    resolve("Login successful");
                }
            });
        })
    }

    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style={styles.loginView}>
                <LottieView style={{ height: 180 }}
                    source={require("../assets/animations/welcome.json")}
                    speed={1}
                    autoPlay />
                <Text style={styles.loginText}>Login to your Uber Eat Account</Text>
                <TextInput style={styles.loginInput}
                    placeholder="Your Email"
                    onChangeText={(email) => setEmail(email)}
                    onSubmitEditing={() => console.log(passwordInputRef.current && passwordInputRef.current.focus())} />
                <TextInput style={styles.loginInput}
                    placeholder="Your Password"
                    onChangeText={(password) => setPassword(password)}
                    ref={passwordInputRef}
                    secureTextEntry={true}
                />
                <Text style={{ color: 'red', fontStyle: 'italic', alignItems: 'flex-start', marginBottom: 20 }}>{loginRes && loginRes.error}</Text>

                <TouchableOpacity style={styles.loginButton} onPress={() => {
                    login().then(() => navigation.navigate('Profile')).catch(error => console.log(error))
                }} >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    loginView: {
        alignItems: 'center',
        // marginTop: 200
    },
    loginInput: {
        backgroundColor: '#eee',
        height: 50,
        margin: 20,
        borderRadius: 30,
        paddingLeft: 10,
        width: '80%',
        // alignItems: 'center'
    },
    loginButton: {
        backgroundColor: "pink",
        width: 150,
        borderRadius: 30,
        padding: 20,
        alignItems: 'center',
    },
    loginText: {
        fontWeight: 'bold',
        fontSize: 20
    }
})
