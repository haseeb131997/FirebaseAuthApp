import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();


    const checkLogin = async()=>{
        const userEmail= await AsyncStorage.getItem('EMAIL');
        const userPass= await AsyncStorage.getItem('PASSWORD');
        console.log(userEmail,  userPass)
        if(email == userEmail && password == userPass){
          navigation.navigate('Home')
        } else{
            Alert.alert("Error : Wrong Email or Password");
        }
      }
    return (
        <View style={styles.page}>
            <Text style={[styles.text, { marginTop: responsiveHeight(15), marginBottom: responsiveHeight(10), fontSize: responsiveFontSize(3.5) }]}>Welcome</Text>
            <Text style={[styles.text, { color: '#18a935' }]}>Login to continue</Text>
            <View style={styles.container}>
                <Icon name="envelope-o" size={responsiveFontSize(3)} />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    keyboardType='default'
                    placeholder="Enter your name"
                />
            </View >
            <View style={styles.container}>
                <Icon name="lock" size={responsiveFontSize(3.5)} />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    keyboardType="numeric"
                    placeholder="Enter your password"
                />
            </View >
            <TouchableOpacity onPress={() => {checkLogin()}}>
                <View style={[styles.btn, { marginTop: responsiveHeight(4) }]}>
                    <Text style={styles.text}>Login</Text>
                </View>
            </TouchableOpacity>
            <View style={{
                alignItems: 'center', justifyContent: 'center', marginTop: responsiveHeight(10),
                 flexDirection:'row'
            }}>
                <Text style={{color:'#313131'}}>Don't have an account!</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={[styles.text, {color:'green', fontStyle:'italic', marginLeft:5, fontWeight:'500'}]}>Signup Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen
const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fcf9f9'

    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: responsiveWidth(90),
        height: responsiveHeight(6),
        borderRadius: responsiveWidth(2),
        borderWidth: responsiveWidth(0.2),
        marginTop: responsiveHeight(4),
        paddingLeft: responsiveWidth(3)
    },
    input: {
        padding: 5,
        color: '#555',
        // color:"#0000",
        marginLeft: responsiveWidth(2)
    },
    text: {
        fontSize: responsiveFontSize(2),
        color: '#000',
        fontWeight: '600',
    },
    btn: {
        borderRadius: responsiveWidth(2),
        borderWidth: responsiveWidth(0.2),
        backgroundColor: '#0285fb',
        width: responsiveWidth(90),
        height: responsiveHeight(5),
        alignItems: 'center',
        justifyContent: 'center',
    }
})