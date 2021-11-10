import React, { useState, useEffect } from 'react'
import { View, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, Text, Alert } from 'react-native'
import GlobalStyles from "../GlobalStyles";
import LottieView from "lottie-react-native";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(email, password);
    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View style={styles.loginView}>
                <LottieView style={{ height: 180 }}
                    source={require("../assets/animations/welcome.json")}
                    speed={1}
                    autoPlay />
                <Text style={styles.loginText}>Login to your Uber Eat Account</Text>
                <TextInput style={styles.loginInput} placeholder="Your Email" onChangeText={(email) => setEmail(email)} />
                <TextInput style={styles.loginInput} placeholder="Your Password" onChangeText={(password) => setPassword(password)} />

                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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
