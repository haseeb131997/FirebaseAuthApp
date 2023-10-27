import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import Icons from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation();
    const saveEailPass = async () => {
        try {
            await AsyncStorage.setItem('NAME', name);
            await AsyncStorage.setItem('MOBILE', mobile);
            await AsyncStorage.setItem('EMAIL', email);
            await AsyncStorage.setItem('PASSWORD', password);
            Alert.alert("You have register sucessfully. Login to Continue !!")
            navigation.navigate('Login')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={styles.page}>
            <Text style={[styles.text, { marginTop: responsiveHeight(10), marginBottom: responsiveHeight(4), fontSize: responsiveFontSize(3.5) }]}>Welcome </Text>
            <View style={styles.container}>
                <Icons name="user" size={responsiveFontSize(3.2)} />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setName(text)}
                    value={name}
                    keyboardType="default"
                    placeholder="Enter your name"
                />
            </View >
            <View style={styles.container}>
                <Icon name="mobile-alt" size={responsiveFontSize(3.5)} />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setMobile(text)}
                    value={mobile}
                    keyboardType="numeric"
                    placeholder="Enter mobile number"
                />
            </View >
            <View style={styles.container}>
                <Icons name="envelope" size={responsiveFontSize(3)} />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    keyboardType='default'
                    placeholder="Enter your email"
                />
            </View >
            <View style={styles.container}>
                <Icons name="lock" size={responsiveFontSize(3.5)} />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    keyboardType="default"
                    placeholder="Enter your password"
                />
            </View >
            <View style={styles.container}>
                <Icons name="lock" size={responsiveFontSize(3.5)} />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setConfirmPassword(text)}
                    value={confirmPassword}
                    keyboardType="default"
                    placeholder="Confirm your password"
                />
            </View >
            <TouchableOpacity onPress={() => { saveEailPass() }}>
                <View style={[styles.btn, { marginTop: responsiveHeight(4) }]}>
                    <Text style={styles.text}>SignUp</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={[styles.text, { marginBottom: responsiveHeight(2), marginTop: responsiveHeight(3), textDecorationLine: 'underline', fontStyle: 'italic', color: '#03361d', fontSize: responsiveFontSize(2.3) }]}>Already have an account!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignupScreen
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