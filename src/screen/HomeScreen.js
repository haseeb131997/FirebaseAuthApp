import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        setName(await AsyncStorage.getItem('NAME'));
        setMobile(await AsyncStorage.getItem('MOBILE'));
        setEmail(await AsyncStorage.getItem('EMAIL'));

    }

    const handleLogut=()=>{
        navigation.navigate('Login');
    }

    return (
        <View style={styles.page}>
            <View style={styles.profile}>
                <FontAwesome name="user" color={"#474646"} size={36} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{name}</Text>
                <Text>{email}</Text>
            </View>
            <View style={styles.Container}>
                <View style={{ width: '100%', height: '33%', borderBottomWidth: 1, borderBottomColor: '#c7c1c1', flexDirection: 'row', alignItems:'center' }}>
                    <FontAwesome name="user-o" color={"#474646"} size={24} />
                    <Text style={{marginLeft:20, color:'#111111'}}>{name}</Text>
                </View>
                <View 
                style={{
                     width: '100%', 
                     height: '33%', 
                     borderBottomWidth: 1, 
                     borderBottomColor: '#c7c1c1', 
                     flexDirection: 'row', 
                     alignItems:'center' 
                     }}>
                    <Ionicons name="call-outline" color={"#474646"} size={24} />
                    <Text style={{marginLeft:20, color:'#111111'}}>{mobile}</Text>
                </View>
                <TouchableOpacity onPress={()=>{handleLogut()}}
                style={{ width: '100%', height: '33%', flexDirection: 'row' , alignItems:'center'}}>
                    <MaterialIcons name="logout" color={"#474646"} size={24} />
                    <Text style={{marginLeft:20, color:'#111111'}}>Logout</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default HomeScreen;
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#f5eeee',
        marginTop: 60,
        alignItems: 'center',
    },
    Container: {
        flex: 1,
        position: 'absolute', top: 200,
        width: '95%',
        height: "25%",
        margin: 20,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    profile: {
        width: 70,
        height: 70,
        backgroundColor: '#ffffff',
        borderRadius: 35,
        borderWidth: 2,
        borderColor: "#212121",
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: '500',
        color: '#000000'
    }
})